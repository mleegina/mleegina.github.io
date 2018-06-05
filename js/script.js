// Function to get the current month to display on favorites
(function getMonth() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    var date = new Date();
    var m = months[date.getMonth()];
    document.getElementById('current-month').innerHTML = m; 

})();

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
    $('.row').each(function(i, el) {
        var el = $(el);
        if (el.isInViewport(true)) {
            el.addClass("slide");
        }
    });
});