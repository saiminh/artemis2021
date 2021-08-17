// import { homeHero } from './home/home-hero.js';
// import { homeButtons } from './home/home-buttons.js';
// import { homeIntro } from './home/home-intro.js';
// import { homeScroll } from './home/home-scroll.js';
function home(){
  import(/* webpackChunkName: "homeIntro" */ './home/home-intro.js').then( module => {
    const homeIntro = module.default;
    homeIntro();
  } );
  import(/* webpackChunkName: "homeHero" */ './home/home-hero.js').then( module => {
    const homeHero = module.default;
    homeHero();
  } );
  import(/* webpackChunkName: "homeButtons" */ './home/home-buttons.js').then( module => {
    const homeButtons = module.default;
    homeButtons();
  } );
  import(/* webpackChunkName: "homeScroll" */ './home/home-scroll.js').then( module => {
    const homeScroll = module.default;
    homeScroll();
  } );
}

export { home };