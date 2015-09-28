/* ===================================================== */
/* Component:            Custom JavaScript Functionality */
/* Project Name:                           Era Cape Town */
/* Project URL:                      www.eracapetown.com */
/* Author(s):                andrew@bakerhilldigital.com */
/* ===================================================== */

// Utilize 'no-conflict jQuery' to prevent conflicts within Wordpress
jQuery(document).ready(function($) {

  // Maintain scope
  var eraCapeTown = {

    // Initialize all functions
    init: function() {
      eraCapeTown.smoothScroll();
      eraCapeTown.hamburgerMenu();
      eraCapeTown.navigation();
    },

    // Scrolls to a section on click
    smoothScroll: function() {
      var root = $('html, body');
      $('.smooth-scroll').on('click', function(e) {
        e.preventDefault();
        root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
      });
    },

    hamburgerMenu: function() {
      var mobileButton = $('.mobile-button');
      mobileButton.on('click', function(e) {
        if ($('nav.mobile ul').is(':visible')) {
          $('nav.mobile ul').slideUp();
          if ($(document).scrollTop() === 0) {
            $('section#sticky-nav').removeClass('active');
          }
        } else {
          $('nav.mobile ul').slideDown();
          if (!$('section#sticky-nav').hasClass('active')) {
            $('section#sticky-nav').addClass('active');
          }
        }
      });
      mobileButton.hover(
        function() {
          mobileButton.addClass('hover');
        },
        function() {
          mobileButton.removeClass('hover');
        }
      );
    },

    navigation: function() {
      $(window).on('scroll', function() {
        if ($(document).scrollTop() > 0) {
          $('section#sticky-nav').addClass('active');
        } else if ($(document).scrollTop() === 0 && $('nav.mobile ul').is(':hidden')) {
          $('section#sticky-nav').removeClass('active');
        }
      });
    }
  };
  eraCapeTown.init();
});
