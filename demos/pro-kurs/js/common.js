$(document).ready(function() {
	// $.stellar();


	
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide",
		nav : false,
		// navText : ["",""],
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



	//функция для хэдера при ресайзе
	// function wResize() {
	// 	$("header").css("min-height", $(window).height());
	// }
	// wResize();
	// $(window).resize(function(){
	// 	wResize();
	// });

	//tabs
	$(".top_telephone .tab_item").not(":first").hide();
	$(".top_telephone .wrapper .tab").click(function() {
		$(".top_telephone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_telephone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_telephone .tab_item").not(":first").hide();
	$(".bottom_telephone .wrapper .tab").click(function() {
		$(".bottom_telephone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_telephone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".header_tabs .tab_item").not(":first").hide();
	$(".header_tabs .wrapper .tab").click(function() {
		$(".header_tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".header_tabs .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_map .tab_item").not(":first").hide();
	$(".tabs_map .tab").click(function() {
		$(".tabs_map .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_map .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
});
$(window).load(function() {
	$(".top_description").animated("bounceInLeft");
	$(".header_tabs .wrapper").animated("flipInY");
});

function initialize()
{
    var latlng = new google.maps.LatLng(18.520266,73.856406);
    var latlng2 = new google.maps.LatLng(28.579943,77.330006);
    var myOptions =
    {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions2 =
    {
        zoom: 15,
        center: latlng2,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);

    var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map,
        title:"Pune"
   });

    var myMarker2 = new google.maps.Marker(
    {
        position: latlng2,
        map: map2,
        title:"Noida"
    });
}