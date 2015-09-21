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
    /* Custom Page Styles File */
    wp_enqueue_style(
      'main_css',
      get_template_directory_uri() . '/main.css'
    );
  }

  add_action('wp_enqueue_scripts', 'era_cape_town_styles');

  function era_cape_town_scripts() {
    /* Custom JavaScript Functionality (jQuery included with Wordpress by default) */
    wp_enqueue_style('scripts_js', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '', true);
  }

  add_action('wp_enqueue_scripts', 'era_cape_town_scripts');
?>
