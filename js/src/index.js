import barba from '@barba/core';
// import barbaPrefetch from '@barba/prefetch';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeHero } from './home/home-hero.js';
import { homeButtons } from './home/home-buttons.js';
import { homeIntro } from './home/home-intro.js';
import { homeScroll } from './home/home-scroll.js';
import { companyBefore } from './company/company-before.js';
import { companyAfter } from './company/company-after.js';
import { news } from './news.js';
import { test } from './test.js';
import { team } from './team.js';
import { navigation } from './navigation.js';
import { portfolioModelViewers } from './portfolio/portfolio-modelViewer.js';
import { portfolioNav } from './portfolio/portfolio-nav.js';
import { portfolioLoader } from './portfolio/portfolio-loader.js';
import { tripleHeadlines } from './tripleheadlines.js';
import { latestNewsScroller } from './latestNewsScroller.js';
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
        .to(data.current.container.querySelectorAll('.site-header > *'), {
          yPercent: "-=100",
          stagger: .1, 
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        .to(data.current.container.querySelector('.site-footer'), {
          backgroundColor: "#FFFFFF",
          duration: .2
        }, 0)
        .to(data.current.container.querySelector('.site-footer > *'), {
          y: 1000,
          duration: .5,
          ease: 'expo.out',
        }, 0 )
        .to(data.current.container.querySelector('.site-main'), {
          scale: .95,
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out',
        }, 0 );
      },
      enter(data) {
        return gsap.timeline()
          .from(data.next.container.querySelectorAll('.site-header > *'), {
            yPercent: "-=100",
            duration: 1,
            stagger: .1,
            ease: "expo.out"
          }, 0 )
          .from(data.next.container.querySelector('.site-footer'), {
            backgroundColor: "#FFFFFF"
          }, 0)
          .from(data.next.container.querySelector('.site-footer > *'), {
            yPercent: "+=100",
            duration: 1,
            ease: 'expo.out',
          }, 0 )
          .from(data.next.container.querySelector('.site-main'), {
            transformOrigin: "50% 33vh",
            autoAlpha: 0,
            scale: .95,
            duration: 1.5,
            ease:'expo.inOut'
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
            ease: 'expo.out'
          }, 0 )
          .from(next.container.querySelector('.site-main'), {
            autoAlpha: 0,
            duration: .4,
            ease: 'sin.inOut'
          }, 0 );
        return tl
      }
    }
  ],// end of transitions
  views: [
    {
      namespace: 'home',
      beforeEnter(data) {
        window.scrollTo(0, 0);
        homeIntro();
        homeHero();
        homeScroll(data.next);
        homeButtons();
      },
      afterEnter() {
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
        portfolioModelViewers(data.next);
        portfolioLoader();
      }
    },
    {
      namespace: 'test',
      beforeEnter(data) {
        test(data);
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
  window.scrollTo(0, 0);
    gsap.set('#page', {
      opacity: 1
    })
})
barba.hooks.after( (data) => {
  navigation();
  tripleHeadlines();
  data.next.container.querySelector(".site-main").style.transform = 'none';
})
// first page only:
navigation();
tripleHeadlines();
window.addEventListener('load', () => {
  gsap.to('#page', {
    opacity: 1
  })
})