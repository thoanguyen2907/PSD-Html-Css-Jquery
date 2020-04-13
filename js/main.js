jQuery(function($) {
    "use strict";

    var inoxanhtrang = window.inoxanhtrang || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    inoxanhtrang.mainCarousel = function() {
        $('.main-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true
        });

        if( $("order").length ) {
            $("#order").selectbox();
        }
    }
    inoxanhtrang.backToTop = function() { 
        // console.log( $(window).scrollTop() );
        $(window).scroll(function() {
            var scrollVal = $(window).scrollTop();
            if( scrollVal == 0 ) {
                $("#back_to_top").addClass("hidden");
            } else if ( scrollVal > $(window).height() ) {
                $("#back_to_top").removeClass("hidden");
            }
        });
        $("#back_to_top").click(function(){
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }

    inoxanhtrang.menuMobile = function() {
        $(".hamburger-icon").click(function(){
            $("body").toggleClass("open-menu");

            // if( $("body").hasClass("open-menu") ) {
            //     $("body").removeClass("open-menu");
            // } else {
            //     $("body").addClass("open-menu");
            // }
        });
    }

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        inoxanhtrang.mainCarousel();
        inoxanhtrang.backToTop();
        inoxanhtrang.menuMobile();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
