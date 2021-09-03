import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function companyAfter(data) {
  
  let hero = data.container.querySelector('.company-hero');
  hero.style.minHeight = window.innerHeight + 'px';
  let difference;
  if ( hero.offsetHeight >= window.innerHeight ){
    difference = "bottom";
  } else {
    difference = hero.offsetHeight + "px"
  }
  // Pin the Hero text
  ScrollTrigger.create({
    trigger: hero,
    start: "bottom " + difference,
    end: data.container.querySelector('.latest-news').offsetTop - data.container.querySelector('.company-hero').offsetHeight - 100 + "px top" ,
    pin: true,
    pinSpacing: false,
  });
  
  let rotator = document.querySelector('.company-manifesto > .wp-block-group__inner-container');

  function mouse3drot(object){
    let midX = window.innerWidth * .5;
    let midY = window.innerHeight * .5;
    window.addEventListener('mousemove', (e) => {
      let posX = (midX - e.clientX) * .005;
      let posY = (midY - e.clientY) * .005;
      // console.log('x: ' + posX + " y: " + posY );
      gsap.to(object, { rotationY: posX, rotationX: posY, overwrite: true, ease: 'Power3.inOut' });
    })
  }
  mouse3drot(rotator);
}

export { companyAfter };