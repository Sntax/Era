/* ===================================================== */
/* Component:            Custom JavaScript Functionality */
/* Project Name:                           Era Cape Town */
/* Project URL:                      www.eracapetown.com */
/* Author(s):                andrew@bakerhilldigital.com */
/* ===================================================== */

// Utilize 'no-conflict jQuery' to prevent conflicts within Wordpress
jQuery(document).ready(function($){

  // Maintain scope
  var eraCapeTown = {

    // Initialize all functions
    init: function(){
      eraCapeTown.smoothScroll();
      eraCapeTown.hamburgerMenu(
        $('.mobile-button, nav.mobile ul li a'),
        'rgba(255, 255, 255, 1)',
        'rgba(0, 168, 255, 1)'
      );
    },

    // Scrolls to a section on click
    smoothScroll: function(){
      var root = $('html, body');
      $('.sticky-nav a').on('click', function(e){
        e.preventDefault();
        root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 850);
      });
    },

    hamburgerMenu: function(element, oldColour, newColour){
      element.hover(
        function() {
          element.find('path').css({
            fill: newColour,
            transition: '0.6s'
          });
        },
        function() {
          element.find('path').css({
            fill: oldColour,
            transition: '0.6s'
          });
        }
      );
      element.on('click', function(e){
        if ($('nav.mobile ul').is(':visible')) {
          $('nav.mobile ul').slideUp();
        } else {
          $('nav.mobile ul').slideDown();
        }
      });
    }
  };
  eraCapeTown.init();
});
