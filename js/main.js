//d3.csv('data/data_small.csv', function(error, data){
//    if (error) return console.error(error);
//    console.log(data); 
//});

var width = '100%',
    height = '100%';

var svg = d3.select(".container #slide-1").append("svg")
    .attr("width", width)
    .attr("height", height);


var activeSlide = 1;
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
		$slide.next().addClass('first');
		$slide.nextAll().addClass('after');
	}
}

$.material.init();