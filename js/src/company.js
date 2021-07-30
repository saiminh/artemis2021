import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { latestNewsScroller } from "./latestNewsScroller.js";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


function company(data) {

  data.container.querySelector('.site-main').style.transform = null;
  // data.container.querySelector('.company-hero').style.height = window.innerHeight;

  // Pin the Hero text
  ScrollTrigger.create({
    trigger: data.container.querySelector('.company-hero'),
    start: "top top",
    end: data.container.querySelector('.latest-news').offsetTop - data.container.querySelector('.company-hero').offsetHeight - 100 + "px top" ,
    pin: true,
    pinSpacing: false
  });
  
  // Parallax scroll?
  gsap.to(data.container.querySelector('.company-hero h1'), {
    yPercent: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: data.container.querySelector('.company-manifesto'),
      start: "top bottom",
      scrub: .5,
      toggleActions: 'play pause reverse pause'
    },
  });

  let splitHero = new SplitText(data.container.querySelector('.company-hero h1'), { type: "words,chars" });
      
  gsap.to( splitHero.chars, {
    opacity: 0,
    // y: -40,
    stagger: {
      amount: 1,
      from: "end"
    },
    scrollTrigger: {
      trigger: data.container.querySelector('.company-manifesto'),
      start: "top bottom",
      end: "50% bottom",
      scrub: .5,
      toggleActions: 'play pause reverse pause'
    },
  });
  latestNewsScroller(data);
}

export { company };