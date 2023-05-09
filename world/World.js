import { createCamera } from './components/camera';
import { createCube } from './components/cube';
import { createScene } from './components/scene';
import { createLights } from './components/lights';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

import { createControls } from './systems/controls.js';
import { loadBirds } from './components/birds/birds';

let camera, renderer, scene, loop, controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    
    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const cube = createCube();
    // const light = createLights();

    loop.updatables.push(cube);
    scene.add(cube);
    // scene.add(cube, light);
    

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render()
    // }
  }
  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
  // async init() {
  //   const { parrot, stork, flamingo } = await loadBirds();

  //   controls.target.copy(parrot.position);
  //   loop.updatables.push(parrot, stork, flamingo);

  //   scene.add(parrot, stork, flamingo);
  // }
}

export { World }

