import { BoxGeometry,MathUtils, Mesh, MeshStandardMaterial } from "three";

function createCube() {
	const geometry = new BoxGeometry(2, 2, 2);
	const material = new MeshStandardMaterial({color: 'purple'});
	const cube = new Mesh(geometry, material);
	cube.rotation.set(-0.5, -0.1, 0.8);
	// cube.scale.set(2,-2,2)

	const radiansPerSecond = MathUtils.degToRad(30);

	cube.tick = (delta) => {
		// cube.rotation.z += 0.01;
		// cube.rotation.x += 0.01;
		// cube.rotation.y += 0.01;
		cube.rotation.z += radiansPerSecond * delta;
		cube.rotation.x += radiansPerSecond * delta;
		cube.rotation.y += radiansPerSecond * delta;
	};
  
	return cube;
}

export { createCube }
