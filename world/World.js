import { createCamera } from './components/camera';
import { createCube } from './components/cube';
import { createScene } from './components/scene';
import { createLights } from './components/lights';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

let camera, renderer, scene, loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    loop.updatables.push(cube);

    scene.add(cube, light);

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
}

export { World }

