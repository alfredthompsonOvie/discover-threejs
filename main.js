import './style.css'
import { World } from './world/World';


function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);

  // console.log(world.camera);
  // console.log(world.renderer);
  // console.log(world.scene);
  
  world.start()
}
main();