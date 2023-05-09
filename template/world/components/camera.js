import { PerspectiveCamera } from 'three';

function createCamera() {
  const fov = 35;
  const aspect = 1;
  const near = 0.1;
  // const far = 100
  const far = 1000
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  // const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  // camera.position.set(0, 0, 500);
  camera.position.set(-1.5, 1.5, 500);

  return camera;
}

export { createCamera }