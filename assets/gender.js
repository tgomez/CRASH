function drawChart(finalArr) {
    let margin = {top : 20, right : 160, bottom : 100, left : 100},
        width  = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        svg = d3.select(".chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    /* Data in strings like it would be if imported from a csv */

    let data = finalArr;


    // Transpose the data into layers
    let dataset = d3.layout.stack()(["female", "male"].map(function (sex) {
        return data.map(function (d) {
            return {x : d.area, y : +d[sex]};
        });
    }));


    // Set x, y and colors
    let x = d3.scale.ordinal()
        .domain(dataset[0].map(function (d) {
            return d.x;
        }))
        .rangeRoundBands([10, width - 10], 0.02);

    let y = d3.scale.linear()
        .domain([0, d3.max(dataset, function (d) {
            return d3.max(d, function (d) {
                return d.y0 + d.y;
            });
        })])
        .range([height, 0]);

    let colors = ["#f2b447", "#d9d574"];

    // Define and draw axes
    let yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(-width, 0, 0)
        .tickFormat(function (d) {
            return d
        });

    let xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");


    // Create groups for each series, rects for each segment
    let groups = svg.selectAll("g.cost")
        .data(dataset)
        .enter().append("g")
        .attr("class", "cost")
        .style("fill", function (d, i) {
            return colors[i];
        });

    let xPosition,
        yPosition;
    let rect = groups.selectAll("rect")
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d) {
            return x(d.x);
        })
        .attr("y", function (d) {
            return y(d.y0 + d.y);
        })
        .attr("height", function (d) {
            return y(d.y0) - y(d.y0 + d.y);
        })
        .attr("width", x.rangeBand())
        .on("mouseover", function () {
            tooltip.style("display", null);
        })
        .on("mouseout", function () {
            tooltip.style("display", "none");
        })
        .on("mousemove", function (d) {
            xPosition = d3.mouse(this)[0] - 15;
            yPosition = d3.mouse(this)[1] - 25;
            tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
            tooltip.select("text").text(d.y);
        });

    // Draw legend
    let legend = svg.selectAll(".legend")
        .data(colors)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(30," + i * 19 + ")";
        });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function (d, i) {
            return colors.slice().reverse()[i];
        });

    legend.append("text")
        .attr("x", width + 5)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function (d, i) {
            switch (i) {
                case 0:
                    return "Male";
                case 1:
                    return "Female";
            }
        });


    // Prep the tooltip bits, initial display is hidden
    let tooltip = svg.append("g")
        .attr("class", "tooltip")
        .style("display", "none");

    tooltip.append("rect")
        .attr("width", 30)
        .attr("height", 20)
        .attr("fill", "white")
        .style("opacity", 0.5);

    tooltip.append("text")
        .attr("x", 15)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold");

    $("div#preloader").hide();
}


$("div#preloader").show();

d3.json("collision.json", function (err, data) {
    let sorted_data = _.sortBy(data, function (d) {
        return d.area;
    });

    console.log("Sort data by area", sorted_data);
    let filteredData = _.filter(sorted_data, function (d) {
        if(d.area) return true; else return false;
    });

    console.log("Filtered data by area", filteredData);
    let lastArea, male = 0, female = 0, finalArr = [], tmpObj;
    _.each(filteredData, function (val, key) {
        if (key === 0) {
            lastArea = val.area;
        }

        if (lastArea === val.area) {
            val.sex === "M" ? male++ : female++;
            lastArea = val.area;
        } else {
            tmpObj   = {area : lastArea, male : male, female : female};
            female   = 0;
            male     = 0;
            lastArea = val.area;
            finalArr.push(tmpObj);
        }
    });
    console.log("Final data for preparing graph", finalArr);
    drawChart(finalArr);
});