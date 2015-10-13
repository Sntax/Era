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
      jQuery('p:empty').remove();
      eraCapeTown.smoothScroll();
      eraCapeTown.mobileNavigation();
      eraCapeTown.sticky();
      eraCapeTown.accordion();
    },

    // Scrolls to a section on click
    smoothScroll: function() {
      var root = $('html, body');
      var stickyHeight = parseInt($('header.sticky-nav').css('height'), 10);
      $('.smooth-scroll').on('click', function(e) {
        e.preventDefault();
        root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top - stickyHeight + 22
        }, 1000);
      });
    },

    // Mobile navigation functionality
    mobileNavigation: function() {
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

    // Sticky navigation functionality
    sticky: function() {
      $(window).on('scroll', function() {
        if ($(document).scrollTop() > 0) {
          $('section#sticky-nav').addClass('active');
        } else if ($(document).scrollTop() === 0 && $('nav.mobile ul').is(':hidden')) {
          $('section#sticky-nav').removeClass('active');
        }
      });
    },

    // Accordion functionality
    accordion: function(){
      var trigger = $('.accordion .part h2');
      var disclosure = $('p');
      var part = $('.part');
      var activeElement = $('.part.active p');

      trigger.on('click', function(){
        if (!$(this).parent(part).hasClass('active')) {
          if (activeElement !== null) {
            activeElement.slideUp(600, function(){
              $(this).parent(part).removeClass('active');
            });
          }
          activeElement = $(this).siblings(disclosure);
          activeElement.slideDown(600, function(){
            $(this).parent(part).addClass('active');
          });
        } else if ($(this).parent(part).hasClass('active')) {
          activeElement = $(this).siblings(disclosure);
          activeElement.slideUp(600, function() {
            $(this).parent(part).removeClass('active');
            activeElement = null;
          });
        }
      });
    }
  };
  eraCapeTown.init();
});
