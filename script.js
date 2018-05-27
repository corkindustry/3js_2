var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
var renderer = new THREE.WebGLRenderer( { alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

var light = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

var geometry = new THREE.IcosahedronGeometry(20, 0);
var material = new THREE.MeshStandardMaterial(
  {
    color: 0x45b1c2,
    roughness: 0.7,
  }
);

var cube = new THREE.Mesh(geometry, material);

var cube = [];
for (var i = 0; i < 500; i++) {
  cube[i] = new THREE.Mesh(geometry, material);
  var x = Math.floor((Math.random() * window.innerWidth) - (window.innerWidth / 2));
  var y = Math.floor((Math.random() * window.innerHeight) - (window.innerHeight / 2));
  var z = -(Math.floor(Math.random() * 6001) + 1);
  cube[i].position.set(x, y, z);
  scene.add(cube[i]);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  for (var i = 0; i < 500; i++) {
    var x = Math.floor((Math.random() * 100) + 1) / 10000;
    // console.log(x);
    var y = Math.floor((Math.random() * 100) + 1) / 12000;
    // console.log(y);
    cube[i].rotation.x += x;
    cube[i].rotation.y += y;
    cube[i].position.z -= 1;
    if (cube[i].position.z < -3000) {
      cube[i].position.z = (Math.floor(Math.random() * 2001) + 1);
      // console.log("reset " + cube[i]);
    }
  }
  renderer.render(scene, camera);
};

animate();
