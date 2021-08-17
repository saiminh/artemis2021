<?php
/**
 * artemis2021 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package artemis2021
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'artemis2021_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function artemis2021_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on artemis2021, use a find and replace
		 * to change 'artemis2021' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'artemis2021', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'artemis2021' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// // Set up the WordPress core custom background feature.
		// add_theme_support(
		// 	'custom-background',
		// 	apply_filters(
		// 		'artemis2021_custom_background_args',
		// 		array(
		// 			'default-color' => 'ffffff',
		// 			'default-image' => '',
		// 		)
		// 	)
		// );

		// Add theme support for selective refresh for widgets.
		// add_theme_support( 'customize-selective-refresh-widgets' );
		
	}
endif;
add_action( 'after_setup_theme', 'artemis2021_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function artemis2021_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'artemis2021_content_width', 640 );
}
add_action( 'after_setup_theme', 'artemis2021_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
// function artemis2021_widgets_init() {
// 	register_sidebar(
// 		array(
// 			'name'          => esc_html__( 'Sidebar', 'artemis2021' ),
// 			'id'            => 'sidebar-1',
// 			'description'   => esc_html__( 'Add widgets here.', 'artemis2021' ),
// 			'before_widget' => '<section id="%1$s" class="widget %2$s">',
// 			'after_widget'  => '</section>',
// 			'before_title'  => '<h2 class="widget-title">',
// 			'after_title'   => '</h2>',
// 		)
// 	);
// }
// add_action( 'widgets_init', 'artemis2021_widgets_init' );

/**
 * Clean up some WP defaults
 */

// Backwcomp for emojis
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
// This is required to publish with 3rd party tool:
remove_action ('wp_head', 'rsd_link');
// Manifest link for Window
remove_action( 'wp_head', 'wlwmanifest_link');
// Disable REST API link tag
remove_action('wp_head', 'rest_output_link_wp_head', 10);
// Disable REST API link in HTTP headers
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
remove_action('template_redirect', 'rest_output_link_header', 11, 0);
// Generator version
function remove_generator_version() { return ''; }
add_filter('the_generator', 'remove_generator_version');

/**
 * Enqueue scripts and styles.
 */

function artemis2021_scripts() {
	wp_enqueue_style( 'artemis2021-style', get_stylesheet_uri(), array(), _S_VERSION );
	// wp_style_add_data( 'artemis2021-style', 'rtl', 'replace' );
	// wp_enqueue_script( 'artemis2021-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'artemis2021-main', get_template_directory_uri() . '/js/main.js', array(), _S_VERSION, true );
	// if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	// 	wp_enqueue_script( 'comment-reply' );
	// }
  // Maybe for the future dequeue the default styles?
  //wp_dequeue_style( 'wp-block-library' );

}
add_action( 'wp_enqueue_scripts', 'artemis2021_scripts' );

// Styles for the editor
function add_gutenberg_css(){
  add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
  add_editor_style( 'style-editor.min.css' ); // tries to include style-editor.css directly from your theme folder
}
add_action( 'after_setup_theme', 'add_gutenberg_css' );

// Block Patterns.
require get_template_directory() . '/inc/block-patterns.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * latest news shortcode
 */
//Shortcode for displaying Team members
function display_latest_news() {
  $thisone = get_the_ID();
  echo '<div class="latest-news">
          <div class="latest-news-scroller">';
  $args = array(  
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => -1, 
    'orderby' => 'date',
    'offset' => 1,
    'exclude' => $thisone,
  );
  $loop = new WP_Query( $args ); 
        
  while ( $loop->have_posts() ) { 
    $loop->the_post();
      if ( $thisone !== get_the_ID() ):
            echo '<div class="latest-news-item">
              <div class="latest-news-item-image">
                <a href="'.get_the_permalink().'">'.get_the_post_thumbnail().'</a>';
        echo '</div>
              <div class="latest-news-item-text">
                <h3 class="latest-news-item-title"><a href="'.get_the_permalink().'">'.get_the_title().'</a></h3>
                <div class="latest-news-item-subtitle"><a href="'.get_the_permalink().'">'.get_the_excerpt().'</a></div> 
                <div class="latest-news-item-taglist">';
                  the_tags('', ' | ', '');
          echo '</div>
              </div>
            </div>';
      endif;
  }
  wp_reset_postdata(); 
  echo '</div>';
  echo '<div class="latest-news-scroller-nav">
          <button aria-label="back" class="latest-news-scroller-nav-scrollPrev">
            Back
          </button>
          <button aria-label="next" class="latest-news-scroller-nav-scrollNext">
            Next
          </button>
        </div>';
}
function outputbuffer_latest_news(){
    ob_start();             // turn on output buffering
    display_latest_news(); // put the output to the buffer
    return ob_get_clean();  // capture and return the buffer
}
add_shortcode( 'latestNews', 'outputbuffer_latest_news' ); 

function custom_search_form( $form, $value = "Search", $post_type = 'post' ) {
    $form_value = (isset($value)) ? $value : attribute_escape(apply_filters('the_search_query', get_search_query()));
    $form = '<form method="get" class="search-form" id="searchform" action="' . get_option('home') . '/" >
      <input type="hidden" name="post_type" value="'.$post_type.'" />
      <input type="search" placeholder="' . $form_value . '" name="s" id="s" />
      <input type="submit" id="searchsubmit" value="'.attribute_escape(__('Search')).'" />
    </form>';
    return $form;
}
function latest_sticky_post() { 
  /* Get all sticky posts */
  $sticky = get_option( 'sticky_posts' );
  /* Sort the stickies with the newest ones at the top */
  rsort( $sticky );
  /* Get the 5 newest stickies (change 5 for a different number) */
  $sticky = array_slice( $sticky, 0, 1 );
  /* Query sticky posts */
  $the_query = new WP_Query( array( 'post__in' => $sticky, 'ignore_sticky_posts' => 1 ) );
  // The Loop
  if ( $the_query->have_posts() ) {
      $return .= '<div class="latest-sticky-post">';
      while ( $the_query->have_posts() ) {
          $the_query->the_post();
          $return .= '<figure class="latest-sticky-post-image"><a href="' .get_permalink(). '" title="'  . get_the_title() . '">'.get_the_post_thumbnail().'</a><div class="latest-sticky-post-tags">'.get_the_tag_list().'</div></figure><h2 class="latest-sticky-post-title"><a href="' .get_permalink(). '" title="'  . get_the_title() . '">' . get_the_title() . '</a></h2><div class="latest-sticky-post-excerpt"><a href="' .get_permalink(). '" title="'  . get_the_title() . '">' . get_the_excerpt(). '</a></div>';
      }
      $return .= '</div>';
  } else {
      // no posts found
  }
  /* Restore original Post Data */
  wp_reset_postdata();
  return $return; 
  } 
  add_shortcode('latest_stickies', 'latest_sticky_post');

  function the_social_links() {
    echo '
      <a href="">Facebook</a> 
      <a href="">Twitter</a> 
      <a href="https://www.linkedin.com/company/artemis-auto/">LinkedIn</a> 
      <a href="">Xing</a>
    ';
  }
  
  add_filter( 'upload_mimes', 'my_myme_types', 1, 1 );
  function my_myme_types( $mime_types ) {
    $mime_types['json'] = 'application/json'; // Adding .json extension
    $mime_types['gltf'] = 'model/gltf+json';     // Adding .svg extension
    $mime_types['glb'] = 'model/gltf+json';     // Adding .svg extension
    
    unset( $mime_types['xls'] );  // Remove .xls extension
    unset( $mime_types['xlsx'] ); // Remove .xlsx extension
    
    return $mime_types;
  }

  function wp_maintenance_mode() {
    if ( !is_user_logged_in() ) {
    wp_die('<h1>Under Maintenance</h1><br />Website under planned maintenance. Please check back later.');
    }
  }
  add_action('get_header', 'wp_maintenance_mode');