// Simple jQuery to toggle between dark and light theme
$(document).ready(function() {
    $("button").click(function() {
        $("body").toggleClass("dark-theme");
    });
});

// Example of smooth scrolling for anchor links (e.g., for navigation)
$("a").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});
