$(document).ready(function() {
    //products hover and over-lay property
    $('#products .jumbotron .product-overlay').hide();
    $('#products .jumbotron').on({
        'mouseenter': function() {
            var color = $(this).find('i').css('color');
            $(this).find('div.product-info').addClass('product-info-moveup');
            $(this).find('div.product-overlay').css('background', color).addClass('animated fadeInLeft').show();
        },
        'mouseleave': function() {
            $(this).find('div.product-overlay').hide();
            $(this).find('div.product-info').removeClass('product-info-moveup');
        }
    });
});