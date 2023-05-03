import { DirectionalLight } from "three";

function createLights() {
  const lights = new DirectionalLight("white", 8);
  lights.position.set(10, 10, 10);

  return lights
 }

export { createLights };