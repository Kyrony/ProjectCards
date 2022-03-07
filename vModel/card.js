 //===================================================== canvas
 var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
 renderer.setSize(window.innerWidth, window.innerHeight);
 container = document.getElementById('phone');
 container.appendChild(renderer.domElement);

 //===================================================== scene
 var scene = new THREE.Scene();

 //===================================================== camera
 var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.z = 4;
 camera.position.y = 0;

 //===================================================== lights
 var light = new THREE.DirectionalLight(0xD7D7E5, 1);
 light.position.set(1, 0, 0).normalize();
 scene.add(light);
 var light = new THREE.DirectionalLight(0xD7D7E5, 1);
 light.position.set(-1, -1, 0).normalize();
 scene.add(light);

 //===================================================== resize
 window.addEventListener("resize", function() {
   let width = window.innerWidth;
   let height = window.innerHeight;
   renderer.setSize(width, height);
   camera.aspect = width / height;
   camera.updateProjectionMatrix();
 });


 //===================================================== model
 var loader = new THREE.GLTFLoader();
 var mixer;
 var modelA;
 var modelB;
 var modelC;
 var modelD;
 loader.load(
   './assets/test6.glb', function(gltf) {

      gltf.scene.traverse( function( node ) {
         if ( node instanceof THREE.Mesh ) { 
           node.castShadow = true; 
           node.material.side = THREE.DoubleSide;
         }
       });
      
     modelA = gltf.scene;
     modelA.scale.set(1,1,1);
     modelA.position.set(4.2,0,0);
     scene.add(modelA);

 });

 loader.load(
  './assets/test5.glb', function(gltf) {

     gltf.scene.traverse( function( node ) {
        if ( node instanceof THREE.Mesh ) { 
          node.castShadow = true; 
          node.material.side = THREE.DoubleSide;
        }
      });
     
    modelB = gltf.scene;
    modelB.scale.set(1,1,1);
    modelB.position.set(1.4,0,0);
    scene.add(modelB);

});

loader.load(
  './assets/test7.glb', function(gltf) {

     gltf.scene.traverse( function( node ) {
        if ( node instanceof THREE.Mesh ) { 
          node.castShadow = true; 
          node.material.side = THREE.DoubleSide;
        }
      });
     
    modelC = gltf.scene;
    modelC.scale.set(1,1,1);
    modelC.position.set(-1.4,0,0);
    scene.add(modelC);

});

loader.load(
  './assets/test4.glb', function(gltf) {

     gltf.scene.traverse( function( node ) {
        if ( node instanceof THREE.Mesh ) { 
          node.castShadow = true; 
          node.material.side = THREE.DoubleSide;
        }
      });
     
    modelD = gltf.scene;
    modelD.scale.set(1,1,1);
    modelD.position.set(-4.2,0,0);
    scene.add(modelD);

});


//===================================================== animate
var clock = new THREE.Clock();
function render() {
 requestAnimationFrame(render);
 var delta = clock.getDelta();
 if (mixer != null) mixer.update(delta);
 if (modelA) modelA.rotation.y += 0.003;
 if (modelB) modelB.rotation.y += 0.0035;
 if (modelC) modelC.rotation.y += 0.0025;
 if (modelD) modelD.rotation.y += 0.0031;


 renderer.render(scene, camera);
}

render();