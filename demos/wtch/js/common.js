$(function() {

	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav : false,
		navText : ["",""],
		// navText: "", //----изза этого не работал drag
		touchDrag: true,
     	mouseDrag: true
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})

	$(".product-item, .product-item-big").equalHeights();
	// $(".product-item-description h4").equalHeights();
	$(".bestsellers-item-description").equalHeights();


	
	$( "#slider-range").slider({
	range: true,
	min: 0,
	max: 1200,
	values: [ 75, 300 ],
	slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	$( "#slider-range-hidden").slider({
	range: true,
	min: 0,
	max: 1200,
	values: [ 75, 300 ],
	slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );



	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
	});
	$(".btn-red-filters").click(function() {
	$(this).toggleClass("on");
	$(".items-filters").slideToggle();
	return false;
});
	$(".btn-red-sorting").click(function() {
	$(this).toggleClass("on");
	$(".sorting").slideToggle();
	return false;
});


	 $('.slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	asNavFor: '.slider-nav-content',
	nextArrow: '<i class="fa fa-chevron-right"></i>',
	prevArrow: '<i class="fa fa-chevron-left"></i>'
});
$('.slider-nav-content').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-main',
	infinite: true,
	focusOnSelect: true,
	nextArrow: '<i class="fa fa-chevron-right"></i>',
	prevArrow: '<i class="fa fa-chevron-left"></i>'
});

});
