(self.webpackChunkartemis2021=self.webpackChunkartemis2021||[]).push([[160],{160:(e,t,i)=>{"use strict";i.r(t),i.d(t,{homeHero:()=>d});var n=i(216),o=i(358),r=i(607);function d(){r.w.registerPIXI(n);const e=document.querySelector(".home-hero-headline");let t=window.innerHeight/2-e.clientHeight/2,i=e.clientHeight,d=e.innerHTML+" ";e.innerHTML=d+d;let l=e.clientWidth;e.style.paddingTop=t-i/4+"px",e.style.paddingBottom=t+i/4+"px",o.p8.to(e,{x:-l/2,duration:14,repeat:-1,ease:"none"});let w=n.Application,h=n.Sprite,a=new w({width:window.innerWidth,height:window.innerHeight,backgroundAlpha:1}),s=a.loader;s.resources,a.renderer=n.autoDetectRenderer({antialias:!0,backgroundColor:16777215}),a.renderer.view.style.position="absolute",a.renderer.view.style.display="block",a.renderer.view.style.transformOrigin="50% 50%",a.renderer.view.style.transform="scale(0)",a.renderer.view.className="home-canvas",a.renderer.autoResize=!0,a.renderer.resize(window.innerWidth,window.innerHeight);let p,y=document.createElement("video");y.style.display="none",y.crossOrigin="anonymous",y.preload="auto",y.loop=!0,y.autoplay=!0,y.muted=!0,y.playsInline=!0,y.src="./wp-content/themes/artemis2021/assets/testvideo.mp4",s.load((function(){let e=16,t=.5*window.innerWidth,i=.45*window.innerHeight,r=new n.Container;r.pivot.x=t,r.pivot.y=i,r.x=t+7,r.y=i+7,a.stage.addChild(r);let d=new h(n.Texture.from(y));d.width=window.innerWidth+32,d.height=.9*window.innerHeight+32,d.anchor.set(.5,.5),d.position.set(t,i),r.addChild(d),p=new n.Graphics;let l=window.innerWidth-32,w=.9*window.innerHeight-e;p.lineStyle({width:20,join:n.LINE_JOIN.ROUND}),p.beginFill(0);let s=[{x:e,y:e},{x:l,y:e},{x:l,y:w},{x:e,y:w}];p.drawPolygon(s),p.endFill(),p.pivot.x=t,p.pivot.y=i,p.x=t,p.y=i,d.mask=p,r.addChild(p);const c=s.map((e=>({...e})));let m=0;function g(e,n){return e<=t&&n<=i?"topleft":e>t&&n<=i?"topright":e>t&&n>i?"bottomright":"bottomleft"}document.body.addEventListener("scroll",(()=>{m=window.scrollY})),document.body.addEventListener("mousemove",(e=>{let t=e.clientX,i=e.clientY;o.p8.to(c[0],{x:()=>"topright"==g(t,i)?s[0].x+.25*t:"bottomright"==g(t,i)?s[0].x+.5*t:s[0].x,y:()=>"bottomright"==g(t,i)?s[0].y+.5*i:"bottomleft"==g(t,i)?s[0].y+.25*i:s[0].y}),o.p8.to(c[1],{x:()=>"topleft"==g(t,i)?s[1].x-.25*(l-t):"bottomleft"==g(t,i)?s[1].x-.5*(l-t):s[1].x,y:()=>"bottomright"==g(t,i)?s[1].y+.25*i:"bottomleft"==g(t,i)?s[1].y+.5*i:s[1].y}),o.p8.to(c[2],{x:()=>"topleft"==g(t,i)?s[2].x-.5*(l-t):"bottomleft"==g(t,i)?s[2].x-.25*(l-t):s[2].x,y:()=>"topright"==g(t,i)?s[2].y-.25*(w-i):"topleft"==g(t,i)?s[2].y-.5*(w-i):s[2].y}),o.p8.to(c[3],{x:()=>"bottomright"==g(t,i)?s[3].x+.25*t:"topright"==g(t,i)?s[3].x+.5*t:s[3].x,y:()=>"topright"==g(t,i)?s[3].y-.5*(w-i):"topleft"==g(t,i)?s[3].y-.25*(w-i):s[3].y})})),o.p8.ticker.add((function(){p.clear(),p.beginFill(0),p.lineStyle({width:20,join:n.LINE_JOIN.ROUND}),p.drawPolygon(c),p.endFill()})),window.addEventListener("resize",(()=>{a.renderer.resize(window.innerWidth,window.innerHeight),window.matchMedia("(min-width: 600px)").matches&&(t=.5*window.innerWidth,i=.45*window.innerHeight,r.pivot.x=t,r.pivot.y=i,r.x=t+7,r.y=i+7,d.width=window.innerWidth+32,d.height=.9*window.innerHeight+32,d.anchor.set(.5,.5),d.position.set(t,i),l=window.innerWidth-32,w=.9*window.innerHeight-e,s=[{x:e,y:e},{x:l,y:e},{x:l,y:w},{x:e,y:w}],c.forEach(((e,t)=>{o.p8.to(e,{x:()=>s[t].x,y:()=>s[t].y,duration:.5,overwrite:!0})})))}))})),document.querySelector(".home-hero").appendChild(a.view)}}}]);