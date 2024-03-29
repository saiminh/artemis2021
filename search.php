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
    echo '<div class="test-news latest-news">
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
        <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
      </button>
      <button aria-label="next" class="latest-news-scroller-nav-scrollNext">
        <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
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
