<?php

  function era_cape_town_styles() {
    /* Render all elements more consistently and in line with modern standards - https://necolas.github.io/normalize.css/ */
    wp_enqueue_style(
      'normalize_css',
      get_template_directory_uri() . '/css/normalize.css'
    );
    /* A set of small, responsive CSS modules - http://purecss.io/ */
    wp_enqueue_style(
      'pure_css',
      get_template_directory_uri() . '/css/pure.css'
    );
    wp_enqueue_style(
      'pure_responsive_css',
      get_template_directory_uri() . '/css/pure-responsive.min.css'
    );
    /* Custom Page Styles File */
    wp_enqueue_style(
      'main_css',
      get_template_directory_uri() . '/css/main.css'
    );
    /* Template Style Calls */
    wp_enqueue_style(
      'style_css',
      get_template_directory_uri() . '/style.css'
    );
  }

  add_action('wp_enqueue_scripts', 'era_cape_town_styles');

  function era_cape_town_scripts() {
    /* Allows animation of colors - https://github.com/jquery/jquery-color/ */
    wp_enqueue_script(
      'jQuery_color_js',
      get_template_directory_uri() . '/js/jquery-color.min.js',
      array(
        'jquery'
      ),
      '',
      true
    );
    /* Custom JavaScript Functionality (jQuery included with Wordpress by default) */
    wp_enqueue_script(
      'scripts_js',
      get_template_directory_uri() . '/js/scripts.js',
      array(
        'jQuery_color_js'
      ),
      '',
      true
    );
  }

  add_action('wp_enqueue_scripts', 'era_cape_town_scripts');
?>
