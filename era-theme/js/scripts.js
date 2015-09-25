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
      eraCapeTown.svgToXmlns();
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

    // Converts SVG Imports to base XMLNS to allow for direct path styling
    svgToXmlns: function(){
      $('img.svg').each(function(){
        var img = $(this);
        var imgID = img.attr('id');
        var imgClass = img.attr('class');
        var imgURL = img.attr('src');

        $.get(imgURL, function(data){
          var svg = $(data).find('svg');
          if (typeof imgID !== 'undefined'){
            svg = svg.attr('id', imgID);
          }
          if (typeof imgClass !== 'undefined'){
            svg = svg.attr('class', imgClass+' replaced-svg');
          }
          svg = svg.removeAttr('xmlns:a');
          img.replaceWith(svg);
        }, 'xml');
      });
    },

    hamburgerMenu: function(element, oldColour, newColour){
      element.on('mouseover', function(e){
        element.find('path').css({fill: newColour, transition: '0.6s'});
      });
      element.on('mouseout', function(e){
        element.find('path').css({fill: oldColour, transition: '0.6s'});
      });
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
