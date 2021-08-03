<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package artemis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search: "%s"', 'artemis2021' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header><!-- .page-header -->

      <?php
    echo '<div class="latest-news">
    <div class="latest-news-scroller">';
  /* Start the Loop */
  while ( have_posts() ) :
    the_post();
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
