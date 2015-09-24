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
    },

    // Scrolls to a section on click
    smoothScroll: function(){
      var $root = $('html, body');
      $('.sticky-nav a').on('click', function(e){
        e.preventDefault();
        $root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 850);
      });
    }
  };
  eraCapeTown.init();
});
