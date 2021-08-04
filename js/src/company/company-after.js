import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function companyAfter(data) {
  
  // Need to remove parent transforms after pagetransition to enable scroll animation:
  data.container.querySelector('.site-main').style.transform = "none";
  data.container.querySelector('.site-main > article').style.transform = "none";
  let hero = data.container.querySelector('.company-hero');
  let difference;
  if ( hero.offsetHeight >= window.innerHeight ){
    difference = "bottom";
  } else {
    difference = hero.offsetHeight + "px"
  }
console.log(difference);
  // Pin the Hero text
  ScrollTrigger.create({
    trigger: hero,
    start: "bottom " + difference,
    end: data.container.querySelector('.latest-news').offsetTop - data.container.querySelector('.company-hero').offsetHeight - 100 + "px top" ,
    pin: true,
    pinSpacing: false,
  });
  
  // Parallax scroll?
  // gsap.to(data.container.querySelector('.company-hero h1'), {
  //   yPercent: -40,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: data.container.querySelector('.company-manifesto'),
  //     start: "top bottom",
  //     scrub: .5,
  //     toggleActions: 'play pause reverse pause'
  //   },
  // });

  
  
}

export { companyAfter };