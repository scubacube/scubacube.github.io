$(function() {
	var owl = $("#owl-example");
	$("#owl-example").owlCarousel({
		nav : false,
		dots : false, 
      	slideSpeed : 300,
     	paginationSpeed : 400,
     	singleItem: true,
		pagination: false,
    	rewindSpeed: 500,
		loop: true,
		items: 1
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})

	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".nav-mobile").slideToggle();
	return false;
});
});
