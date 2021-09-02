import { gsap } from "gsap";


function homeButtons(){

  const homeBtns = document.querySelectorAll('.home-navigation .wp-block-button');
  
  homeBtns.forEach( function(homeBtn) {
    let bgshape = document.createElement('DIV');
    bgshape.classList.add('homeBtn-bgshape');
    let bgshapeImg = document.createElement('DIV');
    bgshapeImg.classList.add('homeBtn-bgshapeImg');
    // bgshapeImg.setAttribute('src', '/wp-content/themes/artemis2021/img/artemis-bg.png');
    let homeBtn_bgshape = homeBtn.appendChild(bgshape);
    let homeBtn_bgshapeImg = homeBtn_bgshape.appendChild(bgshapeImg);
    
    let homeBtn_bgshapeImg_movetl = gsap.timeline( { paused: true, repeat: -1, defaults: { duration: 5, ease: "cubic.inOut" } } )
      .to(homeBtn_bgshapeImg, { backgroundPosition: "100% 100%" })
      .to(homeBtn_bgshapeImg, { backgroundPosition: "0% 100%" })
      .to(homeBtn_bgshapeImg, { backgroundPosition: "100% 0%" })
      .to(homeBtn_bgshapeImg, { backgroundPosition: "0% 0%" })
    ;
    gsap.set(homeBtn_bgshape, {
      scale: 0
    });
    gsap.set(homeBtn_bgshapeImg, {
      scale: 1
    });
    let homeBtn_bgshape_in_tl = gsap.timeline({ paused: true }).to( homeBtn_bgshape, { scale: 1, duration: .3, ease: 'power2.inOut' } );
    
    homeBtn.addEventListener('mouseover', (e) => {
      homeBtn_bgshape_in_tl.play();
      homeBtn_bgshapeImg_movetl.play();
    });
    homeBtn.addEventListener('mouseleave', (e) => {
      homeBtn_bgshapeImg_movetl.pause();
      homeBtn_bgshape_in_tl.reverse();
    });
    homeBtn.addEventListener('mousemove', (e) => {
      let homeBtnX = homeBtn.getBoundingClientRect().left + homeBtn.clientWidth/2;
      let homeBtnY = homeBtn.getBoundingClientRect().top - window.scrollY + homeBtn.clientHeight/2 +  window.scrollY;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      gsap.to(homeBtn_bgshape, {
        rotationY: (homeBtnX - mouseX)/12,
        rotationX: (homeBtnY - mouseY)/4,
        duration: .3
      });
      gsap.to(homeBtn_bgshapeImg, {
        x: (homeBtnX - mouseX) * 0.5,
        y: (homeBtnY - mouseY) * 0.5
      });
    })
  })
}
export { homeButtons };