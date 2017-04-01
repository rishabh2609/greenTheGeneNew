$('#img-item2').mouseenter(function() {
	$('#img-item1').animate({marginLeft: "-50%"}, 200);
	$('#img-item2').animate({marginLeft: "25%"}, 200);
});
$('#img-item1').mouseenter(function() {
	$('#img-item1').animate({marginLeft: "0%"}, 200);
	$('#img-item2').animate({marginLeft: "75%"}, 200);
});