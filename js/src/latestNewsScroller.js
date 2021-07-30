import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function latestNewsScroller(data){
  let scroller = data.container.querySelector('.latest-news-scroller'), 
      nScrollItems = scroller.querySelectorAll('.latest-news-item').length, 
      oneScrollW = scroller.querySelector('.latest-news-item').offsetWidth + 10, // + 10 is for the gap
      nextBtn = data.container.querySelector('.latest-news-scroller-nav-scrollNext'), 
      prevBtn = data.container.querySelector('.latest-news-scroller-nav-scrollPrev'), 
      maxScrollW = scroller.scrollWidth - scroller.offsetWidth, 
      maxFullItems = Math.floor(scroller.offsetWidth / oneScrollW), 
      lastX = ( nScrollItems - maxFullItems - 1 ) * oneScrollW;

  nextBtn.addEventListener('click', () => {
    if ( scroller.scrollLeft >= maxScrollW - oneScrollW ){
      gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out' });
    } else {
      gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: "+="+ oneScrollW }, ease: 'power3.out' });
    }
    
  });
  prevBtn.addEventListener('click', () => {
    if ( scroller.scrollLeft <= oneScrollW ){
      gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: 0 }, ease: 'power3.out' });
    } else if ( scroller.scrollLeft = maxScrollW ) {
      gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: lastX  }, ease: 'power3.out' });
    } else {
      gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: "-=" + oneScrollW }, ease: 'power3.out' });
    }
  })
}
export { latestNewsScroller };