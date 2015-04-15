

$(document).ready(function() {
	
	sketch(16);
	
	$("#bw").click(function() {	sketch(null, 1); });
	$("#color").click(function() { sketch(null, 2); });
	$("#opacity").click(function() { sketch(null, 3); });
	
	
	function sketch(size, option) {
		
		size = size || prompt("How many blocks wide?");
		option = option || 1;
		
		make_grid(size);
		
		$(".box").mouseenter(function(){
			switch(option) {
				case 1:		$(this).addClass("box_lit");	
							break;
				case 2:		var randomColor = Math.floor(Math.random()*16777215).toString(16);
							$(this).css('background-color', "#" + randomColor);	
							break;
				case 3:		$(this).addClass("box_lit");
							var currentOpacity = $(this).css("opacity");
							$(this).css("opacity", ( currentOpacity > 0 ) ? ( currentOpacity - 0.1 ) : currentOpacity );
							break;
				default:	$(this).addClass("box_lit");	
			}
		});
	}
	
	
	function make_grid(numSquares) {
		$("#sketchContainer").empty();
				
		for(var i=0; i<numSquares; i++) {
			for(var j=0; j<numSquares; j++) {
				$("#sketchContainer").append("<div class='box'></div>");
			}
			$("#sketchContainer").append("<div class='end_row'></div>");
		}
		var square_size = $('#sketchContainer').width()/numSquares - 2;	// The -2 accounts for border size
		$(".box").height(square_size);
		$(".box").width(square_size);
	}
	
});

