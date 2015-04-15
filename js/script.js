/********************

	script.js
	Mark Harris - 4/15/2015
 
	JS/Jquery Etch-A-Sketch Project for
	http://www.theodinproject.com/web-development-101/javascript-and-jquery

********************/

$(document).ready(function() {
	
	// the default sketch grid and effect
	sketch(1,16);
	
	// change the effect when sketching
	$("#bw").click(function() {	sketch(1); });
	$("#color").click(function() { sketch(2); });
	$("#opacity").click(function() { sketch(3); });
	
	
	function sketch(option, size) {
		
		// if the size isn't set, ask user for size
		size = size || prompt("How many blocks wide?");
		
		// create a grid of width and heigh [size]
		make_grid(size);
		
		
		$(".box").mouseenter(function(){
			switch(option) {
				case 2:		// random colour effect
							var randomColor = Math.floor(Math.random()*16777215).toString(16);								// create a random hex value
							$(this).css('background-color', "#" + randomColor);												// change the css of the box
							break;																
				case 3:		// increasing opacity effect
							$(this).addClass("box_lit");																	// assign the box the [box_lit] class to add colour
							var currentOpacity = $(this).css("opacity");													// find the current opacity of the box
							$(this).css("opacity", ( currentOpacity > 0 ) ? ( currentOpacity - 0.1 ) : currentOpacity );	// change the opacity of the box
							break;
				default:	// black & white effect
							$(this).addClass("box_lit");	
			}
		});
	}
	
	
	// create a new grid of the desired size
	function make_grid(numSquares) {
		
		// delete the current grid
		$("#gridContainer").empty();
		// option 2 =  $("gridContainer").html("");
		// option 3 =  $("gridContainer").delete(".box");
		
		// iterate through loop adding boxes to the gridContainer
		for(var i=0; i<numSquares; i++) {
			for(var j=0; j<numSquares; j++) {
				$("#gridContainer").append("<div class='box'></div>");
			}
			// This forces a new line so that [size] rounding doesn't result in extra boxes on a row
			$("#gridContainer").append("<div class='end_row'></div>");
		}
		
		// calculate and set the box width and height
		var square_size = $('#gridContainer').width()/numSquares - 2;															// The -2 accounts for border size
		$(".box").height(square_size);
		$(".box").width(square_size);
	}
	
});

