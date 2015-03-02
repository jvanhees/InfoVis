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
	activeSlide++;
	showSlide(activeSlide);
}

function previousSlide(){
	activeSlide--;
	showSlide(activeSlide);
}

function showSlide(slidenumber){
	var $activeSlide = $('.slide#slide-'+slidenumber);
	// Remove active from all
	$('.slide').removeClass('active');
	// Add active
	$activeSlide.removeClass('previous next').addClass('active');
	
	// Add next
	$activeSlide.prevAll().addClass('previous');
	$activeSlide.nextAll().addClass('next');
}