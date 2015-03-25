catAms = [
	["Management, security & consultancy", 282],
	["Development", 661],
	["Hardware", 84],
	["Communication", 13]
];
catLA = [
	["Management, security & consultancy", 11970],
	["Development", 3872],
	["Hardware", 2834],
	["Communication", 1699]
];
catLondon = [
	["Management, security & consultancy", 10034],
	["Development", 3029],
	["Hardware", 1410],
	["Communication", 987]
];

$('#page-5 .category').each(function(){
	this.chart = c3.generate({
		bindto: '#' + $(this).attr('id'),
	    data: {
	        columns: eval($(this).data('ref')),
	        type : 'pie',
			order: null,
			colors: {
				'Management, security & consultancy': colors[3],
				'Development': colors[5],
				'Hardware': colors[9],
				'Communication': colors[13]
			}
	    },
		legend: {
			show: false
		},
		tooltip: {
			show: true
		}
	});
});