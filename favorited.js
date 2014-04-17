$(document).ready(function(){
	var favoritePhrase = "<span id='phrase'> Click to favorite.</span>";
 	$(".box").on("mouseenter", function(){
 		$(".box").css("width", "150px");
		$("#heart").append(favoritePhrase);
	});
	$(".box").on("mouseleave", function(){
		$("#phrase").remove();
		$(".box").css("width", "25px")
	})
	$("i").on("click", function(){
		$(this).toggleClass("fa-heart-o fa-heart");
	});
});