var colors = [
	'#F44336',
	'#E91E63',
	'#9C27B0',
	'#673AB7',
	'#3F51B5',
	'#2196F3',
	'#03A9F4',
	'#00BCD4',
	'#009688',
	'#4CAF50',
	'#8BC34A',
	'#CDDC39',
	'#FFEB3B',
	'#FFC107',
	'#FF9800',
	'#FF5722',
	'#795548',
	'#9E9E9E',
	'#607D8B'
];

var width = '100%',
    height = '100%';

var svg = d3.select(".container #slide-1").append("svg")
    .attr("width", width)
    .attr("height", height);

var activeSlide = 1;
var totalStates = 1;

$(document).ready(function(){
	activeSlide = parseInt($('.pages .active').attr('id').replace('page-', ''));
	totalStates = $('.pages .active').find('.state').length;
});

var activeState = 1;

function nextSlide(){
	if(activeState < totalStates){
		activeState++;
		broadcast();
	} else {
		showSlide(activeSlide + 1);
	}
}

function previousSlide(){
	if(activeState > 1){
		activeState--;
	} else {
		showSlide(activeSlide - 1);
	}
}

$(document).on('update', function(data){
	console.log('slide:' + data.activeSlide);
	console.log('state:' + data.activeState);
});

function showSlide(slideNumber){
	var $slide = $('.page#page-'+slideNumber);
	if($slide.length > 0){
		totalStates = $slide.find('.state').length;
		activeState = 1;
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
			broadcast();
		}, 1000);
		
	}
}

function broadcast(){
	if(activeState == totalStates){
		// Last state..
		$('.next-button i').removeClass('mdi-navigation-expand-more').addClass('mdi-navigation-arrow-forward');
	} else {
		$('.next-button i').removeClass('mdi-navigation-arrow-forward').addClass('mdi-navigation-expand-more');
	}
	$(document).trigger({
		type: 'update',
		activeSlide: activeSlide,
		activeState: activeState
	});
}

$.material.init();
