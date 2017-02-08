// $(".f-properties-item-text").equalHeights();


$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});

 $('.slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	asNavFor: '.slider-nav',
	nextArrow: '<i class="fa fa-chevron-right"></i>',
	prevArrow: '<i class="fa fa-chevron-left"></i>'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-main',
	focusOnSelect: true,
	nextArrow: '<i class="fa fa-chevron-right"></i>',
	prevArrow: '<i class="fa fa-chevron-left"></i>'
});