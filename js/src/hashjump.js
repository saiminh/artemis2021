import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function hashjump(){
  let thisHash = location.hash;
  gsap.to( window, {
    scrollTo: thisHash
  })
}

export { hashjump }