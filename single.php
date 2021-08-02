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

			// the_post_navigation(
			// 	array(
			// 		'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'artemis2021' ) . '</span> <span class="nav-title">%title</span>',
			// 		'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'artemis2021' ) . '</span> <span class="nav-title">%title</span>',
			// 	)
			// );

			// If comments are open or we have at least one comment, load up the comment template.
			// if ( comments_open() || get_comments_number() ) :
			// 	comments_template();
			// endif;

		endwhile; // End of the loop.
    echo '<h2 class="triple-headline">More news</h2>';
    display_latest_news();
		?>
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
// get_sidebar();
get_footer();
