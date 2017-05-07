$(function() {

	$("#owl-example").owlCarousel({
		navigation : false,
		dots : false, 
      	slideSpeed : 300,
     	paginationSpeed : 400,
     	singleItem: true,
		pagination: false,
    	rewindSpeed: 500,
		loop: true,
		items: 1
	});
	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".nav-mobile").slideToggle();
	return false;
});
});
