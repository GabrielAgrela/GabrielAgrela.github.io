$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutme").offset().top},
        'slow');
});