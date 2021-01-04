(function ($) {

  "use strict";




  var macy = Macy({
    container: '.brochure-case',
    trueOrder: false,
    waitForImages: false,
    margin: {
      x: 30,
      y: 30
    },
    columns: 5,
    breakAt: {
      1800: {
        columns: 4
      },
      1500: {
        columns: 3
      },
      992: {
        columns: 2
      },
      500: {
        columns: 1
      }
    }
  });












})(jQuery);