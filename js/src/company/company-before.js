import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);


function companyBefore(data){
  let splitHero = new SplitText(data.container.querySelector('.company-hero h1'), { type: "words, lines" });
  let splitHeroP = new SplitText(data.container.querySelector('.company-hero p'), { type: "words, lines" });
  splitHero.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  splitHeroP.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  
  // gsap.set( splitHero.words, {
  //     transformOrigin: "50% 50%",
  //     scale: 2
  // });
  gsap.from( splitHero.words, {
    transformOrigin: "0% 50%",
    // opacity: 0,
    scale: .9,
    yPercent: 100,
    // rotationZ: 12,
    duration: 1,
    delay: .5,
    ease: "circ.inOut",
    stagger: {
      amount: .25,
      from: "start"
    }
  });
  gsap.from( splitHeroP.words, {
    transformOrigin: "0% 50%",
    // opacity: 0,
    scale: .9,
    yPercent: 100,
    // rotationZ: 12,
    duration: 1,
    delay: 1,
    ease: "circ.inOut",
    stagger: {
      amount: .5,
      from: "start"
    }
  });

}
export { companyBefore }