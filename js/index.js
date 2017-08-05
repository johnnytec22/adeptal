$(document).ready(function() {

    $('#showcase').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left fa-fw' style='color: #2C61EA; font-size: 20px'></i>",
            "<i class='fa fa-angle-right fa-fw' style='color: #2C61EA; font-size: 20px'></i>"
        ],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    var test = $(".testimony-carousel");
    test.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left fa-fw' style='color: #2C61EA; font-size: 20px'></i>",
            "<i class='fa fa-angle-right fa-fw' style='color: #2C61EA; font-size: 20px'></i>"
        ],
        center: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $(".testimony-carousel .item").on('mouseenter', function() {
        test.trigger('stop.owl.autoplay')
    });
    $(".testimony-carousel .item").on('mouseleave', function() {
        test.trigger('play.owl.autoplay')
    });


    

    $(window).bind('resize load', function() {
        if($(window).width() < 768) {
            $('.adeptal-column .content p').addClass('text-center');
        }else{
            $('.adeptal-column .content p').removeClass('text-center');
        }
    });

    
    $('nav').css('background', 'transparent');
    $('nav a').css('color', 'white');

    
    $(window).scroll( function () {
        if ($(document).scrollTop() < 200) {
            $('nav').css('background', 'transparent').css('box-shadow', 'none').css('color', 'white');
            $('nav a').css('color', 'white');
        }else {
            $('nav .navbar-nav a').css('color', 'gray');
            $('nav .navbar-brand a').css('color', 'black');
            $('nav').css('background', 'white').css('box-shadow', '0px 6px 10px rgba(0, 0, 0, 0.15)');
            
        }
    })

})