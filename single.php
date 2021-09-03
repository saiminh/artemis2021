<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package artemis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

		endwhile; // End of the loop.
    echo '<h2 class="triple-headline">More news</h2>';
    display_latest_news();
		?>
	</main><!-- #main -->

<?php
// get_sidebar();
get_footer();
