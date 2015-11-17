/* ========================================================================= */
/* Component:                                Custom JavaScript Functionality */
/* Project Name:                                               Era Cape Town */
/* Project URL:                                          www.eracapetown.com */
/* Author(s):                                    andrew@bakerhilldigital.com */
/* ========================================================================= */

// Utilize 'no-conflict jQuery' to prevent conflicts within Wordpress
jQuery(document).ready(function($){

  // Scope all functions to an "eraCapeTown" object to maintain context
  var eraCapeTown = {

    // Initialize all functions
    init: function(){
      // Wordpress has a tendency to throw random empty paragraph
      // tags all over the place.  This seeks to remove those 
      // random empty p tags on the document
      jQuery('p:empty').remove();
      // Executes smooth scroll functionality
      eraCapeTown.smoothScroll();
      // Executes mobile navigation functionality
      eraCapeTown.mobileNavigation();
      // Executes sticky navigation functionality
      eraCapeTown.sticky();
      // Executes accordion functionality
      eraCapeTown.accordion();
      // Executes booking form validation
      eraCapeTown.bookingFormValidation();
      // Executes a "slide-down" on the feedback form link
      eraCapeTown.feedbackFormToggle();
    },

    // Scrolls to a section on click
    smoothScroll: function(){
      var eraBody = $('html, body');
      var stickyHeight = parseInt($('header.sticky-nav').css('height'), 10);
      var scrollElement = $('.smooth-scroll');
      // When clicking on an element with a "smooth-scroll" class
      scrollElement.on('click', function(e){
        // If this element is an <a> tag
        if ($(this).is('a')){
          // Prevent it from directing the user anywhere
          e.preventDefault();
        }
        // Then animate the <body> and <html>
        eraBody.animate({
          // to scroll to the links associated anchor (href="#").
          scrollTop: $($.attr(this, 'href')).offset().top - stickyHeight + 22
        }, 1000);
      });
    },

    // Mobile navigation functionality
    mobileNavigation: function(){
      var mobileNav = $('nav.mobile ul');
      var mobileButton = $('.mobile-button');
      var mobileListItems = $('nav.mobile ul li');
      var stickyNav = $('section#sticky-nav');
      // When clicking/tapping the mobile navigation button
      mobileButton.on('click', function(e){
        // If the navigation is already visible
        if (mobileNav.is(':visible')){
          // Slide it up
          mobileNav.slideUp();
          if ($(document).scrollTop() === 0){
            stickyNav.removeClass('active');
          }
        // If the navigation is not visible
        } else {
          // Slide it open
          mobileNav.slideDown();
          if (!stickyNav.hasClass('active')){
            stickyNav.addClass('active');
          }
        }
      });
      // When clicking/tapping any items in the mobile navigation
      mobileListItems.on('click', function(){
        // and the mobile navigation is open
        if (mobileNav.is(':visible')){
          // close the navigation (smoothScroll will fire at the same time)
          mobileNav.slideUp();
        }
      });
      // Custom classes for styling on hover
      mobileButton.hover(
        function(){
          mobileButton.addClass('hover');
        },
        function(){
          mobileButton.removeClass('hover');
        }
      );
    },

    // Sticky navigation functionality
    sticky: function(){
      // When the user scrolls
      $(window).on('scroll', function(){
        styleSticky();
      });
      function styleSticky(){
        // If the document is no longer at the top
        if ($(document).scrollTop() > 0){
          // Apply an active class to the sticky to adjust styles
          $('section#sticky-nav').addClass('active');
        // If the document is at the top and the mobile nav is hidden
        } else if ($(document).scrollTop() === 0 && $('nav.mobile ul').is(':hidden')){
          // Remove the active class from the sticky to adjust styles
          $('section#sticky-nav').removeClass('active');
        }
      }
      styleSticky();
    },

    // Accordion functionality
    accordion: function(){
      $('.accordion .part:first-child').addClass('active');
      var trigger = $('.accordion .part h2');
      var disclosure = $('.disclosure');
      var part = $('.part');
      var activeElement;
      // When clicking on an accordion heading
      trigger.on('click', function(){
        // Save a reference to the current active element on this accordion
        activeElement = $(this).parent().parent().find('.active');
        // If its parent does not have an active class
        if (!$(this).parent(part).hasClass('active')){
          // But there are other active elements on the accordion
          if (activeElement !== null){
            // Slide the other active elements up
            activeElement.find(disclosure).slideUp(600, function(){
              // and remove the parts active class after the slide completes
              $(this).parent(part).removeClass('active');
            });
          }
          // Then save a reference to the clicked headings sibling content as active
          activeElement = $(this).siblings(disclosure);
          // Slide this new "Active Content" down
          activeElement.slideDown(600, function(){
            // and give the part an active class after the slideDown is complete
            $(this).parent(part).addClass('active');
            // In the event of the slideDown occuring on the table booking accordion
            if ($(this).parent().parent().hasClass('booking-accordion')){
              // Save a reference to its innerHTML text 
              var currentPackage = $(this).siblings('h2').text();
              // Then set the option element with the same text on the associated form as selected
              $('form#ss-form option:contains("' + currentPackage + '")').prop('selected', true);
            }
          });
        // Finally, if its parent already has an active class
        } else if ($(this).parent(part).hasClass('active')){
          // Save a reference to the clicked headings sibling content as active
          activeElement = $(this).siblings(disclosure);
          // Slide that active element up
          activeElement.slideUp(600, function(){
            // and remove the parts active class after the slide completes
            $(this).parent(part).removeClass('active');
            // and clear the reference to any activeElements
            activeElement = null;
          });
        }
      });
    },

    // Booking form validation
    bookingFormValidation: function(){
      var bookingForm = $('.booking-form');
      var bookingSubmit = $('.table-bookings-submit');
      var bookingSuccess = $('.booking-form .success-message');
      var bookingError = $('.booking-form .error-message');
      var requiredFields = [
        // Name
        $('input#entry_1565452159'),
        // Email Address
        $('input#entry_1296499974'),
        // Phone Number
        $('input#entry_726044959'),
        // Booking Date
        $('input#entry_2021801101')
      ];

      bookingSubmit.on('click', function(e){
        $(requiredFields).each(
          function(){
            // If any required field is blank
            if ($(this).val() === ''){
              // Prevent submission
              e.preventDefault();
              // Highlight the required field as invalid
              $(this).addClass('validation-error');
              // and display an error message element on the screen
              bookingError.slideDown();
            // If there are any elements that have values but previously failed validation
            } else if (($(this).hasClass('validation-error')) && ($(this).val !== '')){
              // remove their error state
              $(this).removeClass('validation-error');
            }
          }
        );
        // If all input fields have data
        if (!$('.validation-error')[0]) {
          bookingForm.fadeOut(500);
          bookingError.fadeOut(500, function(){
            bookingSuccess.fadeIn(500);
          });
        }
      });
    },

    feedbackFormToggle: function(){
      var feedbackShow = $('.copyright span');
      var feedbackFormContainer = $('.feedback-form-container');
      var feedbackSubmit = $('.send-feedback-submit');
      var feedbackTextArea = $('#entry_1391242348');
      var feedbackSuccess = $('.feedback-form-container .success-message');
      var ssQuestionList = $('.feedback-form-container .ss-question-list');

      feedbackShow.on('click', function(){
        feedbackFormContainer.slideDown(1000);
        $('html, body').animate({ scrollTop: $(document).height() }, 1000);
      });

      feedbackSubmit.on('click', function(){
        if (feedbackTextArea !== ''){
          ssQuestionList.slideUp(1000, function(){
            feedbackSuccess.fadeIn(1000);
            feedbackShow.fadeOut(1000);
            $('html, body').animate({ scrollTop: $(document).height() }, 1000);
          });
        }
      });
    }
  };

  // Initialize all functions
  eraCapeTown.init();
});
