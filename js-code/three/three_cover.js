var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('title').appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Object3D()
cube2.add(cube)
console.log(cube.geometry)
console.log(cube.material)
// scene.add( cube2 ); 
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

import { GLTFLoader } from './GLTFLoader.js';
var loader = new GLTFLoader();

loader.load( 'test_models/cube.glb', function ( gltf ) {
//      scene.add( gltf.scene );
    gltf_obj = gltf.scene
}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 50;

var animate = function () {
    requestAnimationFrame( animate );

    if (!gltf_obj) return
    gltf_obj.rotation.x += 0.000001;
    gltf_obj.rotation.y += 0.01;
    gltf_obj.rotation.z += 0.0001;

    renderer.render( scene, camera );
};

animate();

addElement = function(blob){
    ///need uint8array to array buffer
    let arr = new Uint8Array(blob)
    loader.parse( arr.buffer, null, function ( gltf ) {
        gltf_obj = gltf.scene
        var modelBoundingBox = new THREE.Box3().setFromObject(gltf_obj);
        var camera_position_z = Math.pow(Math.min(modelBoundingBox.max.x - modelBoundingBox.min.x,
            modelBoundingBox.max.y - modelBoundingBox.min.y,
            modelBoundingBox.max.z - modelBoundingBox.min.z), 0.5);
        camera.position.z = camera_position_z  * 40
        console.log(camera_position_z)
        scene.add( gltf_obj );

    }, function(err){
        console.log(err)
    } );
}

deleteLastElement = function(){
    if (gltf_obj){
        scene.remove(gltf_obj)
    }
}