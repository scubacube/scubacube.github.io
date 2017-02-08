$(function() {
// $('.item-text-description').equalHeight();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

// function wResize() {
// 		$("header").css("min-height", $(window).height());
// 	};
// 	wResize();
// 	$(window).resize(function() {
// 		wResize()
// 	});
$(window).scroll(function () {
	var pos = $(this).scrollTop();
	$(".top-line, header .container").css({
		"transform": "translate(0%, -" + pos / 12 + "%"
	});
});


$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $("header").height()+150 }, "slow");
		return false;
	});

$('.item-img').hover(function() {
    /*fade in code*/
$('.item-text-description').removeClass('hidden');
}, function() {
    /*fade out code*/
    $('.item-text-description').addClass('hidden');
});
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};


$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});




$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	$('html, body').animate({
		scrollTop: target.offset().top
	}, 1000);
	return false;
	}
}
});

});
