$('#fnd-btn').click(function () {
	$('#founders').show(200);
	$('#board').hide(0);
	$('#advisors').hide(0);
	$('#h-dis').html("Founders");
});
$('#brd-btn').click(function () {
	$('#board').show(200);
	$('#founders').hide(0);
	$('#advisors').hide(0);
	$('#h-dis').html("Board");
});
$('#adv-btn').click(function () {
	$('#advisors').show(200);
	$('#founders').hide(0);
	$('#board').hide(0);
	$('#h-dis').html("Advisors");
});
$('#ndir-btn').click(function () {
	TweenMax.to ( "#map", 0.5, 
		{
			opacity: 1,
			scale: 1,
			ease: Back.easeOut
		}
		);
});
$('#close-btn').click(function () {
	TweenMax.to ( "#map", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);
});

$('#asia').click(function () {
	TweenMax.to ( "#asia-members", 0.5, 
		{
			opacity: 0.8,
			scale: 1,
			delay: 0.5,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#europe", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#africa", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#northamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#southamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
});

$('#europe').click(function () {
	TweenMax.to ( "#europe-members", 0.5, 
		{
			opacity: 0.8,
			scale: 1,
			delay: 0.5,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#asia", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#africa", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#northamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#southamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
});
$('#northamerica').click(function () {
	TweenMax.to ( "#northamerica-members", 0.5, 
		{
			opacity: 0.8,
			scale: 1,
			delay: 0.5,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#asia", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#africa", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#europe", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#southamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
});

$('#southamerica').click(function () {
	TweenMax.to ( "#southamerica-members", 0.5, 
		{
			opacity: 0.8,
			scale: 1,
			delay: 0.5,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#asia", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#africa", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#europe", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#northamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
});

$('#africa').click(function () {
	TweenMax.to ( "#africa-members", 0.5, 
		{
			opacity: 0.8,
			scale: 1,
			delay: 0.5,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#asia", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#southamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#europe", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#northamerica", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 0,
			ease: Back.easeOut
		}
		);
});

$('.close-mem-btn').click(function () {
	TweenMax.to ( "#africa-members", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);
	TweenMax.to ( "#southamerica-members", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);
	TweenMax.to ( "#northamerica-members", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);
	TweenMax.to ( "#asia-members", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);
	TweenMax.to ( "#europe-members", 0.5, 
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeIn
		}
		);

	TweenMax.to ( "#asia", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#southamerica", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#europe", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#northamerica", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#africa", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#top", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
	TweenMax.to ( "#msg-info", 0.5, 
		{
			opacity: 1,
			ease: Back.easeOut
		}
		);
});