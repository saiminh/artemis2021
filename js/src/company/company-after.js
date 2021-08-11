import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function companyAfter(data) {
  
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
  
}

export { companyAfter };