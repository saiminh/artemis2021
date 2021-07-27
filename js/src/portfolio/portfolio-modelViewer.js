import { ModelViewerElement } from '@google/model-viewer';

function portfolioModelViewers(data){
  
  // data.container.querySelector('model-viewer').addEventListener('load', ()=> { console.log('loaded') });

  let viewerNL = data.container.querySelectorAll('model-viewer');
  viewerNL.forEach( (viewer, index) => {
    // viewer.addEventListener('load', ()=> { console.log('viewer no.' + index +' loaded') });
    viewer.addEventListener('mousemove', (e) => {
      let mouseX = 45 + e.offsetX / viewer.offsetWidth * 90;
      let mouseY = 45 + e.offsetY / viewer.offsetHeight * 90; 
      // let zoom = 1 + (e.offsetX / viewer.offsetWidth).toFixed(2) * 12;
      viewer.setAttribute('camera-orbit', mouseX + 'deg ' + mouseY + 'deg '+ '2m');
    })
  })

}

export { portfolioModelViewers };