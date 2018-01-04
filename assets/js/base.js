var main = function () {


	
	$('.ref-but').mouseenter(function(e) {
		$(this).css({
			"background-color": "#131313",
			"color": "#fff",
		});
	});
	$('.ref-but').mouseleave(function(e) {
		$(this).css({
			"background-color": "#fff",
			"color": "#131313",
		});
	});
}
$(document).ready(main);