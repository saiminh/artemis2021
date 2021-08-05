<?php
/**
 * Block Patterns
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern/
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern_category/
 *
 * @package artemis2021
 * 
 */

/**
 * Register Block Pattern Category.
 */
if ( function_exists( 'register_block_pattern_category' ) ) {

  register_block_pattern_category(
    'peak2021',
    array( 'label' => esc_html__( 'Peak Capital', 'peak2021' ) )
  );
}

/**
 * Register Block Patterns.
 */
if ( function_exists( 'register_block_pattern' ) ) {

  //Home Hero Headline block
  register_block_pattern(
    'artemis2021/home-hero-headline-block',
    array(
      'title'         => esc_html__( 'Artemis Home Hero Headline', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:heading {"level":1,"className":"home-hero-headline"} -->
        <h1 class="home-hero-headline">Virtual is our Reality.</h1>
        <!-- /wp:heading -->'
    )
  );
  //Home content block
  register_block_pattern(
    'artemis2021/home-content-block',
    array(
      'title'         => esc_html__( 'Artemis Home Content', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"home-content"} -->
        <div class="wp-block-group home-content"><!-- wp:paragraph -->
        <p>ARTEMIS is in demand wherever the future of mobility is being decided.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>as a rapid force for sounding, exploration and occupation of new dedicated technology areas beyond existing boundaries.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->'
    )
  );
  //Home Nav Buttons block
  register_block_pattern(
    'artemis2021/home-nav-block',
    array(
      'title'         => esc_html__( 'Artemis Home Navigation', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"home-navigation"} -->
        <div class="wp-block-group home-navigation"><!-- wp:buttons {"className":"home-nav-buttons"} -->
        <div class="wp-block-buttons home-nav-buttons"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/company/">Company</a></div>
        <!-- /wp:button -->

        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/team/">Team</a></div>
        <!-- /wp:button -->

        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/portfolio/">Portfolio</a></div>
        <!-- /wp:button -->

        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/jobs/">Jobs</a></div>
        <!-- /wp:button -->

        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/news/">News</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons --></div>
        <!-- /wp:group -->'
    )
  );
  //Company Hero block
  register_block_pattern(
    'artemis2021/company-hero-block',
    array(
      'title'         => esc_html__( 'Artemis Companypage Hero', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"company-hero"} -->
        <div class="wp-block-group company-hero"><!-- wp:heading {"level":1} -->
        <h1>Our time is marked by the greatest upheaval of mobility in HUMAN HISTORY—</h1>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>In view of the population explosion and the negative impact on the planet, people\'s basic need for individual mobility must be met with radically new and disruptive concepts. </p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->'
    )
  );
  //Company Manifesto block
  register_block_pattern(
    'artemis2021/company-manifesto-block',
    array(
      'title'         => esc_html__( 'Artemis Companypage Manifesto', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"company-manifesto"} -->
        <div class="wp-block-group company-manifesto"><!-- wp:heading -->
        <h2>MANIFESTO</h2>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>ARTEMIS <a href="/portfolio/" data-type="page" data-id="9">FOSTERS Systems Engineering</a> and provides data-driven PMT Solutions<br>for next generation vehicles<br>and accelerates Audi’s transformation process towards a Tech-Company.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>Artemis supports and contributes to the transformation of the<br>VW Group.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>It creates competitive advantage by Processes, Methods &amp; Tools embracing x-industry tech experts with profound know-how &amp; outstanding track records.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->'
    )
  );
  //Company Location block
  register_block_pattern(
    'artemis2021/company-location-block',
    array(
      'title'         => esc_html__( 'Artemis Companypage Locations', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"company-our-location"} -->
        <div class="wp-block-group company-our-location"><!-- wp:paragraph {"className":"company-our-location-intro"} -->
        <p class="company-our-location-intro">ARTEMIS is based in Munich and Ingolstadt and is closely co-operating with Audi development and international development teams within Volkswagen Group.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:columns -->
        <div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:image {"id":112,"sizeSlug":"full","linkDestination":"none"} -->
        <figure class="wp-block-image size-full"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-112"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
    
        <!-- wp:column {"width":"33.33%"} -->
        <div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:heading {"level":3} -->
        <h3>MUNICH</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p><strong>Opening Hours:</strong><br>Mon-Fri<br>07:30 – 19:00 (GMT +1)</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p><strong>Contact:</strong><br><strong>Ellen Petersonn Peterson</strong><br>Spokesper­son In­ter­na­tional Sites</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p><a href="mailto:ellen.peterson@artemis.auto">ellen.peterson@artemis.auto</a><br><a href="phone:+49 497 3974620" data-type="URL" data-id="phone:+49 497 3974620">+49 497 3974620</a></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
    
        <!-- wp:columns -->
        <div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:image {"id":112,"sizeSlug":"full","linkDestination":"none"} -->
        <figure class="wp-block-image size-full"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-112"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
    
        <!-- wp:column {"width":"33.33%"} -->
        <div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:heading {"level":3} -->
        <h3>Ingolstadt</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p><strong>Opening Hours:</strong><br>Mon-Fri<br>07:30 – 19:00 (GMT +1)</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p><strong>Contact:</strong><br><strong>Ellen Peterson</strong><br>Spokesper­son In­ter­na­tional Sites</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>ellen.peterson@artemis.auto<br><a href="phone:+49 497 3974620" data-type="URL" data-id="phone:+49 497 3974620">+49 497 3974620</a></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns --></div>
        <!-- /wp:group -->'
    )
  );
  //Company Location Intro block
  register_block_pattern(
    'artemis2021/company-location-intro-block',
    array(
      'title'         => esc_html__( 'Artemis Companypage Locations Intro', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:paragraph {"className":"company-our-location-intro"} -->
        <p class="company-our-location-intro">ARTEMIS is based in Munich and Ingolstadt and is closely co-operating with Audi development and international development teams within Volkswagen Group.</p>
        <!-- /wp:paragraph -->'
    )
  );
  //Portfolio Section Hero
  register_block_pattern(
    'artemis2021/portfolio-section-hero',
    array(
      'title'         => esc_html__( 'Artemis Portfolio Hero', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"portfolio-section-hero"} -->
        <div class="wp-block-group portfolio-section-hero"><!-- wp:html -->
        <model-viewer src="../wp-content/themes/artemis2021/assets/reflective-sphere.gltf" skybox-image="../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg" alt="A 3D model of a sphere" interaction-prompt="none"></model-viewer>
        <!-- /wp:html -->
    
        <!-- wp:heading -->
        <h2>Virtual Simulation</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->'
    )
  );
  //Portfolio Section
  register_block_pattern(
    'artemis2021/portfolio-section',
    array(
      'title'         => esc_html__( 'Artemis Portfolio Section', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"portfolio-section"} -->
        <div id="virtual-simulation" class="wp-block-group portfolio-section"><!-- wp:group {"className":"portfolio-section-hero"} -->
        <div class="wp-block-group portfolio-section-hero"><!-- wp:html -->
        <model-viewer src="../wp-content/themes/artemis2021/assets/reflective-sphere.gltf" skybox-image="../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg" alt="A 3D model of a sphere" interaction-prompt="none"></model-viewer>
        <!-- /wp:html -->
    
        <!-- wp:heading -->
        <h2>Virtual Simulation</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
    
        <!-- wp:heading {"level":3} -->
        <h3>Mission</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>Our mission is to build a modelling, simulation and optimisation framework that can answer the right questions on complex models, and to make it easily accessible to internal customers. We also support other simulation work such as SiL/HiL by providing high quality models.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>There are three pillars to our core competence:</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:columns -->
        <div class="wp-block-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:image {"id":74,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-74"/></figure>
        <!-- /wp:image -->
    
        <!-- wp:heading {"level":4} -->
        <h4>Maths and Physics</h4>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>Use the correct theoretical knowledge to build models and manipulate them to answer questions.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:image {"id":75,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-75"/></figure>
        <!-- /wp:image -->
    
        <!-- wp:heading {"level":4} -->
        <h4>Scientific Computing</h4>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>Turn the maths and physics into fast and future-proof code, scale it to answer complex questions on complex models.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:image {"id":77,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-77"/></figure>
        <!-- /wp:image -->
    
        <!-- wp:heading {"level":4} -->
        <h4>Software Engineering</h4>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>Make the technology we develop more accessible to the users and speed up our own development cycle.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
    
        <!-- wp:buttons -->
        <div class="wp-block-buttons"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="mailto:hello@artemis.auto?subject=Virtual%20Simulation&amp;body=Dear%20Artemis%20team%2C%0A%0AI\'m%20inquiring%20about">Get in touch</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons --></div>
        <!-- /wp:group -->'
    )
  );
  //Team Hero
  register_block_pattern(
    'artemis2021/team-hero',
    array(
      'title'         => esc_html__( 'Artemis Team Hero', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"team-hero"} -->
        <div class="wp-block-group team-hero"><!-- wp:columns {"className":"team-hero-img-columns"} -->
        <div class="wp-block-columns team-hero-img-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:image {"id":88,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-88"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:image {"id":89,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" class="wp-image-89"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
    
        <!-- wp:heading {"level":1,"className":"team-hero-title"} -->
        <h1 class="team-hero-title">WHAT DRIVES US</h1>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph {"className":"team-hero-intro"} -->
        <p class="team-hero-intro">ARTEMIS as a corporate startup is aspiring to build a distinctive culture that will be our key differentiator, our competitive advantage and a source of our success.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->'
    )
  );
  //Team How we work
  register_block_pattern(
    'artemis2021/team-howwework',
    array(
      'title'         => esc_html__( 'Artemis Team How We Work Section', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"team-howwework"} -->
        <div class="wp-block-group team-howwework"><!-- wp:heading {"className":"team-howwework-title"} -->
        <h2 class="team-howwework-title">HOW WE WORK</h2>
        <!-- /wp:heading -->
    
        <!-- wp:columns {"className":"team-howwework-columns"} -->
        <div class="wp-block-columns team-howwework-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>foster an empowering company culture</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>We truly believe that it is the responsibility of every employee to contribute to a positive work environment and foster an empowering company culture through their daily actions and interactions.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>contribute<br>to our<br>growth</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>Our employees have the unique opportunity to contribute to our growth and be fully committed to finding, developing and retaining the best and most diverse talents worldwide.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>perspectives from across industries</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>We value perspectives from across industries.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
    
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>question common<br>beliefs</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>We question common beliefs and drive innovation.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns --></div>
        <!-- /wp:group -->'
    )
  );
  //Team Our Team 
  register_block_pattern(
    'artemis2021/team-ourteam',
    array(
      'title'         => esc_html__( 'Artemis Team Teammember Gallery', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"team-ourteam"} -->
        <div class="wp-block-group team-ourteam"><!-- wp:heading {"className":"team-ourteam-title triple-headline"} -->
        <h2 class="team-ourteam-title triple-headline">Our Team</h2>
        <!-- /wp:heading -->
    
        <!-- wp:gallery {"ids":[92,93,94],"linkTo":"none"} -->
        <figure class="wp-block-gallery columns-3 is-cropped"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" data-id="92" data-full-url="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" data-link="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" class="wp-image-92"/><figcaption class="blocks-gallery-item__caption"><strong>Marten de Jongh</strong><br>Creative Director</figcaption></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" data-id="92" data-full-url="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" data-link="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" class="wp-image-92"/><figcaption class="blocks-gallery-item__caption"><strong>Marten de Jongh</strong><br>Creative Director</figcaption></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" alt="" data-id="92" data-full-url="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" data-link="' . esc_url( get_template_directory_uri() ) . '/img/600x400.png" class="wp-image-92"/><figcaption class="blocks-gallery-item__caption"><strong>Marten de Jongh</strong><br>Creative Director</figcaption></figure></li></ul></figure>
        <!-- /wp:gallery --></div>
        <!-- /wp:group -->'
    )
  );
  //Team What we look for 
  register_block_pattern(
    'artemis2021/team-whatwelookfor',
    array(
      'title'         => esc_html__( 'Artemis Team What We Look For', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"className":"team-what-we-look-for"} -->
        <div class="wp-block-group team-what-we-look-for"><!-- wp:heading {"className":"team-what-we-look-for-title"} -->
        <h2 class="team-what-we-look-for-title">What We Look For</h2>
        <!-- /wp:heading -->
    
        <!-- wp:group {"className":"team-what-we-look-for-content"} -->
        <div class="wp-block-group team-what-we-look-for-content"><!-- wp:heading {"level":3,"className":"team-what-we-look-for-subtitle"} -->
        <h3 class="team-what-we-look-for-subtitle">A strong bias for action fast and pragmatic solutions driving big challenges to completion ambiguity and flexibility</h3>
        <!-- /wp:heading -->
    
        <!-- wp:paragraph -->
        <p>You are hands-on and you have a strong bias for action, delivering fast and pragmatic solutions without compromising critical thinking.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>You work in flat hierarchies and are provided with many opportunities to take on responsibility and ownership quickly, partially even outside the actual assigned tasks.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>You leave your comfort zone, often by taking calculated risks to drive big challenges to completion.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>As we push into uncharted territory, a level of ambiguity and flexibility is part of every job<br>in ARTEMIS, and you can expect to grow both professionally and personally.</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:paragraph -->
        <p>We are always looking for talented people who is into our culture. So if you think you are a perfect match, send us an email. jobs@artemis.com</p>
        <!-- /wp:paragraph -->
    
        <!-- wp:buttons -->
        <div class="wp-block-buttons"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link">View openings</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->'
    )
  );

/**
 * General blocks
 */

  //Triple Headline
  register_block_pattern(
    'artemis2021/triple-headline',
    array(
      'title'         => esc_html__( 'Artemis triple headline', 'artemis2021' ),
      'categories'    => array( 'artemis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:heading {"className":"triple-headline"} -->
        <h2 class="triple-headline">Lates News</h2>
        <!-- /wp:heading -->'
    )
  );

}


