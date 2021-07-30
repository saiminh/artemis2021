import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { ModelViewerElement } from '@google/model-viewer';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function portfolioModelViewers(data){
  
  let portfolioNav = document.createElement('div');
      portfolioNav.classList.add('portfolio-nav');
      data.container.querySelector('article').insertBefore( portfolioNav, data.container.querySelector('.entry-content') );

  let viewerNL = data.container.querySelectorAll('model-viewer');
  
  viewerNL.forEach( (viewer, index) => {
    viewer.removeAttribute('auto-rotate');
    viewer.setAttribute('loading', 'eager');
    let viewerClone = viewer.parentElement.parentElement.cloneNode(true);
    viewerClone.classList.remove('portfolio-section-hero');
    viewerClone.classList.add('portfolio-nav-element');
    portfolioNav.appendChild(viewerClone);
    if ( index == 0 ){
      animate(viewer, 105);
      animate(viewerClone.querySelector('model-viewer'), 105);
    } else {
      animate(viewer);
      animate(viewerClone.querySelector('model-viewer'));
    }
  });

  function animate(el, rad = 60){
    let theta = 0,
        phi = 75,
        radius = rad;
    el.addEventListener('mousemove', (e) => {
      theta = ( e.offsetX/el.offsetWidth - .5 ) * 90
      phi = 75 + ( e.offsetY/el.offsetHeight - .5 ) * 90;
      // radius = Math.floor(105 + ( e.offsetX/el.offsetWidth - .5 ) * 100) ;
    })
    
    function moveModelViewer() {
      if (phi < 74.9 ){
        phi = phi + .1;
      } else if ( phi > 75.1 ) {
        phi = phi - .1;
      } else {
        phi = 75
      }
      if (theta < -0.1 ){
        theta = theta + .1;
      } else if ( theta > 0.1 ) {
        theta = theta - .1;
      } else {
        theta = 0
      }
      gsap.to(el, {
        attr: {
          "camera-orbit": theta + "deg " +  phi + "deg " + radius + "%"
        }
      })
    }
    gsap.ticker.add( moveModelViewer );
  };

  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

  // navigation logic
  let navElems = data.container.querySelectorAll('.portfolio-nav-element');
  let contentElems = data.container.querySelectorAll('.portfolio-section');
  navElems.forEach( (elem, index) => {
    elem.addEventListener( 'click', ()=> {
      gsap.to(window, {
        scrollTo: {
          y: offset( contentElems[index] ).top,
          duration: 1,
          ease: "power3.out"
        }
      })
    })
  } )
}

export { portfolioModelViewers };