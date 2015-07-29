$(document).ready(function(){
	console.log("This is actually working")

// BEGIN SCROLL TO PLUGIN

	$("#work").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#work-title"), 400, {});
		});

	$("#news").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#news-title"), 400, {});
	});

	$("#blog").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#blog-title"), 500, {});
	});

	$("#about").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#about-title"), 500, {});
	});

	$("#network").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#network-title"), 500, {});
	});

	$("#contact").click(function(){
		console.log("Clicked")
			$.scrollTo( $("#contact-title"), 600, {});
	});


	$(window).on("scroll", function(e) {
		// console.log("user scrolled");

		// console.log( $(window).scrollTop() );

		if($(window).scrollTop()> 365){

			$("nav").addClass("fixed")
		} else {
			$("nav").removeClass("fixed")
		}

	});

});


// END SCROLL PLUGIN

