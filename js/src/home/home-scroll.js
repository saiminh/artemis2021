import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText);

function homeScroll(data) {
  let splitHomeContent = new SplitText(data.container.querySelectorAll('.home-content p'), { type: "words, lines" });
  splitHomeContent.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  gsap.from(splitHomeContent.words, {
    opacity: 0,
    yPercent: 100,
    stagger: .05,
    ease: 'power3.out',
    duration: .3,
    scrollTrigger: {
      trigger: data.container.querySelector('.home-content'),
      start: 'top 75%',
      toggleActions: 'play complete play reverse',
    }
  });
  gsap.to( '.home-hero-headline', {
    scrollTrigger: {
      trigger: data.container.querySelector('.home-hero'),
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    yPercent: 33,
  })
}
export { homeScroll }