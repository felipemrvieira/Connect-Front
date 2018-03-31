$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 120) {
            $('#menu-header').addClass('fixed');
        } else {
            $('#menu-header').removeClass('fixed');
        }
    });
    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var elemento = $('#menu-header').hasClass('fixed');
    if (elemento) {
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 60)
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 170)
        }, 500);
    }

});
});


