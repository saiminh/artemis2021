<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package artemis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<?php
      echo '<div class="latest-news">
      <div class="latest-news-scroller">';
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				//get_template_part( 'template-parts/content', get_post_type() );

        echo '<div class="latest-news-item">
        <div class="latest-news-item-image">';
          the_post_thumbnail();
  echo '</div>
        <div class="latest-news-item-text">
          <h3 class="latest-news-item-title">';
            print the_title(); 
    echo '</h3>
          <div class="latest-news-item-subtitle">';
            the_excerpt(); 
    echo '</div> 
          <div class="latest-news-item-taglist">';
            the_tags('', ' | ', '');
    echo '</div>
        </div>
      </div>';
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
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
