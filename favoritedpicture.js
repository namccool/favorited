$(document).ready(function(){
	var favoritePhrase = "<span id='phrase'>Add to favorites.</span>";
 	$(".box").on("mouseenter", function(){
 		$(".box").css("width", "165px");
		$("#heart").prepend(favoritePhrase);
	});
	$(".box").on("mouseleave", function(){
		$("#phrase").remove();
		$(".box").css({"width": "25px"})
	})
	$("i").on("click", function(){
		$(this).toggleClass("fa-heart-o fa-heart");
	});
});