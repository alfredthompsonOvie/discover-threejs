## 1.1
## 1.2

## 1.3 Introducing the World App

### Easy
- Change the color of the scene background. You can enter any standard color name such as red, green, purple, and so on, as well as some unusual names like aquamarine or coral. How many of the 140 CSS color names can you guess?

### Medium
- Change the cube to some other shapes like a rectangle, sphere, triangle, or torus. (Hint: search the docs for “BufferGeometry”.)

- Add a second cube and move it around using mesh.position.set(x, y, z) (you’ll either need to figure out some way of returning two cubes from the createCube function, or add a second module like cube2.js).

### Hard
This is a challenge for people who are already familiar with building websites. If you are new to web development, it’s OK to skip this one.

- Add a button to the HTML page, and delay rendering the scene until the button has been clicked. Do this without making any changes to the World app. Instead, create the button in index.html and set it up in main.js.

## 1.4 Physically Based Rendering and Lighting

### easy
-Try changing the color of the material. All the normal colors like red, green, or blue will work, along with many more exotic colors such as peachpuff, orchid, or papayawhip. Here’s a complete list of the CSS color names.

-Try changing the color of the light. Again, you can use any of the CSS color names. Watch how setting various light and material colors give the cube its final color.

-Try moving the light around (using light.position) and observe the result.

### medium
-Test out the other direct light types: PointLight, SpotLight, and RectAreaLight.

-MeshBasicMaterial and MeshStandardMaterial are not the only materials available. There are a total of eighteen materials in the three.js core, and any material with the word “mesh” in its name will work with our cube mesh. Test some of these out (hint: search the docs for “material”).

note-You need to import the other light and material classes 
before you can use them!

### hard

Recreate the scene from Lighting and Depth, minus the animation (hint: use two meshes and two materials).

## 1.5
## 1.6 Making Our Scenes Responsive (and also Dealing with Jaggies)
Easy#
Enable and disable AA and compare the difference.

Rotate the cube until the edges are vertical and horizontal. Now, can you see any difference with AA disabled?

Comment out the code for resizing in World.js and compare the difference when you resize the window.

Comment out the custom onResize hook in World.js and see what happens when you resize the window.

Medium#
Disable antialiasing. Now, zoom in on the cube to get a better view of the aliasing artifact. Don’t use your browser’s zoom function. Instead, try these methods:

Enlarge the cube using cube.scale.
Bring the cube closer to you using cube.position.z.
Bring the camera closer to the cube using camera.position.z

Still with AA disabled, use camera.position.x (horizontal movement) and camera.position.y (vertical movement) to zoom in on the right-hand corner of the cube.

Repeat 2., but this time, use cube.position.x and cube.position.y.

Note how aliasing artifacts (jaggies) change as you move the cube around or zoom in and out.

Hard#
Instead of using the container to size the scene, try entering some numbers manually. For example, create a scene that is 64 pixels wide and high, or 256 pixels wide and high. You might want to change the scene’s background color here to see this more easily.

Play with the devicePixelRatio. Try setting a higher value for DPR, like 4 or 8 (don’t go too high though!). What happens if you set a value below 1, like 0.5? What happens if you set a high value for DPR and disable AA? How do the edges of the cube look?

devicePixelRatio values other than 1 render the scene at a higher or low resolution and then scale it to fit in the canvas. A DPR of 2 will render the scene at double resolution and scale down, while a DPR of 0.5 will render at half resolution and scale up. As you can imagine, high DPR values are very expensive to render!

## 1.7 The Animation Loop

## Easy 
- Play with the animation speed. Make the cube perform one rotation every hundred seconds, then one rotation every single second.

- You can animate anything, not just rotations. Try animating some other properties of the mesh.

## Medium
- Add a .tick method to the camera, then make it zoom out slowly. Try zooming out at around one meter per second.

- Add a .tick method to the light, and animate any of the light.position.x, .y, or .z parameters.

- Add a click event listener (or, if you want to get fancy, a button) that starts and stops the animation loop. Do this in main.js using World.start and World.stop.

Don’t forget to add the camera and light to the updatables list! To zoom out, increase camera.position.z.

## Hard
Rotation is an easy property to animate since rotations go round in circles. When we reach 360 on any axis, we come back to where we started. This means we can infinitely increase the rotation and the result is a nice looking animation. If we do the same with position, or scaling, the object being animated will quickly vanish from our screens. However, we can create cyclical animations of other properties using the modulo operator %.

- Animate the .position of the cube, camera, or light, using the modulo operator. Make the camera zoom out by ten meters repeatedly. Make the cube animate from the left to the right of the screen over and over again.

- Make the camera zoom out by ten meters, then reverse direction to zoom in again. Animate the cube from left to right across the screen, then, when it reaches the right edge of the screen (roughly), have it reverse direction and move back to the starting point.

## 1.8
## 1.9
## 1.10
## 1.11
## 1.12
## 1.13
## 1.14