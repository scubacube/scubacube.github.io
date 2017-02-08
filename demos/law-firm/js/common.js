$(function() {

	//menu
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});
	//owl carousel
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: ""
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})
	//Mobile menu
	
	
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: "Меню"
		}
	})
	$(".mobile-mnu").click(function() {
		var sAPI = $("#my-menu").data("mmenu");
		sAPI.open();
		
		var togg = $(this).find(".toggle-mnu");
  		togg.toggleClass("on");
		sAPI.bind("closed", function() {
			togg.removeClass("on");
		});
  		$(".main-mnu").slideToggle();
  		return false;
	});
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//equalHeights
	$(".services-item h4").equalHeights();
	$(".news-item-text").equalHeights();
	$(".links-item").equalHeights();

	//magnific-popup
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
