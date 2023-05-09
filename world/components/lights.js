import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    1,
  );

  const mainLight = new DirectionalLight('white', 1);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
// import { DirectionalLight } from "three";

// function createLights() {
//   const lights = new DirectionalLight("white", 2);
//   lights.position.set(10, 10, 10);

//   return lights
//  }

// export { createLights };