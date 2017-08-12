 $(document).ready(function() {

    if ($(document).scrollTop() < 80) {
        $('nav').css('background', 'transparent').css('box-shadow', 'none').css('color', 'white');
        $('nav a').css('color', 'white');
    }else {
        $('nav .navbar-nav a').css('color', 'rgba(0, 0, 0, 0.3)');
        $('nav .navbar-brand a').css('color', 'black');
        $('nav').css('background', 'white').css('box-shadow', '0px 6px 10px rgba(0, 0, 0, 0.15)');
        
    }

    
    $(window).scroll( function () {
        if ($(document).scrollTop() < 80) {
            $('nav').css('background', 'transparent').css('box-shadow', 'none').css('color', 'white');
            $('nav a').css('color', 'white');
        }else {
            $('nav .navbar-nav a').css('color', 'rgba(0, 0, 0, 0.3)');
            $('nav .navbar-brand a').css('color', 'black');
            $('nav').css('background', 'white').css('box-shadow', '0px 6px 10px rgba(0, 0, 0, 0.15)');
            
        }
    });
})