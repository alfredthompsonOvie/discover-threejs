// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupModel } from './setupModel';

async function loadBirds() {
  const loader = new GLTFLoader();
// console.log(loader);

  // loader.load('../../../../world/assets/models/Parrot.glb', (gltf) => {
  //   console.log(gltf);
  // },
  // // called while loading is progressing
	// function ( xhr ) {

	// 	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	// },
	// // called when loading has errors
	// function ( error ) {

	// 	console.log( 'An error happened', error );

	// });
  
  // const horseData = await loader.loadAsync('src/assets/models/Horse.glb');
  // const chairData = await loader.loadAsync('src/assets/models/SheenChair.glb');
  // const soldierData = await loader.loadAsync("src/assets/models/Soldier.glb");

  // console.log('horse!', horseData);
  // console.log('Sit!', chairData);
  // console.log('Huraah!', soldierData);
  
  const [parrotData, storkData, flamingoData] = await Promise.all([
    loader.loadAsync('src/assets/models/Parrot.glb'),
    loader.loadAsync('src/assets/models/Stork.glb'),
    loader.loadAsync('src/assets/models/Flamingo.glb')
  ]);
  const parrot = setupModel(parrotData);
  parrot.position.set(0, -60, 2.5);

  const stork = setupModel(storkData);
  stork.position.set(100, 0, -10);
  
  const flamingo = setupModel(flamingoData)
  flamingo.position.set(-80, 2.5, -70);

  return {
    parrot,
    stork,
    flamingo
  }
}

export { loadBirds };