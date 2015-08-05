$(document).ready(function(){
	console.log("This is actually working")

// BEGIN SCROLL TO PLUGIN

	$("#home").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".home"), 400, {});
		});

	$("#equipment").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".equipment"), 400, {});
	});

	$("#featured").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".featured"), 500, {});
	});


	$('.albums').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});

});

// END SCROLL PLUGIN



