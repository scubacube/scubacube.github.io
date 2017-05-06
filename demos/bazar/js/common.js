$(function() {

	// $(document).ready(function () {
    //     $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
        
    //     $('#overlay').on("mouseup",function(){          // lock it when mouse up
    //         $('#map').addClass('scrolloff'); 
    //         //somehow the mouseup event doesn't get call...
    //     });
    //     $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
    //         $('#map').removeClass('scrolloff');
    //     });
    //     $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
    //         $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
    //                                                     // or you can do it on some other event
    //     });
        
    // });
    $(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".nav-mobile").slideToggle();
	return false;
});


$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
name1: name,
email1: email,
message1: message
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your Query has been received, We will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});


});
