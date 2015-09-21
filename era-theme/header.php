<?php /* Custom Theme Header to contain all code from DocType to <div id="content"> */ ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <!-- Head -->
  <head>
    <!-- Meta Tags -->
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <!-- SEO -->
    <meta name="description" content="Era | Cape Towns most exclusive electronic night club." >
    <meta name="copyright" content="© Copyright <?php echo date('Y'); ?> Era Cape Town. All Rights Reserved.">
    <meta name="author" content="dev@bakerhilldigital.com">
    <meta name="robots" content="index, follow">
    <!-- Mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Title -->
    <title>Era | Cape Town Electronic Night Club</title>
    <!-- Scripts -->
    <?php wp_head(); ?>
  </head>
  <!-- Body -->
  <body <?php body_class(); ?>>
    <!-- Page Class -->
    <div id="page" class="era-cape-town">
      <!-- Header -->
      <header class="masthead">
        <div class="logo">Era<span>.</span></div>
        <!-- Navigation -->
        <nav class="global" role="navigation">NAVIGATION</nav>
      </header>
      <!-- Content -->
      <div id="content">
