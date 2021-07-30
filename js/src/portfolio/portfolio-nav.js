import { gsap } from "gsap";

function portfolioNav(){

  const portfolioNavElems = Array.from( document.querySelectorAll('.portfolio-nav .wp-block-column') );
  
  portfolioNavElems.forEach( function(pfNavElem) {
    let pfNavElem_bgshape = pfNavElem.querySelector('.wp-block-cover');
    let pfNavElem_bgshapeImg = pfNavElem_bgshape.querySelector('.wp-block-cover__image-background');
    
    window.addEventListener('mousemove', (e) => {
      let pfNavElemX = window.innerWidth/2;
      let pfNavElemY = window.innerHeight/2;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      gsap.to(pfNavElem_bgshape, {
        rotationY: (mouseX - pfNavElemX)/50,
        rotationX: (pfNavElemY - mouseY)/50,
        duration: .3,
        delay: .2,
        ease: "power4.out"
      });
    })
  })
}
export { portfolioNav };