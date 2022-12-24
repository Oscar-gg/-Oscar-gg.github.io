jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

function shortTitle(x) {
  if (x.matches) { 
    document.getElementById("button-j").innerHTML = "Journey";
  } else {
	document.getElementById("button-j").innerHTML = "Programming Journey";
  }
}

var x = window.matchMedia("(max-width: 768px)")
shortTitle(x)
x.addListener(shortTitle)
