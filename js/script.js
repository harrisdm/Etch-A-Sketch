


$(document).ready(function() {
	
	make_grid(16);
	bw_sketch();
	
	$("#bw").click(function() {
		var size = prompt("How many blocks wide?");
		make_grid(size);
		bw_sketch();
	});
	
	$("#color").click(function() {
		var size = prompt("How many blocks wide?");
		make_grid(size);
		color_sketch();
	});
	$("#opacity").click(function() {
	
		var size = prompt("How many blocks wide?");
		make_grid(size);
		opacity_sketch();
	});
	
	
	function make_grid(numSquares) {
		$("#container").empty();
				
		for(var i=0; i<numSquares; i++) {
			for(var j=0; j<numSquares; j++) {
				$("#container").append("<div class='box'></div>");
			}
			$("#container").append("<div class='end_row'></div>");
		}
		var square_size = $('#container').width()/numSquares - 2;	// The -2 accounts for border size
		$(".box").height(square_size);
		$(".box").width(square_size);
	}
	
	function bw_sketch() {
		$(".box").mouseenter(function(){
			$(this).addClass('square_lit');		
		});
	}
	
	function color_sketch() {
		$(".box").mouseenter(function(){
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			$(this).css('background-color', "#" + randomColor);		
		});
	}
	
	function opacity_sketch() {
		$(".box").mouseenter(function(){			
			$(this).addClass('square_lit');
			var currentOpacity = $(this).css("opacity");
			$(this).css("opacity", ( currentOpacity > 0 ) ? ( currentOpacity - 0.1 ) : currentOpacity );
		});
	}
	
});