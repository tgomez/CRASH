function drawChart(finalData) {
    let margin = {top : 40, right : 20, bottom : 30, left : 100},
        width  = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        x      = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1),
        y      = d3.scale.linear()
            .range([height, 0]),
        xAxis  = d3.svg.axis()
            .scale(x)
            .orient("bottom"),
        yAxis  = d3.svg.axis()
            .scale(y)
            .orient("left"),
        tip    = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
                return "<strong>Incidents:</strong> <span style='color:red'>" + d.incidentCount + "</span>";
            }),
        svg    = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);
    data = finalData;
    x.domain(data.map(function (d) {
        return d.day_of_week;
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
        .attr("dy", ".20em")
        .attr("transform", "rotate(-20)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".75em")
        .style("text-anchor", "end")
        .text("Collision Count");

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.day_of_week);
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
    let sorted_data = _.countBy(data, function (d) {
        if (d.day_of_week === "Monday") return "Monday";
        if (d.day_of_week === "Tuesday") return "Tuesday";
        if (d.day_of_week === "Wednesday") return "Wednesday";
        if (d.day_of_week === "Thursday") return "Thursday";
        if (d.day_of_week === "Friday") return "Friday";
        if (d.day_of_week === "Saturday") return "Saturday";
        if (d.day_of_week === "Sunday") return "Sunday";
    });
    console.log("Sort data by day of week", sorted_data);
    let lastDate, lastDay, day_of_week, incidentCount = 0, finalArr = [], tmpObj;
    let keys                                          = _.keys(sorted_data);
    for (i in keys) finalArr.push({day_of_week : keys[i], incidentCount : sorted_data[keys[i]]});

    console.log("Final data for preparing graph", finalArr);
    drawChart(finalArr);

    /*let sorted_data = _.sortBy(data, function(d){ return d.date; });
    console.log("Sort data by date", sorted_data);
    let lastDate, lastDay, day_of_week, incidentCount = 0, finalArr = [], tmpObj;
    _.each(sorted_data, function (val, key) {
        if(key === 0) {
             lastDate = val.date;
             lastDay = val.day_of_week;
        }

        if(new Date(lastDate).getTime() === new Date(val.date).getTime()){
            incidentCount++;
            day_of_week = val.day_of_week;
            lastDate = val.date;
        }else {
            tmpObj = {date: lastDate, day_of_week : day_of_week, incidentCount : incidentCount};
            incidentCount = 0;
            lastDay = val.day_of_week;
            lastDate = val.date;
            finalArr.push(tmpObj);
        }

    });

    console.log("Final data for preparing graph", finalArr);
    drawChart(finalArr);*/
});
