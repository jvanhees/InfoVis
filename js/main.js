//d3.csv('data/data_small.csv', function(error, data){
//    if (error) return console.error(error);
//    console.log(data); 
//});

var colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];

var width = '100%',
    height = '100%';

var svg = d3.select(".container #slide-1").append("svg")
    .attr("width", width)
    .attr("height", height);


var activeSlide = parseInt($('.pages .active').attr('id').replace('page-', ''));
var state = 0;

function nextSlide(){
	showSlide(activeSlide + 1);
}

function previousSlide(){
	showSlide(activeSlide - 1);
}

function showSlide(slideNumber){
	var $slide = $('.page#page-'+slideNumber);
	if($slide.length > 0){
		activeSlide = slideNumber;
	
		// Remove active from all
		$('.page').removeClass('active before after first');
		// Add active
		$slide.removeClass('before after first').addClass('active');
		
		// Add next
		$slide.prev().addClass('first');
		$slide.prevAll().addClass('before');
		$slide.next().not('#next-button').addClass('first');
		$slide.nextAll().not('#next-button').addClass('after');
		// $('#next-button').addClass('quick-hide');
		setTimeout(function(){
			$(document).trigger('nextSlide', {'slide': slideNumber});
		}, 500);
	}
}

$.material.init();