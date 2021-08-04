import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);


function companyBefore(data){
  let splitHero = new SplitText(data.container.querySelector('.company-hero h1'), { type: "words" });
      
  gsap.from( splitHero.words, {
    opacity: 0,
    y: -10,
    duration: 1,
    stagger: {
      amount: .5,
      from: "start"
    }
  });

}
export { companyBefore }