<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package artemis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

  <h1 class="news-headline"><?php echo wp_title( '', false ) ?></h1>
  <div class="news-search">
    <?php echo custom_search_form( null, 'Search posts', 'post'); ?>
  </div>
  <div class="news-tags">
    <?php 
      $tags = get_tags(); 
      if ( $tags ) :
        foreach ( $tags as $tag ) : ?>
            <a class="news-tags-tag" href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" title="<?php echo esc_attr( $tag->name ); ?>"><?php echo esc_html( $tag->name ); ?></a>
        <?php endforeach; ?>
    <?php endif; ?>
    
  </div>
		<?php
		if ( have_posts() ) :

echo '<div class="latest-news">
        <div class="latest-news-scroller">';
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
        if ( !is_sticky( )) :
				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				// get_template_part( 'template-parts/content', get_post_type() );
    echo '<div class="latest-news-item">
            <div class="latest-news-item-image"><a href="'.get_the_permalink().'">'.get_the_post_thumbnail().'</a></div>
            <div class="latest-news-item-text">
              <h3 class="latest-news-item-title"><a href="'.get_the_permalink().'">'.get_the_title().'</a></h3>
              <div class="latest-news-item-subtitle"><a href="'.get_the_permalink().'">'.get_the_excerpt().'</a></div> 
              <div class="latest-news-item-taglist">';
                the_tags('', ' | ', '');
        echo '</div>
            </div>
          </div>';
          endif;
        endwhile;
  echo '</div>';
  echo '<div class="latest-news-scroller-nav">
          <button aria-label="back" class="latest-news-scroller-nav-scrollPrev">
            Back
          </button>
          <button aria-label="next" class="latest-news-scroller-nav-scrollNext">
            Next
          </button>
        </div>';

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;

    echo latest_sticky_post();
    ?>

    <div class="news-stay-up-to-date">
      <h2 class="news-stay-up-to-date-title">Stay up to date</h2>
      <div class="news-stay-up-to-date-social">
        <?php the_social_links(); ?>
      </div>
    </div>

    <div class="page-nav">
      <a class="page-nav-prev" href="/team">
        <svg class="page-nav-btn page-nav-btn-prev" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
        Team
      </a>
      <a class="page-nav-next" href="/jobs">
        Jobs
        <svg class="page-nav-btn page-nav-btn-next" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
      </a>
    </div>
	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
