(function($) {
	"use strict";
	$(document).ready(function() {
		 $('.main-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1,
        dots:false,
        autoplay:true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:9000,
        slideSpeed: 3000,
        paginationSpeed: 3000,
        autoplaySpeed: 3000,

    });
     $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    });
     $('.slider-feature').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
             autoplay:true,
             dots:true,
            autoplayTimeout:3000,
            slideSpeed: 1000,
            paginationSpeed: 1000,
            autoplaySpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
     $('.slider-team ').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
             $('.slider-customer').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            items:1,
            dots:true,

        });
             $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
              $(".header-mobile").sticky({topSpacing:0});

             $(window).load(function(){
                var $container = $('.portfolioContainer');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                $('.portfolioFilter a').click(function(){
                    $('.portfolioFilter .current').removeClass('current');
                    $(this).addClass('current');

                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                     });
                     return false;
                });
            });



	});
})(jQuery);
