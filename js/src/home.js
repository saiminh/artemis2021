function home(data){
  import('./home/home-intro.js').then( homeIntro => {
    homeIntro.homeIntro();
  })
  import('./home/home-hero.js').then( homeHero => {
    homeHero.homeHero();
  })
  import('./home/home-buttons.js').then( homeButtons => {
    homeButtons.homeButtons();
  })
}
export { home };