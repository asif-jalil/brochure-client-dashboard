(function ($) {

  "use strict";

  $("#company-logo-slider").owlCarousel({
    items: 1,
    margin: 15,
    dots: false,
    nav: false,
    loop: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  $("#pro-pic-slider").owlCarousel({
    items: 1,
    margin: 15,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  $(".pro-pic-select").click(function () {
    $(".pro-pic-select").removeClass("active");
    $(".pro-pic-select").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
  });

  $(".c-logo-select").click(function () {
    $(".c-logo-select").removeClass("active");
    $(this).addClass("active");
  });

})(jQuery);