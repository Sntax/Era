<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package era_cape_town
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		  <div class="limiter">
				<section class="error-404 not-found pure-u-24-24">
					<img src="http://bakerhilldigital.com/dev/era/wp-content/uploads/2015/10/era-logo-dark-small.png" alt="Era Logo">
					<p class="number">404</p>
					<p class="message">Zing! This page doesn't exist!</p>
					<p class="link"><a href="/">Return to Era Cape Town</a></p>
				</section><!-- .error-404 -->
		  </div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
