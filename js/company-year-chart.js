var specialEvents = [
	{value:1991, text: '\'91 World Wide Web', class: 'www'},
	{value:1998, text: '\'98 Google Search', class: 'google'},
	{value:2000, text: '\'00 dot-com bubble', class: 'dotcom'},
	{value:2004, text: '\'04 Web 2.0', class: 'web20'},
	{value:2007, text: '\'07 Financial Crisis', class: 'crisis'}
]

var yearchart = c3.generate({
	bindto: '#company-year-chart',
	data: {
		x: 'x',
		xFormat: '%Y',
		columns: [
			['x', 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
			['Amsterdam', 0, 0.000108805048554253, 0.000108805048554253, 0.000190408834969943, 0.000136006310692816, 0.0000816037864156897, 0.000190408834969943, 0.000136006310692816, 0.000163207572831379, 0.000217610097108506, 0.000435220194217012, 0.000598427767048391, 0.000571226504909828, 0.000598427767048391, 0.000734434077741207, 0.00130566058265103, 0.00084323912629546, 0.000952044174849713, 0.000897641650572587, 0.00136006310692816, 0.00119685553409678, 0.00127845932051247, 0.00209449718466937, 0.00239371106819356, 0.00372657291298316, 0.00312814514593477, 0.00380817669939885, 0.00514103854418845, 0.00592987514620678],
			['Los Angeles', 0.000144222629575672, 0.000127501165277043, 0.000192296839434229, 0.000183936107284915, 0.000179755741210258, 0.000215288852844844, 0.000255002330554087, 0.000271723794852715, 0.000292625625226001, 0.000380413312793801, 0.000497463562884202, 0.000464020634286945, 0.00103046023740299, 0.000746195344326303, 0.00170976972453478, 0.00216124926059775, 0.00240162030989054, 0.00206928120695529, 0.00207555175606728, 0.00218842164008302, 0.00259600733236209, 0.00317916839977677, 0.00463184561072013, 0.00443536840521124, 0.00514603063790296, 0.00576472481695222, 0.00654227290683845, 0.00659452748277167, 0.00621411416997786],
			['London', 0.000049, 0.000046, 0.000051, 0.000077, 0.00008, 0.00007, 0.000067, 0.000098, 0.000083, 0.000138, 0.000178, 0.0002, 0.00026, 0.000275, 0.000293, 0.000359, 0.000313, 0.000424, 0.000488, 0.00057, 0.000635, 0.000743, 0.001059, 0.001033, 0.001209, 0.001806, 0.002343, 0.003036, 0.003533]
		],
		type: 'spline',
		colors: {
			
		}
	},
	axis: {
		y: {
			label: { // ADD
				text: 'Percentage',
				position: 'outer-middle'
			},
			tick: {
				format: d3.format('.1%') // ADD
			},
			max: 0.007,
			min: 0.0005
		},
		x: {
			show: true,
			label: { // ADD
				text: 'Years',
				position: 'outer-middle'
			},
			tick: {
				format: '%Y'
			}

		}
	},
	grid: {
		x: {
			lines: specialEvents
		}
	},
	tooltip: {
		show: false
	}
});

$('#events > div').hover(function(ev){
	// in
	var event = $(this).data('ref');
	if(event){
		d3.select('#company-year-chart .'+event).classed('active', true);
		yearchart.xgrids(
			specialEvents
		);
	} else {
		var newGrid = specialEvents.concat({value: $(this).data('year'), text: $(this).data('year'), class: 'active'});
		yearchart.xgrids(
			newGrid
		);
	}
}, function(ev){
	// out
	var event = $(this).data('ref');
	if(event){
		d3.select('#company-year-chart .'+event).classed('active', false);
	} else {

	}
});

$('#events').mouseleave(function(ev){
	console.log(ev);
	yearchart.xgrids(
		specialEvents
	);
});