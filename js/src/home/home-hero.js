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

  // Get the video from the_content, hide it and load it into PIXI canvas
  let video = document.createElement("video");
  video.style.display = "none";
  video.crossOrigin = "anonymous";  
  video.preload = "auto";
  video.loop = true;
  video.autoplay = true;  
  video.muted = true;  
  video.playsInline = true;  
  video.src = "./wp-content/themes/artemis2021/assets/testvideo.mp4";
  
  // let sprite;
  let roundBox;
  
  loader
  .load(setup);
    // .add(video.src)
  
  
  function setup(){

    let margins = 16;
    let centerX = window.innerWidth * 0.5;
    let centerY = window.innerHeight * 0.45;
    
    let container = new PIXI.Container();
    container.pivot.x = centerX;
    container.pivot.y = centerY;
    container.x = centerX + 7;
    container.y = centerY + 7;
    app.stage.addChild(container);

    let videobg = new Sprite(
      PIXI.Texture.from(video)
    );
    videobg.width = window.innerWidth + margins * 2;
    videobg.height = window.innerHeight * .9 + margins * 2 ;
    videobg.anchor.set(0.5, 0.5);
    videobg.position.set(centerX, centerY);
    container.addChild(videobg);

    roundBox = new PIXI.Graphics();    
    let roundBoxW = window.innerWidth - margins * 2;
    let roundBoxH = window.innerHeight * .9 - margins;
    roundBox.lineStyle( { width: 20, join: PIXI.LINE_JOIN.ROUND } );
    roundBox.beginFill(0x000000);
    let origPolyPoints = [
      { x: margins, y: margins },
      { x: roundBoxW, y: margins },
      { x: roundBoxW, y: roundBoxH },
      { x: margins, y: roundBoxH }
    ];
    roundBox.drawPolygon(origPolyPoints);
    roundBox.endFill();
    roundBox.pivot.x = centerX;
    roundBox.pivot.y = centerY;
    roundBox.x = centerX;
    roundBox.y = centerY;

    videobg.mask = roundBox;
    
    container.addChild(roundBox);

    const newPolyPoints = origPolyPoints.map(obj => ({...obj}));
    let scrollTop = 0;

    // check which quarter the mouse is in
    function quadpos(x, y){
      if ( x <= centerX && y <= centerY ) {
        return "topleft";
      } else if ( x > centerX && y <= centerY ) {
        return "topright";
      } else if ( x > centerX && y > centerY ) {
        return "bottomright";
      } else {
        return "bottomleft";
      }
    }

    document.body.addEventListener( 'scroll', () => {
      scrollTop = window.scrollY;
    })
    document.body.addEventListener( 'mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      gsap.to(newPolyPoints[0], {
        x: () => {
          if ( quadpos(mouseX, mouseY) == "topright" ){
            return origPolyPoints[0].x + ( mouseX * 0.25 ) ;
          } else if ( quadpos(mouseX, mouseY) == "bottomright" ) {
            return origPolyPoints[0].x + ( mouseX * 0.5 );
          } else {
            return origPolyPoints[0].x
          }
        },
        y: () => {
          if ( quadpos(mouseX, mouseY) == "bottomright" ){
            return origPolyPoints[0].y + ( mouseY * 0.5 );
          } else if ( quadpos(mouseX, mouseY) == "bottomleft" ){
            return origPolyPoints[0].y + ( mouseY * 0.25 );
          } else {
            return origPolyPoints[0].y
          }
        }
      })
      gsap.to(newPolyPoints[1], {
        x: () => {
          if ( quadpos(mouseX, mouseY) == "topleft" ){
            return origPolyPoints[1].x - ( roundBoxW - mouseX ) * 0.25  ;
          } else if ( quadpos(mouseX, mouseY) == "bottomleft" ) {
            return origPolyPoints[1].x - ( roundBoxW - mouseX ) * 0.5 ;
          } else {
            return origPolyPoints[1].x
          }
        },
        y: () => {
          if ( quadpos(mouseX, mouseY) == "bottomright" ){
            return origPolyPoints[1].y + ( mouseY * 0.25 );
          } else if ( quadpos(mouseX, mouseY) == "bottomleft" ){
            return origPolyPoints[1].y + ( mouseY * 0.5 );
          } else {
            return origPolyPoints[1].y
          }
        }
      })
      gsap.to(newPolyPoints[2], {
        x: () => {
          if ( quadpos(mouseX, mouseY) == "topleft" ){
            return origPolyPoints[2].x - ( roundBoxW - mouseX ) * 0.5 ;
          } else if ( quadpos(mouseX, mouseY) == "bottomleft" ) {
            return origPolyPoints[2].x - ( roundBoxW - mouseX ) * 0.25 ;
          } else {
            return origPolyPoints[2].x
          }
        },
        y: () => {
          if ( quadpos(mouseX, mouseY) == "topright" ){
            return origPolyPoints[2].y - ( roundBoxH - mouseY ) * 0.25 ;
          } else if ( quadpos(mouseX, mouseY) == "topleft" ){
            return origPolyPoints[2].y - ( roundBoxH - mouseY ) * 0.5 ;
          } else {
            return origPolyPoints[2].y
          }
        }
      })
      gsap.to(newPolyPoints[3], {
        x: () => {
          if ( quadpos(mouseX, mouseY) == "bottomright" ){
            return origPolyPoints[3].x + ( mouseX * 0.25 ) ;
          } else if ( quadpos(mouseX, mouseY) == "topright" ) {
            return origPolyPoints[3].x + ( mouseX * 0.5 );
          } else {
            return origPolyPoints[3].x
          }
        },
        y: () => {
          if ( quadpos(mouseX, mouseY) == "topright" ){
            return origPolyPoints[3].y - ( roundBoxH -  mouseY ) * 0.5 ;
          } else if ( quadpos(mouseX, mouseY) == "topleft" ){
            return origPolyPoints[3].y - ( roundBoxH -  mouseY ) * 0.25 ;
          } else {
            return origPolyPoints[3].y
          }
        }
      })
    })

    function drawAnimatePolygon(){
      roundBox.clear();
      roundBox.beginFill(0x000000);
      roundBox.lineStyle( { width: 20, join: PIXI.LINE_JOIN.ROUND } );
      roundBox.drawPolygon(newPolyPoints);
      roundBox.endFill();
    }
    gsap.ticker.add(drawAnimatePolygon);

    // RESIZE
    window.addEventListener('resize', () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
      if ( window.matchMedia("(min-width: 600px)").matches ) {
        centerX = window.innerWidth * 0.5;
        centerY = window.innerHeight * 0.45;
        container.pivot.x = centerX;
        container.pivot.y = centerY;
        container.x = centerX + 7;
        container.y = centerY + 7;
        videobg.width = window.innerWidth + margins * 2;
        videobg.height = window.innerHeight * .9 + margins * 2 ;
        videobg.anchor.set(0.5, 0.5);
        videobg.position.set(centerX, centerY);
        roundBoxW = window.innerWidth - margins * 2;
        roundBoxH = window.innerHeight * .9 - margins;
        origPolyPoints = [
          { x: margins, y: margins },
          { x: roundBoxW, y: margins },
          { x: roundBoxW, y: roundBoxH },
          { x: margins, y: roundBoxH }
        ];
        
        newPolyPoints.forEach( (elem, index) => {
          gsap.to( elem, {
            x: () => origPolyPoints[index].x,
            y: () => origPolyPoints[index].y,
            duration: .5,
            overwrite: true
          });
        })
      }
    });
  }

  document.querySelector('.home-hero').appendChild(app.view);
  
}
export { homeHero };

