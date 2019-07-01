
// Function to check to see if element is in viewport
(function($) {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewTop = $(window).scrollTop();
    var viewBottom = viewTop + $(window).height();
    return elementBottom > viewTop && elementTop < viewBottom;
  };
})(jQuery);

// When each row is in the viewport, add the slide class, to animate it
$(window).scroll(function(event) {
  $(".row").each(function(i, el) {
    var el = $(el);
    if (el.isInViewport(true)) {
      // el.addClass("slide");
      el.addClass("fade-in-right-more");

    }
  });
});

// Smooth scroll 
// $("a[href^='#']").click(function(e) {
// 	e.preventDefault();

// 	$("body, html").animate({
// 		scrollTop: $($(this).attr("href")).offset().top
// 	}, 500,'linear' );
// });

function copyEmail(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}



// Clipboard

// var clipboard = new Clipboard('.test');

// clipboard.on('success', function(e) {
// 	var btn = $(e.trigger);
//   setTooltip(btn, 'Copied');
//   hideTooltip(btn);
// });

$(function () {
  $(document).scroll(function () {

    var $nav = $("#hamburger");
    var $header = $("#project-header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $header.height());
	});
});