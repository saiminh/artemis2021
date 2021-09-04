import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsapCore from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger, SplitText);

function homeScroll() {
  let splitHomeContent = new SplitText(document.querySelectorAll('.home-content p'), { type: "words, lines" });
  splitHomeContent.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  gsap.from(splitHomeContent.words, {
    autoAlpha: 0,
    yPercent: 100,
    stagger: .05,
    ease: 'power3.out',
    duration: .3,
    scrollTrigger: {
      trigger: document.querySelector('.home-content'),
      start: 'top 85%',
      end: 'bottom 85%',
      toggleActions: 'play play pause pause',
      // markers: true,
    }
  });
  gsap.to( '.home-hero-headline', {
    scrollTrigger: {
      trigger: document.querySelector('.home-hero'),
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    yPercent: 33,
  });
  gsap.to( '.artemis-preloader', {
    scrollTrigger: {
      trigger: document.querySelector('.home-hero'),
      start: '90% top'
    },
    y: -300,
    duration: 1,
    ease: 'power3.in'
  });
  gsap.fromTo( '.site-header', {
    y: -300,
    autoAlpha: 0
  },{
    scrollTrigger: {
      trigger: document.querySelector('.home-hero'),
      start: '90% top'
    },
    y: 0,
    autoAlpha: 1,
    duration: 1,
    ease: 'power3.out'
  })
}
export { homeScroll }