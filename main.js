import './style.css'
import { World } from './world/World';


async function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);

  // console.log(world.camera);
  // console.log(world.renderer);
  // console.log(world.scene);
  
  // complete async tasks
  await world.init();

  world.start()
}
main().catch(err => {
  console.error(err);
});