$(document).ready(function(){
	console.log("This is actually working")

// BEGIN SCROLL TO PLUGIN

	$("#home").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".home"), 400, {offset:-50});
		});

	$("#destinations").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".destinations"), 400, {offset:-50});
	});

	$("#other").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".other"), 500, {offset:-50});
	});

	$("#mailing").click(function(){
		console.log("Clicked")
			$.scrollTo( $(".mailing"), 500, {offset:-50});
	});
});