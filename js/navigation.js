$(document).ready(function() {
  $("#hamburger").click(function() {
    $(this).toggleClass("active");

  });
});

function toggleNav() {
    if ($("#nav-panel").is(":visible")) {
        $("#nav-content").animate(
            {
                opacity: "0"
            },
            200,
            function(){
                $("#nav-panel").slideUp();
            }
        );
    }
    else {
        $("#nav-panel").slideDown(200, function(){
            $("#nav-content").animate(
                {
                    opacity: "1"
                },
                200
            );
        });
    }   
}