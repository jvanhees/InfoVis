
var composition = c3.generate({
	bindto: '#composition',
    data: {
        columns: [
			['x', '1', '2-4', '5-9', '10-19', '20-49', '50-99', '100-199', '200-499', '500-749', '750-999', '1000>'],
			['All', 70.96, 17.49, 4.72, 2.77, 2.16, 0.79, 0.53, 0.38, 0.07, 0.04, 0.09],
			['Development', 66.79, 21.94, 5.88, 2.21, 2.33, 0.25, 0.37, 0.25, 0.00, 0.00, 0.00],
			['Management, security & consultancy', 67.57, 16.44, 6.53, 3.38, 3.83, 0.68, 0.68, 0.23, 0.23, 0.45, 0.00],
			['Hardware', 82.61, 13.04, 0.00, 2.17, 0.00, 0.00, 0.00, 2.17, 0.00, 0.00, 0.00],
			['Communication', 28.57, 7.14, 7.14, 0.00, 14.29, 7.14, 14.29, 0.00, 7.14, 14.29, 0.00]
		],
        type: 'bar',
		x: 'x'
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
            type: 'category' // this needed to load string x value
        }
    }
});