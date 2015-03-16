// //Regular pie chart example
// nv.addGraph(function() {
//	var chart = nv.models.pieChart()
//		 .x(function(d) { return d.label })
//		 .y(function(d) { return d.value })
//		 .showLabels(true);
//
//	  d3.select("#company-types svg")
//			.datum(categoriesAmsterdam())
//			.transition().duration(350)
//			.call(chart);
//
//	return chart;
// });

nv.addGraph(function() {
  var chart = nv.models.pieChart()
		.x(function(d) { return d.label })
		.y(function(d) { return d.value })
		.showLegend(false)
		.showLabels(true)	  //Display pie labels
		.labelThreshold(.05)  //Configure the minimum slice size for labels to show up
		.labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
		.donut(false)			 //Turn on Donut mode. Makes pie chart look tasty!
		.donutRatio(0.35)	  //Configure how big you want the donut hole size to be.
		;

	  d3.selectAll(".categories svg").each(function(){
		  var element = d3.select(this);
			 element.datum(eval(element.attr('data')))
		  .transition().duration(350)
		  .call(chart);
		  nv.utils.windowResize(chart.update);
	  });
		return chart;
});
