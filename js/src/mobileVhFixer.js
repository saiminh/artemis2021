function mobileVhFixer() {
  //Deal with vh scaling issue for mobile
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  //resize only on desktop
  window.addEventListener('resize', () => {
    if ( matchMedia("orientation: portrait").matches ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  })
}
export { mobileVhFixer }