<?php global $post; ?>
<section id="<?php echo $post->post_name; ?>" <?php post_class(); ?>>
  <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
  <?php the_content(); ?>
  <?php
    wp_link_pages( array(
      'before' => '<div class="page-links">' . __( 'Pages:', 'era-longpage' ),
      'after'  => '</div>',
    ) );
  ?>
</section>
