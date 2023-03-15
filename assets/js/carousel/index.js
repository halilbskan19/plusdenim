(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2500,
      responsive: {
        0: {
          items: 1,
        },
        680: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
