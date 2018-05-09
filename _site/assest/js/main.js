$(document).ready(function() {

    $('.creative.art h2').hover(function() {
        $('.creative.art .cp-child').css('transform', 'scale(1.03)');
        $('.creative.art .cp-child').css('box-shadow', 'inset 0 0 0 20px #fff');
    }, function() {
        $('.creative.art .cp-child').css('transform', 'scale(1)');
        $('.creative.art .cp-child').css('box-shadow', 'inset 0 0 0 0 #fff');
    });
    $('.creative.photo h2').hover(function() {
        $('.creative.photo .cp-child').css('transform', 'scale(1.03)');
        $('.creative.photo .cp-child').css('box-shadow', 'inset 0 0 0 20px #fff');
    }, function() {
        $('.creative.photo .cp-child').css('transform', 'scale(1)');
        $('.creative.photo .cp-child').css('box-shadow', 'inset 0 0 0 0 #fff');
    });

    $(".more-creatives").click(function() {
        $("#creative-menu").addClass('menu-in-view');
        $("#creative-menu").css('pointer-events', 'auto');
        $("html").css('overflow-y', 'hidden');
        $("body").bind("touchmove", function(e) {
            e.preventDefault();
        });
    });
    $(".menu-close").click(function() {
        $("#creative-menu").removeClass('menu-in-view');
        $("#creative-menu").css('pointer-events', 'none');
        $("html").css('overflow-y', 'auto');
        $('body').unbind('touchmove');
    });

});



$(window).load(function() {
    $("body").removeClass("preload");
    var $animation_elements = $('section, footer, .bg-home, .bg-alt, .creative-portfolio, .more a');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});

