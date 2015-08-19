$(document).ready(function(){
	console.log("This is actually working")

// BEGIN SCROLL TO PLUGIN

	$("#home").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".home"), 400, {offset:-50});
		});

	$("#about").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".about"), 400, {offset:-50});
	});

	$("#menu").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".menu"), 500, {offset:-50});
	});
});