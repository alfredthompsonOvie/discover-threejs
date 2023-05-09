import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    5,
  );

  const mainLight = new DirectionalLight('white', 4);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
// import { DirectionalLight } from "three";

// function createLights() {
//   const lights = new DirectionalLight("white", 8);
//   lights.position.set(10, 10, 10);

//   return lights
//  }

// export { createLights };