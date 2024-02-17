(function ($) {
"use strict";


function mainSlider() {
    var BasicSlider = $('.slider-area');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
		arrows: false,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();



// Service slick slider //
$('.blog-active').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
    autoplay:true,
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
	nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
	arrows:false,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
	});


})(jQuery);