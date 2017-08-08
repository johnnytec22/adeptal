
//the following controls the background changing functionality attached to the navbar both on-scroll and at the top
$(document).ready(function() {

    function determineNavBarBackground() {
        if ($(document).scrollTop() < 80) {
            $('nav .navbar-toggle .icon-bar').css('background', 'white');
            $('nav').css('background', 'transparent').css('box-shadow', 'none').css('color', 'white');
            $('nav a').css('color', 'white');
        }else {
            $('nav .navbar-toggle .icon-bar').css('background', 'dodgerblue');
            $('nav .navbar-nav a').css('color', 'rgba(0, 0, 0, 0.4)');
            $('nav .navbar-brand a').css('color', 'black');
            $('nav').css('background', 'white').css('box-shadow', '0px 6px 10px rgba(0, 0, 0, 0.15)');
            
        }
    }
    
    /**runs on load */
    determineNavBarBackground();

    $('.navbar-toggle').click(function() {
        $('nav .navbar-collapse').toggleClass('nav-dropdown-background');
        $('nav .navbar-collapse ul li a').toggleClass('nav-link-dropdown-color');
    });

    
    $(window).scroll( function () {
        determineNavBarBackground();
    });
})
