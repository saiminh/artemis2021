import {gsap} from 'gsap';
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
function navigation() {
	const siteNavigation = document.getElementById( 'site-navigation' );
  let page = document.getElementById('page');

	// Return early if the navigation don't exist.
	if ( ! siteNavigation ) {
		return;
	}

	const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];

	// Return early if the button don't exist.
	if ( 'undefined' === typeof button ) {
		return;
	}

	const menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( ! menu.classList.contains( 'nav-menu' ) ) {
		menu.classList.add( 'nav-menu' );
	}
  
  let hamburgerButtonAnimation = gsap.timeline({ paused: true, defaults: { duration: .3} })
  .set('.menu-hamburger-icon line', {
    transformOrigin: "50% 50%",
  })
  .to('.menu-hamburger-icon line:first-child', {
    attr: { x1: 16, y1: 0, x2:33, y2: 15 }
  }, 0)
  .to('.menu-hamburger-icon line:last-child', {
    attr: { x1: 16, y1: 15, x2: 33, y2: 0 }
  }, 0)
  .from('.site-header-main-navigation li', {
    autoAlpha: 0,
    xPercent: 100,
    stagger: .025
  }, 0)
  // .fromTo('.site-header-current-page-title', {
  //   opacity: 1
  // }, {
  //   opacity: 0,
  //   duration: .0001
  // }, 0)
  .to('.menu-hamburger-icon line:nth-child(2)', {
    attr: { x1: 26, y1: 8, x2: 26, y2: 8 }
  }, 0.3);

	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
	button.addEventListener( 'click', function() {
		siteNavigation.classList.toggle( 'toggled' );
    page.classList.toggle( 'nav-toggled' );

		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
			button.setAttribute( 'aria-expanded', 'false' );
      hamburgerButtonAnimation.reverse();
      navBgAnimation.reverse();
      gsap.to('.site-header-current-page-title', { autoAlpha: 1, duration: .3, delay: .4 });
		} else {
      button.setAttribute( 'aria-expanded', 'true' );
      gsap.to('.site-header-current-page-title', { autoAlpha: 0, duration: .01 });
      hamburgerButtonAnimation.play(0);
      navBgAnimation.play(0);
		}
	} );

  document.querySelectorAll('.site-header-main-navigation a').forEach( (link) => {
    link.addEventListener( 'click', () => {
      navBgAnimation.reverse();
    })
  })

	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
	document.addEventListener( 'click', function( event ) {
    // adjusting transformOrigin for site-main for out-transition
    let y = window.scrollY + window.innerHeight + .3;
    document.querySelector('.site-main').style.transformOrigin = "50% " + y + "px";
    //checking if click is inside the nav
    const isClickInside = siteNavigation.contains( event.target );
		if ( ! isClickInside ) {
			siteNavigation.classList.remove( 'toggled' );
      page.classList.remove( 'nav-toggled' );
			button.setAttribute( 'aria-expanded', 'false' );
      hamburgerButtonAnimation.reverse();
		}
	} );

	// Get all the link elements within the menu.
	const links = menu.getElementsByTagName( 'a' );

	// Get all the link elements with children within the menu.
	const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

	// Toggle focus each time a menu link is focused or blurred.
	for ( const link of links ) {
		link.addEventListener( 'focus', toggleFocus, true );
		link.addEventListener( 'blur', toggleFocus, true );
    link.addEventListener( 'click', () => {
      gsap.to('.site-header-main-navigation li', {
        autoAlpha: 0,
        yPercent: -100,
        stagger: .1
      })
    } )
	}

	// Toggle focus each time a menu link with children receive a touch event.
	for ( const link of linksWithChildren ) {
		link.addEventListener( 'touchstart', toggleFocus, false );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		if ( event.type === 'focus' || event.type === 'blur' ) {
			let self = this;
			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( ! self.classList.contains( 'nav-menu' ) ) {
				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					self.classList.toggle( 'focus' );
				}
				self = self.parentNode;
			}
		}

		if ( event.type === 'touchstart' ) {
			const menuItem = this.parentNode;
			event.preventDefault();
			for ( const link of menuItem.parentNode.children ) {
				if ( menuItem !== link ) {
					link.classList.remove( 'focus' );
				}
			}
			menuItem.classList.toggle( 'focus' );
		}
	};
// Just in case: 
  // let navItems = document.querySelectorAll('.site-header-main-navigation a');
  // navItems.forEach( (element) => {
  //   makeShapeButton(element);
  // })

  // function makeShapeButton( element ){
  //   let shapeWrap = document.createElement('DIV'),
  //       shape = document.createElement('DIV'),
  //       shapeW = element.offsetWidth,
  //       shapeH = element.offsetHeight;
  //       shapeWrap.classList.add('shape-bg-wrap');
  //       shape.classList.add('shape-bg');
  //   element.addEventListener( 'mousemove', (e) => {
  //     let elCenterX = element.getBoundingClientRect().left + shapeW/2,
  //         elCenterY = element.getBoundingClientRect().top + shapeH/2,
  //         mouseX = e.clientX,
  //         mouseY = e.clientY,
  //         xP = ( elCenterX - mouseX ) * 2 / shapeW,
  //         yP = ( elCenterY - mouseY ) * 2 / shapeH;
  //     gsap.to( shape, {
  //       rotationX: 45 * yP,
  //       rotationY: 20 * xP,
  //       duration: .3
  //     });
  //   });
  //   shapeWrap.appendChild(shape);
  //   element.parentElement.insertBefore(shapeWrap, element);
  // }

  // document.querySelectorAll('div:not(.home-nav-buttons) > .wp-block-button > .wp-block-button__link').forEach( (element) => {
  //   if ( !element.parentElement.style.position || element.parentElement.style.position == 'static' ){
  //     element.parentElement.style.position = 'relative';
  //   }
  //   if ( !element.style.position || element.style.position == 'static' ){
  //     element.style.position = 'relative';
      
  //   }
  //   makeShapeButton( element );
  // } )

  let navBgAnimation;
  // mobile nav shape in bg]
  if ( !document.querySelector('.nav-menu-mobile-bg') ){
    let mobmenu = document.querySelector('.nav-menu'),
        imgurl = '/wp-content/themes/artemis2021/img/mobilenav-bg.jpg',
        menubgimg = document.createElement("img"),
        menubg = document.createElement("div"),
        menubgwrap = document.createElement("div");
    menubgimg.setAttribute('src', imgurl);
    menubgimg.classList.add('nav-menu-mobile-bg-img');    
    menubg.classList.add('nav-menu-mobile-bg');
    menubgwrap.classList.add('nav-menu-mobile-bg-wrap');
    menubgwrap.appendChild(menubg);
    menubg.appendChild(menubgimg);
    menubgwrap.style.left = "100%";
    document.querySelector('#page').appendChild(menubgwrap);
    gsap.timeline( { 
      repeat: -1, 
      repeatRefresh: true,
      // yoyo: true,
      defaults: {
        duration: 4,
        ease: "linear"
      }
    } )
    .to('.nav-menu-mobile-bg', {
      transformOrigin: "50% 50%",
      rotationY: "random(-20, 20, 1)",
      rotationX: "random(-10, 10, 1)",
      rotationZ: "random(-5, 5, 1)",
      // yPercent: "random(-5, 5, 1)",
      scaleY: "random(0.8, 1, 0.01)",
      repeatRefresh: true,
    })
    navBgAnimation = gsap.timeline({ 
      paused: true, 
      defaults: {
        duration: .3,
        ease: "power3.out"
      } 
    })
    .fromTo('.nav-menu-mobile-bg-wrap', {
      xPercent: 0,
    }, {
      xPercent: -100,
    })
    .from('.nav-menu-mobile-bg', {
      scaleX: 0
    }, 0);
  };

  

};

export { navigation };