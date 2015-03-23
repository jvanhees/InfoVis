console.log(colors.filter(function(element, index, array){
	if(index % 3 == 2){
		return true;
	}
}));
nv.addGraph(function() {
  var chart = nv.models.lineChart()
    .useInteractiveGuideline(true)
	.color(colors.filter(function(element, index, array){
		if(index % 4 == 2){
			return true;
		}
	}))
    ;

  chart.xAxis
    .axisLabel('Year')
    .tickFormat(d3.format('04d'))
    ;

  chart.yAxis
    .axisLabel('Company percentage (%)')
    .tickFormat(d3.format('.3%'))
    ;

  d3.select('#company-year-chart svg')
    .datum(companiesPerYear())
    .transition().duration(500)
    .call(chart)
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});
