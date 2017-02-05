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


	
	$( "#slider-range" ).slider({
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


});
