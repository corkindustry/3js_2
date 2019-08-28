import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(light);

const light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

const geometry = new THREE.IcosahedronGeometry(20, 0);
const material = new THREE.MeshStandardMaterial(
  {
    color: 0x45b1c2,
    roughness: 0.7,
  }
);

const cube: any[] = [];

for (let i = 0; i < 500; i++) {
  cube[i] = new THREE.Mesh(geometry, material);
  let x = Math.floor((Math.random() * window.innerWidth) - (window.innerWidth / 2));
  let y = Math.floor((Math.random() * window.innerHeight) - (window.innerHeight / 2));
  let z = -(Math.floor(Math.random() * 6001) + 1);
  cube[i].position.set(x, y, z);
  scene.add(cube[i]);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < 500; i++) {
    let x = Math.floor((Math.random() * 100) + 1) / 10000;
    let y = Math.floor((Math.random() * 100) + 1) / 12000;
    cube[i].rotation.x += x;
    cube[i].rotation.y += y;
    cube[i].position.z -= 1;
    if (cube[i].position.z < -3000) {
      cube[i].position.z = (Math.floor(Math.random() * 2001) + 1);
    }
  }
  renderer.render(scene, camera);
};

animate();