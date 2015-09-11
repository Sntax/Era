/* ===================================================== */
/* Component:                  Custom page functionality */
/* ===================================================== */

var era = {
  init: function() {
    era.centerMastFeature();
  },

  centerMastFeature: function() {
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var offsetTop = $('.mast .feature').offset().top;
    var totalHeight = $('.mast .feature').height();

    $('.mast .feature').css({
      'margin-top': -(totalHeight/2)
    });
  }
};

era.init();
