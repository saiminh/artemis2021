import { gsap } from 'gsap';

function portfolioLoader(){

  gsap.set('.artemis-preloader', {
    autoAlpha: 1,
  });    
  gsap.set('.site-main', {
    autoAlpha: 0,
  });    
  gsap.set('.artemis-preloader-logos', {
    scale: 3,
    y: 0
  });  

  //Loading animation
  let loadingTl = gsap.timeline({
    paused: false, 
    onComplete: ()=>{
      if(document.readyState === 'complete') {
        curtainsUp();
      } else {
        loadingTl.play(0);
      }
    } 
  });
  loadingTl.fromTo('.artemis-preloader svg:nth-child(2) path', {
    autoAlpha: 0
  },{ 
    autoAlpha: 1,
    duration: .5,
    stagger: {
      amount: 1.5,
      from: "start"
    }
  });
  // curtainsup animation
  function curtainsUp() {
    let tl = gsap.timeline()      
      .to('.site-main', {
        autoAlpha: 1,
        ease: "power3.inOut",
        duration: 1.25
      })
      .to('.artemis-preloader-logos', {
        y: -window.innerHeight/1.5,
        ease: "power3.inOut",
        duration: .75, 
      }, 0);
  
    return tl;
  }
}
export { portfolioLoader }