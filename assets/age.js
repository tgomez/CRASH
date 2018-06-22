function drawChart(finalData) {

    var margin = {top : 40, right : 20, bottom : 30, left : 100},
        width  = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
    //.tickFormat(formatPercent);

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function (d) {
            return "<strong>Incidents:</strong> <span style='color:red'>" + d.incidentCount + "</span>";
        })

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    data = finalData;
    x.domain(data.map(function (d) {
        return d.age;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.incidentCount;
    })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Incidents");

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.age);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.incidentCount);
        })
        .attr("height", function (d) {
            return height - y(d.incidentCount);
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
    $("div#preloader").hide();

}

$("div#preloader").show();
d3.json("collision.json", function (err, data) {
    let sorted_data = _.sortBy(data, function (d) {
        return d.age;
    });
    console.log("Sort data by age", sorted_data);
    let lastAge, incidentCount = 0, finalArr = [], tmpObj;
    _.each(sorted_data, function (val, key) {
        if (key === 0) {
            lastAge = val.age;
        }

        if (lastAge === val.age) {
            incidentCount++;
            lastAge = val.age;
        } else {
            tmpObj        = {age : lastAge, incidentCount : incidentCount};
            incidentCount = 0;
            lastAge       = val.age;
            finalArr.push(tmpObj);
        }
    });
    console.log("Final data for preparing graph", finalArr);
    drawChart(finalArr);
});
