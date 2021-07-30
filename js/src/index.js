import barba from '@barba/core';
// import barbaPrefetch from '@barba/prefetch';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeHero } from './home/home-hero.js';
import { homeButtons } from './home/home-buttons.js';
import { homeIntro } from './home/home-intro.js';
import { company } from './company.js';
import { news } from './news.js';
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
      name: 'default-transition',
      leave({current}) {
        let tl = gsap.timeline()
        .to(current.container.querySelector('.site-header'), {
          yPercent: -100,
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        .to(current.container.querySelector('.site-footer'), {
          yPercent: 100,
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        .to(current.container.querySelector('.site-main'), {
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out',
        }, 0 )
        return tl;
      },
      enter({next}) {
        let tl = gsap.timeline({paused: false})
          .from(next.container.querySelector('.site-header'), {
            yPercent: -100,
            duration: 1,
            ease: "expo.out"
          }, 0 )
          .from(next.container.querySelector('.site-footer'), {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
          }, 0 )
          .from(next.container.querySelector('.site-main'), {
            //y: window.innerHeight,
            autoAlpha: 0,
            duration: .4,
            ease:'"sin.inOut'
          }, 0 );
        return tl
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
            y: window.innerHeight,
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
    }
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
  document.body.style.opacity = 1;
})