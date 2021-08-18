import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

function news(data){
  let splitHeadline = new SplitText(data.container.querySelector('.news-headline'), { type: "chars, lines" });
  splitHeadline.lines.forEach( (element) => {
    element.style.overflow = 'hidden';
  });
  gsap.from( splitHeadline.chars, {
    yPercent: 100,
    stagger: .07,
    duration: .5,
    delay: .5,
    ease: "circ.out"
  });
}

export { news };