// import { portfolioModelViewers } from './portfolio/portfolio-modelViewer.js';
// import { portfolioLoader } from './portfolio/portfolio-loader.js';
function portfolio(data){
  import('./portfolio/portfolio-loader.js').then( portfolioLoader => {
    portfolioLoader.portfolioLoader();
  })
  import('./portfolio/portfolio-modelViewer.js').then( portfolioModelViewers => {
    portfolioModelViewers.portfolioModelViewers(data);
  })
}
export { portfolio };