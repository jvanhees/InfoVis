// [
// 	['x', '1', '2-4', '5-9', '10-19', '20-49', '50-99', '100-199', '200-499', '500-749', '750-999'],
// 	['All', 0.6720, 0.1962, 0.0591, 0.0258, 0.0288, 0.0045, 0.0061, 0.0030, 0.0015, 0.0030],
// 	['Development', 0.6679, 0.2194, 0.0588, 0.0221, 0.0233, 0.0025, 0.0037, 0.0025, 0.00, 0.00],
// 	['Management, security & consultancy', 0.6757, 0.1644, 0.0653, 0.0338, 0.0383, 0.0068, 0.0068, 0.0023, 0.0023, 0.0045],
// 	['Hardware', 0.8261, 0.1304, 0.000, 0.0217, 0.0000, 0.0000, 0.0000, 0.0217, 0.0000, 0.0000],
// 	['Communication', 0.2857, 0.0714, 0.0714, 0.0000, 0.1429, 0.0714, 0.1429, 0.000, 0.0714, 0.1429]
// ]
//
// {
//     ["Total", 0.67197,0.196212,0.059091,0.025758,0.028788,0.004545,0.006061,0.00303,0.001515,0.00303],
//     ["Development", 0.614431,0.69112,0.615385,0.529412,0.5,0.333333,0.375,0.5,0,0],
//     ["Management, security & consultancy", 0.338219,0.281853,0.371795,0.441176,0.447368,0.5,0.375,0.25,0.5,0.5],
//     ["Hardware", 0.042841,0.023166,0,0.029412,0,0,0,0.25,0,0],
//     ["Communication", 0.00451,0.003861,0.012821,0,0.052632,0.166667,0.25,0,0.5,0.5]
// }

var composition = c3.generate({
	bindto: '#composition-graph',
    data: {
        columns: [
			['x', '1', '2-4', '5-9', '10-19', '20-49', '50-99', '100-199', '200-499', '500-749', '750-999'],
	    	["Development", 0.614431,0.69112,0.615385,0.529412,0.5,0.333333,0.375,0.5,0,0],
		    ["Management, security & consultancy", 0.338219,0.281853,0.371795,0.441176,0.447368,0.5,0.375,0.25,0.5,0.5],
		    ["Hardware", 0.042841,0.023166,0,0.029412,0,0,0,0.25,0,0],
		    ["Communication", 0.00451,0.003861,0.012821,0,0.052632,0.166667,0.25,0,0.5,0.5],
		    ["Total", 0.67197,0.196212,0.059091,0.025758,0.028788,0.004545,0.006061,0.00303,0.001515,0.00303],
		],
        type: 'bar',
		x: 'x',
		colors: {
			'Total': colors[1],
			'Development': colors[4],
			'Management, security & consultancy': colors[7],
			'Hardware': colors[11],
			'Communication': colors[14]
		},
		hide: [
			'Development',
			'Management, security & consultancy',
			'Hardware',
			'Communication'
		],
		groups: [[
			'Total',
			'Development',
			'Management, security & consultancy',
			'Hardware',
			'Communication'
		]],
		order: null
    },
    bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'category', // this needed to load string x value
			label: { // ADD
				text: 'Company size',
				position: 'outer-middle'
			}
        },
		y: {
			tick: {
				format: d3.format('1%') // ADD
			},
			label: { // ADD
				text: 'Percentage of total',
				position: 'outer-middle'
			}
		}
    },
	tooltip: {
		show: false
	}
});