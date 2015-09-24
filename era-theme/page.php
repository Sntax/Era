<?php /* Template Name: Era Longpage */ ?>

<?php get_header(); ?>
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">
            <?php 
              $args = array(
                'post_type' => 'page',
                'orderby' => 'ID',
                'order' => 'ASC'
              );
              $the_query = new WP_Query( $args );       
            ?>
            <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?> 
            <?php get_template_part( 'content', 'page' ); ?>
            <?php endwhile; endif; ?>
          </main>
        </div>
<?php get_footer(); ?>
