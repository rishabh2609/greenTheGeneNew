$('#but1').click( function() {
	$('#but1').addClass('selected');
	$('#but2').removeClass('selected');
    $('#but3').removeClass('selected');
    $("#car-item1").animate({opacity: "1"}, 150);
    $("#car-item2").animate({opacity: "0"}, 150);
    $("#car-item3").animate({opacity: "0"}, 150);
});
$('#but2').click( function() {
	$('#but2').addClass('selected');
	$('#but1').removeClass('selected');
    $('#but3').removeClass('selected');
    $("#car-item1").animate({opacity: "0"}, 150);
    $("#car-item2").animate({opacity: "1"}, 150);
    $("#car-item3").animate({opacity: "0"}, 150);
});
$('#but3').click( function() {
	$('#but3').addClass('selected');
	$('#but2').removeClass('selected');
    $('#but1').removeClass('selected');
    $("#car-item1").animate({opacity: "0"}, 150);
    $("#car-item2").animate({opacity: "0"}, 150);
    $("#car-item3").animate({opacity: "1"}, 150);
});