$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 120) {
            $('#menu-header').addClass('fixed');
            console.log('adicionou');
        } else {
            $('#menu-header').removeClass('fixed');
            console.log('removeu');
        }
    });
    $(".scrollTo").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($(target).offset().top -60)
        }, 500);
     });
});


