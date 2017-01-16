$(function() {

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

// $('.item-img').hover(function() {
//     /*fade in code*/
// $('.item-text-description').removeClass('hidden');
// }, function() {
//     /*fade out code*/
//     $('.item-text-description').addClass('hidden');
// });
	



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  });

});
