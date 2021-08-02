import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";


function homeHero() {
  PixiPlugin.registerPIXI(PIXI);
  // Format title 
  const homeTitle = document.querySelector('.home-hero-headline');
  let homeTitlepadding = window.innerHeight/2 - homeTitle.clientHeight/2;
  let homeTitleSize = homeTitle.clientHeight;
  let homeTitleText = homeTitle.innerHTML + " ";
  //repear the words
  homeTitle.innerHTML = homeTitleText + homeTitleText;
  let homeTitleTextOrigWidth = homeTitle.clientWidth;
  homeTitle.style.paddingTop = homeTitlepadding - homeTitleSize/4 + 'px';
  homeTitle.style.paddingBottom = homeTitlepadding + homeTitleSize/4 + 'px';
  // text ticker animation
  gsap.to (homeTitle,  {
    x: -homeTitleTextOrigWidth/2,
    duration: 14,
    repeat: -1,
    ease: 'none'
  })
  
  // Setup PIXI scene for background animated shape:
  let Application = PIXI.Application,
      Sprite = PIXI.Sprite;
  
  let app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 1,
  })
  
  let loader = app.loader,
      resources = loader.resources;
  
  app.renderer = PIXI.autoDetectRenderer({antialias: true, backgroundColor: 0xFFFFFF });
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.view.style.transformOrigin = "50% 50%";
  app.renderer.view.style.transform = "scale(0)";
  app.renderer.view.className = "home-canvas";
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);

  // window.addEventListener('resize', () => {
  //   app.renderer.resize(window.innerWidth, window.innerHeight);
    
  // })
  
  loader
    .add("./wp-content/themes/artemis2021/img/artemis-bg.png")
    .load(setup);
  
  let sprite;
  let roundBox;
  
  function setup(){
      sprite = new Sprite(
        resources["./wp-content/themes/artemis2021/img/artemis-bg.png"].texture
      );
      sprite.anchor.set(0, 0);
      sprite.width = window.innerWidth;
      sprite.height = window.innerHeight;
      sprite.position.set(0, 0);
  
      let margins = 16;
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight /2;
      
      let container = new PIXI.Container();
      container.pivot.x = centerX;
      container.pivot.y = centerY;
      container.x = centerX + 7;
      container.y = centerY + 7;
      app.stage.addChild(container);
  
      container.addChild(sprite);
      roundBox = new PIXI.Graphics();    
      let roundBoxW = window.innerWidth - margins * 2;
      let roundBoxH = window.innerHeight - margins * 2;
      roundBox.lineStyle( { width: 30, join: PIXI.LINE_JOIN.ROUND } );
      roundBox.beginFill(0x000000);
      const origPolyPoints = [
        { x: margins, y: margins },
        { x: roundBoxW, y: margins },
        { x: roundBoxW, y: roundBoxH },
        { x: margins, y: roundBoxH }
      ];
      roundBox.drawPolygon(origPolyPoints);
      //POLYGON ARC
      // roundBox.arcTo( margins, margins, roundBoxW, margins, 50 );
      // roundBox.arcTo( roundBoxW , margins, roundBoxW, roundBoxH, 50 );
      // roundBox.arcTo( roundBoxW, roundBoxH, margins, roundBoxH, 50 );
      // roundBox.arcTo( margins, roundBoxH, margins, margins, 50 );
      // roundBox.arcTo( margins, margins, roundBoxW, margins, 50 );
      roundBox.endFill();
      roundBox.pivot.x = centerX;
      roundBox.pivot.y = centerY;
      roundBox.x = centerX;
      roundBox.y = centerY;
      sprite.mask = roundBox;
     
      container.addChild(roundBox);
  
      const newPolyPoints = origPolyPoints.map(obj => ({...obj}));
      let scrollTop = 0;
      document.body.addEventListener( 'scroll', () => {
        scrollTop = window.scrollY;
      })
      document.body.addEventListener( 'mousemove', (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
  
        //mouse in in upper left corner
        if ( mouseX <= centerX && mouseY <= centerY ) {
          gsap.to(newPolyPoints[2], {
            x: () => origPolyPoints[2].x - (roundBoxW - mouseX)/2.5,
            ease: "power2.out"
          })
          gsap.to(newPolyPoints[2], {
            y: () => origPolyPoints[2].y - (roundBoxH - mouseY)/2.5,
            ease: "power2.out"
          })
        } else {
          gsap.to( newPolyPoints[2], {
            x: origPolyPoints[2].x
          } )
          gsap.to( newPolyPoints[2], {
            y: origPolyPoints[2].y
          } )
        }
        //mouse in in upper right corner
        if ( mouseX > centerX && mouseY <= centerY ) {
          gsap.to(newPolyPoints[3], {
            x: () => origPolyPoints[3].x + mouseX/2.5,
            ease: "power2.out"
          })
          gsap.to(newPolyPoints[3], {
            y: () => origPolyPoints[3].y - (roundBoxH - mouseY)/2.5,
            ease: "power2.out"
          })
        } else {
          gsap.to( newPolyPoints[3], {
            x: origPolyPoints[3].x
          } )
          gsap.to( newPolyPoints[3], {
            y: origPolyPoints[3].y
          } )
        }
        //mouse in in lower right corner
        if ( mouseX > centerX && mouseY > centerY ) {
          gsap.to(newPolyPoints[0], {
            x: () => origPolyPoints[0].x +  mouseX/2.5,
            ease: "power2.out"
          })
          gsap.to(newPolyPoints[0], {
            y: () => origPolyPoints[0].y + mouseY/2.5,
            ease: "power2.out"
          })
        } else {
          gsap.to( newPolyPoints[0], {
            x: origPolyPoints[0].x
          } )
          gsap.to( newPolyPoints[0], {
            y: origPolyPoints[0].y
          } )
        }
        //mouse in in lower left corner
        if ( mouseX <= centerX && mouseY > centerY ) {
          gsap.to(newPolyPoints[1], {
            x: () => origPolyPoints[1].x  - (roundBoxW - mouseX)/2.5,
            ease: "power2.out"
          })
          gsap.to(newPolyPoints[1], {
            y: () => origPolyPoints[1].y + mouseY/2.5,
            ease: "power2.out"
          })
        } else {
          gsap.to( newPolyPoints[1], {
            x: origPolyPoints[1].x
          } )
          gsap.to( newPolyPoints[1], {
            y: origPolyPoints[1].y
          } )
        }
      })
  
      function drawAnimatePolygon(){
        roundBox.clear();
        roundBox.beginFill(0x000000);
        roundBox.lineStyle( { width: 30, join: PIXI.LINE_JOIN.ROUND } );
        roundBox.drawPolygon(newPolyPoints);
      }
      gsap.ticker.add(drawAnimatePolygon);
    }
  
  
  document.querySelector('.home-hero').appendChild(app.view);
}
export { homeHero };

