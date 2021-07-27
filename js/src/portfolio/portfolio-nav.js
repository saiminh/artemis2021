import { gsap } from "gsap";


function portfolioNav(){

  const portfolioNavElems = Array.from( document.querySelectorAll('.portfolio-nav .wp-block-column') );
  
  portfolioNavElems.forEach( function(pfNavElem) {
    // const bgshape = document.createElement('DIV');
    // bgshape.classList.add('pfNavElem-bgshape');
    // const bgshapeImg = document.createElement('DIV');
    // bgshapeImg.classList.add('pfNavElem-bgshapeImg');
    let pfNavElem_bgshape = pfNavElem.querySelector('.wp-block-cover');
    let pfNavElem_bgshapeImg = pfNavElem_bgshape.querySelector('.wp-block-cover__image-background');
    
    // let pfNavElem_bgshapeImg_movetl = gsap.timeline( { paused: true, repeat: -1, defaults: { duration: 5, ease: "cubic.inOut" } } )
    //   .to(pfNavElem_bgshapeImg, {
    //     xPercent: 1,
    //     yPercent: 1
    //   })
    //   .to(pfNavElem_bgshapeImg, {
    //     xPercent: 0
    //   })
    //   .to(pfNavElem_bgshapeImg, {
    //     xPercent: 1,
    //     yPercent: 0
    //   })
    //   .to(pfNavElem_bgshapeImg, {
    //     xPercent: 0,
    //     yPercent: 0
    //   });
    // gsap.set(pfNavElem_bgshapeImg, {
    //   scale: 1
    // });
    // let pfNavElem_bgshapeImg_scaletl = gsap.timeline({ paused: true })
    //   .to(pfNavElem_bgshapeImg, {
    //     scale: 1,
    //     duration: .3,
    //     ease: 'power2.inOut'
    //   });
    
    // pfNavElem.addEventListener('mouseover', (e) => {
    //   pfNavElem_bgshapeImg_scaletl.play();
    //   pfNavElem_bgshapeImg_movetl.play();
    // });
    // pfNavElem.addEventListener('mouseleave', (e) => {
    //   pfNavElem_bgshapeImg_movetl.pause();
    //   pfNavElem_bgshapeImg_scaletl.reverse();
    // });
    window.addEventListener('mousemove', (e) => {
      let pfNavElemX = window.innerWidth/2;
      let pfNavElemY = window.innerHeight/2;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // console.log('pfNavElemY: ' + pfNavElemY + ' mouseY: ' + mouseY );
      gsap.to(pfNavElem_bgshape, {
        rotationY: (mouseX - pfNavElemX)/50,
        rotationX: (pfNavElemY - mouseY)/50,
        duration: .3,
        delay: .2,
        ease: "power4.out"
      });
      // gsap.to(pfNavElem_bgshapeImg, {
      //   x: (pfNavElemX - mouseX),
      //   y: (pfNavElemY - mouseY)
      // });
    })
  })
}
export { portfolioNav };