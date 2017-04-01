$('#but1').click( function() {
	$('#but1').addClass('active');
	$('#but2').removeClass('active');
    $('#but3').removeClass('active');
    $("#car-item1").animate({opacity: "1"}, 150);
    $("#car-item2").animate({opacity: "0"}, 150);
    $("#car-item3").animate({opacity: "0"}, 150);
});
$('#but2').click( function() {
	$('#but2').addClass('active');
	$('#but1').removeClass('active');
    $('#but3').removeClass('active');
    $("#car-item1").animate({opacity: "0"}, 150);
    $("#car-item2").animate({opacity: "1"}, 150);
    $("#car-item3").animate({opacity: "0"}, 150);
});
$('#but3').click( function() {
	$('#but3').addClass('active');
	$('#but2').removeClass('active');
    $('#but1').removeClass('active');
    $("#car-item1").animate({opacity: "0"}, 150);
    $("#car-item2").animate({opacity: "0"}, 150);
    $("#car-item3").animate({opacity: "1"}, 150);
});