import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

function team(data){
  let splitHeadline = new SplitText(data.container.querySelector('.team-hero-title'), { type: "words, lines" });
  splitHeadline.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  gsap.from( splitHeadline.words, {
    transformOrigin: "0% 50%",
    rotationZ: 15,
    yPercent: 100,
    stagger: .07,
    duration: .75,
    delay: .5,
    ease: "circ.out"
  });
}
export { team };