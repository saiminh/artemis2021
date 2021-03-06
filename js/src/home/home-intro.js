import { gsap } from "gsap";

function homeIntro(){
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  })

  function disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  }
  
  function enableScrolling() {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }
  
  disableScrolling();
  
  function afterIntro(){
    enableScrolling();
    import('./home-scroll.js').then( homeScroll => {
      homeScroll.homeScroll();
    })
  }

  //resetting elements
  gsap.set('.home-hero-headline', {
    y: window.innerHeight
  });
  // check as canvas is originally generated by js 
  if ( document.querySelector('.home-canvas') ) {
    gsap.set('.home-canvas', {
      transformOrigin: "50% 50%",
      scale: 0
    });
  }
  gsap.set('.artemis-preloader', {
    autoAlpha: 1
  });    
  gsap.set('.artemis-preloader-logos', {
    scale: 3,
    y: 0
  });    
  //Loading animation
  let loadingTl = gsap.timeline({
    // paused: false, 
    onComplete: ()=>{
      if( document.readyState === 'complete' ) {
        curtainsUp();
      } else {
        loadingTl.play(0);
      }
    } 
  });
  loadingTl.fromTo('.artemis-preloader svg:nth-child(2) path', {
    autoAlpha: 0
  },{ 
    autoAlpha: 1,
    stagger: 0.1
  });
  // curtainsup animation
  function curtainsUp() {
    let tl = gsap.timeline({
      onComplete: () => {
        afterIntro();
      }
    })
      .set('.site-main', {
        autoAlpha: 1,
      }, 0)
      .to('.artemis-preloader-logos', {
        scale: 1,
        ease: "expo.out",
        duration: 1
      }, 0) 
      .to('.home-hero-headline', {
        y: 0,
        duration: 1, 
        ease: "expo.out"
      }, 1.1)
      .to('.artemis-preloader-logos .artemis-logo', {
        y: -window.innerHeight/2 + 40,
        ease: "expo.out",
        duration: 1, 
      }, 1);
    
    // need to check for element as it is generated by js
    if ( document.querySelector('.home-canvas') ){
      tl.to('.home-canvas', {
        scale: 1,
        ease: "expo.out",
        duration: 1, 
      }, 0);
    }

    window.addEventListener('resize', () => {
      gsap.set('.artemis-preloader-logos .artemis-logo', {
        y: -window.innerHeight/2 + 40
      })
    });

    return tl;
  }
}

export { homeIntro };