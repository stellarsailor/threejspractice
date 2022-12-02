// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 1000,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const cubeGeometry = new THREE.BoxGeometry(2, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000',
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);
camera.position.z = 10;
camera.position.x = 3;
camera.position.y = 1;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
