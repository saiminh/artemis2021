import barba from '@barba/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { home } from './home.js';
import { companyBefore } from './company/company-before.js';
import { companyAfter } from './company/company-after.js';
import { news } from './news.js';
import { team } from './team.js';
import { navigation } from './navigation.js';
import { portfolio } from './portfolio.js';
import { tripleHeadlines } from './tripleheadlines.js';
import { latestNewsScroller } from './latestNewsScroller.js';
import { mobileVhFixer } from './mobileVhFixer.js';
import { hashjump } from './hashjump.js';
gsap.registerPlugin(ScrollTrigger);

function logoMover() {
  let e =  window.event;
  gsap.to('.artemis-preloader-logos', {
    x: () => (window.innerWidth * 0.5 - e.clientX) * 0.05
  })
}
function logosMoveWithMouse(switcher){
  if ( switcher == "on"){
    console.log('on');
    window.addEventListener('mousemove', logoMover );
  } else if (switcher == "off") {
    window.removeEventListener('mousemove', logoMover );
    gsap.to('.artemis-preloader-logos', { x: 0 } );
  }
};
function regularInTransition(data){
  let tl = gsap.timeline()
  .from(data.next.container.querySelectorAll('.site-header > *'), {
    yPercent: '-=100',
    duration: 1,
    stagger: .1,
    ease: 'expo.out'
  }, 0 )
  .from(data.next.container.querySelector('.site-footer'), {
    backgroundColor: '#FFFFFF'
  }, 0)
  .from(data.next.container.querySelector('.site-footer > *'), {
    yPercent: '+=100',
    duration: 1,
    ease: 'expo.out'
  }, 0 )
  .from(data.next.container.querySelector('.site-main'), {
    transformOrigin: '50% 33vh',
    autoAlpha: 0,
    duration: 1.5,
    ease:'expo.inOut'
  }, 0 )
  .to('.artemis-preloader svg:nth-child(2) path', { 
    autoAlpha: 0, 
    stagger: .1 
  }, 0);
  return tl;
};
function regularOutTransition(data){
  let tl = gsap.timeline()
  .to(data.current.container.querySelectorAll('.site-header > *'), {
    yPercent: '-=100',
    stagger: .1, 
    duration: 1,
    ease: 'expo.out'
  }, 0 )
  .to(data.current.container.querySelector('.site-footer'), {
    backgroundColor: '#FFFFFF',
    duration: .2
  }, 0)
  .to(data.current.container.querySelector('.site-footer > *'), {
    y: 1000,
    duration: .5,
    ease: 'expo.out'
  }, 0 )
  .to(data.current.container.querySelector('.site-main'), {
    autoAlpha: 0,
    duration: 1,
    ease: 'expo.out'
  }, 0 )
  .to('.artemis-preloader svg:nth-child(2) path', { 
    autoAlpha: 1, 
    stagger: .1 
  }, 0);
  return tl;
}


barba.init({
  debug: true,
  transitions: [
    {
      name: 'default-transition',
      leave(data) {        
        return regularOutTransition(data);
      },
      enter(data) {
        return regularInTransition(data);
      }
    },
    {
      name: 'home-in-transition',
      to: { namespace: [ 'home', 'portfolio' ] },
      enter(data) {
        let tl = gsap.timeline()
        .set('.artemis-preloader', {
          y: 0,
          duration: 2
        }, 0)
        .set ('.artemis-preloader-logos', {
          scale: 3
        }, 0)
        .set ('.artemis-preloader-logos .artemis-logo', {
          y: 0
        }, 0)
        .set(data.next.container.querySelector('.site-main'), {
          autoAlpha: 0
        }, 0)
        .from(data.next.container.querySelectorAll('.site-header > *'), {
          yPercent: '-=100',
          duration: 1,
          stagger: .1,
          ease: 'expo.out'
        }, 0 )
        .from(data.next.container.querySelector('.site-footer'), {
          backgroundColor: '#FFFFFF'
        }, 0)
        .from(data.next.container.querySelector('.site-footer > *'), {
          yPercent: '+=100',
          duration: 1,
          ease: 'expo.out'
        }, 0 )
        return tl;
      },
      leave(data) {
        return regularOutTransition(data);
      }
    },
    {
      name: 'home-out-transition',
      from: { namespace: [ 'home' ] },
      leave(data) {        
        return gsap.timeline()
        .set('.artemis-preloader', {
          y: 0,
          duration: 2
        }, 0)
        .set ('.artemis-preloader-logos', {
          scale: 3
        }, 0)
        .set ('.artemis-preloader-logos .artemis-logo', {
          y: 0
        }, 0)
        .to(data.current.container.querySelectorAll('.site-header > *'), {
          yPercent: '-=100',
          stagger: .1, 
          duration: 1,
          ease: 'expo.out'
        }, 0 )
        .to(data.current.container.querySelector('.site-footer'), {
          backgroundColor: '#FFFFFF',
          duration: .2
        }, 0)
        .to(data.current.container.querySelector('.site-footer > *'), {
          y: 1000,
          duration: .5,
          ease: 'expo.out'
        }, 0 )
        .to(data.current.container.querySelector('.site-main'), {
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out'
        }, 0 )        
        .fromTo('.artemis-preloader svg:nth-child(2) path', { 
          autoAlpha: 0
        }, {
          autoAlpha: 1, 
          stagger: .1
        }, 0);
      },
      enter(data) {
        return regularInTransition(data);
      }
    }
  ],// end of transitions
  views: [
    {
      namespace: 'home',
      beforeEnter(data) {
        logosMoveWithMouse('on');
        window.scrollTo(0, 0);
        home(data.next);
      },
      afterLeave() {
        logosMoveWithMouse('off');
      }
    },
    {
      namespace: 'company',
      beforeEnter(data) {
        companyBefore(data.next);   
      },
      afterEnter(data) {
        companyAfter(data.next);   
        latestNewsScroller(data.next);     
      }
    },
    {
      namespace: 'news',
      beforeEnter(data) {
        latestNewsScroller(data.next);     
        news(data.next);   
      }
    },
    {
      namespace: 'team',
      beforeEnter(data) {
        team(data.next);   
      }
    },
    {
      namespace: 'portfolio',
      beforeEnter(data) {
        portfolio(data.next);
      }
    },
    {
      namespace: 'single-post',
      beforeEnter(data) {
        latestNewsScroller(data.next);
      }
    },
    {
      namespace: 'archive',
      beforeEnter(data) {
        latestNewsScroller(data.next);
      }
    },
    {
      namespace: 'search',
      beforeEnter(data) {
        latestNewsScroller(data.next);
      }
    },
  ]
})
barba.hooks.enter( (data) => {
  // resetting the logos from transitions on home
  gsap.set('.artemis-preloader-logos .artemis-logo', { y: 0 });
  //remove js-loading class
  document.querySelector('.artemis-preloader').classList.remove('js-loading');
  //scroll new page to the top before each transition
  window.scrollTo(0, 0);
  //unhide the page content
  gsap.set('#page', { autoAlpha: 1 });
})
barba.hooks.after( (data) => {
  hashjump();
  tripleHeadlines();
  navigation();
  mobileVhFixer();
  data.next.container.querySelector(".site-main").style.transform = 'none';
})
// first page only:
document.querySelector('.artemis-preloader').classList.remove('js-loading');
navigation();
tripleHeadlines();
mobileVhFixer();
window.addEventListener('load', () => {
  gsap.to('#page', {
    autoAlpha: 1
  })
})