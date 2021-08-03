import barba from '@barba/core';
// import barbaPrefetch from '@barba/prefetch';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeHero } from './home/home-hero.js';
import { homeButtons } from './home/home-buttons.js';
import { homeIntro } from './home/home-intro.js';
import { company } from './company.js';
import { news } from './news.js';
// import { test } from './test.js';
import { navigation } from './navigation.js';
import { portfolioModelViewers } from './portfolio/portfolio-modelViewer.js';
import { portfolioNav } from './portfolio/portfolio-nav.js';
import { tripleHeadlines } from './tripleheadlines.js';
gsap.registerPlugin(ScrollTrigger);

// barba.use(barbaPrefetch);
barba.init({
  debug: true,
  transitions: [
    {
      // sync: true,
      name: 'default-transition',
      leave(data) {
        return gsap.timeline()
        .to(data.current.container.querySelector('.site-header'), {
          yPercent: "-=100",
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        .to(data.current.container.querySelector('.site-footer'), {
          yPercent: "+=100",
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        .to(data.current.container.querySelector('.site-main'), {
          // xPercent: "-=100",
          // y: "+=100",
          // rotationY: 27,
          // rotationX: 27,
          // transformOrigin: "50% 0%",
          // scale: .9,
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out',
        }, 0 );
      },
      enter(data) {
        return gsap.timeline()
          .from(data.next.container.querySelector('.site-header'), {
            yPercent: "-=100",
            duration: 1,
            ease: "expo.out"
          }, 0 )
          .from(data.next.container.querySelector('.site-footer'), {
            yPercent: "+=100",
            duration: 1,
            ease: 'expo.out',
          }, 0 )
          .from(data.next.container.querySelector('.site-main'), {
            // xPercent: "+=100",
            autoAlpha: 0,
            // transformOrigin: "50% 0%",
            // scale: .9,
            duration: 3,
            ease:'power4.out'
          }, 0 )
          ;
      }
    }, {
      name: 'home-transition',
      from: { namespace: [ 'home' ] },
      leave({current}) {
        return gsap.timeline().to(current.container, {
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out'
        }, 0 ).to('.artemis-preloader', {
          autoAlpha: 0
        }, 0 )
      },
      enter({next}) {
        let tl = gsap.timeline({paused: false})
          .from(next.container.querySelector('.site-header'), {
            yPercent: -100,
            duration: 1,
            ease: "expo.out"
          }, 0 )
          .from(next.container.querySelector('.site-main'), {
            autoAlpha: 0,
            duration: .4,
            ease:'"sin.inOut'
          }, 0 );
        return tl
      }
    }
  ],// end of transitions
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        window.scrollTo(0, 0);
        homeIntro();
        homeHero();
        homeButtons();
      },
      afterEnter() {
      }
    },
    {
      namespace: 'company',
      afterEnter(data) {
        company(data.next);        
      }
    },
    {
      namespace: 'news',
      afterEnter(data) {
        news(data.next);        
      }
    },
    {
      namespace: 'portfolio',
      beforeEnter(data) {
        portfolioModelViewers(data.next);
        // portfolioNav();
      }
    },
    // {
    //   namespace: 'test',
    //   beforeEnter(data) {
    //     test(data);
    //   }
    // },
    {
      namespace: 'single-post',
      beforeEnter(data) {
        news(data.next);
      }
    },
    {
      namespace: 'archive',
      beforeEnter(data) {
        news(data.next);
      }
    },
    {
      namespace: 'search',
      beforeEnter(data) {
        news(data.next);
      }
    },
  ]
})
barba.hooks.enter( (data) => {
  window.scrollTo(0, 0);
})
barba.hooks.after( (data) => {
  navigation();
  tripleHeadlines();
})
// first page only:
navigation();
tripleHeadlines();
window.addEventListener('load', () => {
  gsap.to('body', {
    opacity: 1
  })
})