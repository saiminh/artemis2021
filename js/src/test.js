import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function test(data){

  function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true});

    const sceneElements = [];
    function addScene(elem, fn) {
      sceneElements.push({elem, fn});
    }

    function makeScene() {
      const scene = new THREE.Scene();

      const fov = 45;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      // const controls = new OrbitControls( camera, renderer.domElement );
      // controls.update();
      camera.position.set(0, 1, 2);
      camera.lookAt(0, 0, 0);

      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
      }

      return {scene, camera};
    }

    // First element
    {
      const elem = document.querySelector('#box');
      const {scene, camera} = makeScene();
      const loader = new THREE.TextureLoader();
      const texture = loader.load(
        '../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg',
        () => {
          const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
          rt.fromEquirectangularTexture(renderer, texture);
          scene.background = rt.texture;
        });
      const cubeTexture = new THREE.TextureLoader().load("../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg");
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 'red',
        envMap: cubeTexture,
        emissive: '#FFFFFF'
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      addScene(elem, (time, rect) => {
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        mesh.rotation.y = time * .1;
        renderer.render(scene, camera);
      });
      // const controls = new OrbitControls( camera, renderer.domElement );
      // controls.update();
      const mouse = new THREE.Vector2();
      const target = new THREE.Vector2();
      let center = new THREE.Vector3();
      const windowHalf = new THREE.Vector2( elem.offsetWidth / 2, elem.offsetHeight / 2 );
      camera.up = new THREE.Vector3(0, 0, 1);
      camera.position.x = 0;
      elem.addEventListener( 'mousemove', (e) => {
        // mouse.x = ( e.offsetX - windowHalf.x );
        // mouse.y = ( e.offsetY - windowHalf.y );
        // center = [ mouse.x, mouse.y, 1 ];
        // target.x = ( 1 - mouse.x ) * 0.002;
        // target.y = ( 1 - mouse.y ) * 0.002;
        // camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
        // camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );
        // camera.position.add(center);
        // camera.lookAt(center)
      } )
    }
    //Second Element
    {
      const elem = document.querySelector('#pyramid');
      const {scene, camera} = makeScene();
      const radius = .8;
      const widthSegments = 6;
      const light = new THREE.AmbientLight( 0x404040 ); // soft white light
      const heightSegments = 4;
      const loader = new THREE.TextureLoader();
      const texture = loader.load(
        '../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg',
        () => {
          const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
          rt.fromEquirectangularTexture(renderer, texture);
          scene.background = rt.texture;
        });
      const sphereTexture = new THREE.TextureLoader().load("../wp-content/themes/artemis2021/assets/SIM_GRAD.jpg");
      const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
      const material = new THREE.MeshPhongMaterial({
        color: 'grey',
        envMap: sphereTexture,
        flatShading: true,
        emissive: "#FFFFFF",
        emissiveIntensity: 1,
        reflectivity: 1
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      scene.add( light );
      addScene(elem, (time, rect) => {
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        mesh.rotation.y = time * .1;
        renderer.render(scene, camera);
      });
    }

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    const clearColor = new THREE.Color('#000');
    function render(time) {
      time *= 0.001;
      resizeRendererToDisplaySize(renderer);

      renderer.setScissorTest(false);
      renderer.setClearColor(clearColor, 0);
      renderer.clear(true, true);
      renderer.setScissorTest(true);

      const transform = `translateY(${window.scrollY}px)`;
      renderer.domElement.style.transform = transform;

      for (const {elem, fn} of sceneElements) {
        // get the viewport relative position of this element
        const rect = elem.getBoundingClientRect();
        const {left, right, top, bottom, width, height} = rect;

        const isOffscreen =
            bottom < 0 ||
            top > renderer.domElement.clientHeight ||
            right < 0 ||
            left > renderer.domElement.clientWidth;

        if (!isOffscreen) {
          const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
          renderer.setScissor(left, positiveYUpBottom, width, height);
          renderer.setViewport(left, positiveYUpBottom, width, height);

          fn(time, rect);
        }
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  main();




}
export { test }