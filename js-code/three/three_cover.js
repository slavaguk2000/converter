var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha: true});
resize_convas = function(){
    var size = Math.min(window.innerHeight, window.innerWidth/2);
    renderer.setSize(size, size - 20);
    document.getElementById('show-area').appendChild( renderer.domElement );    
}
resize_convas();
window.addEventListener('resize', function(){
    requestAnimationFrame(resize_convas)
})
renderer.domElement.style.margin = "0 auto";
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
const dirLight = new THREE.DirectionalLight( 0xbbbbbb, 0.5 );
const pointLight = new THREE.PointLight( 0xaaaaaa, 1);
pointLight.position.set( -150, -150, 60 );
scene.add( light );
scene.add( dirLight );
scene.add( pointLight );

var logo = get5lyLogo();
var logoGroup = new THREE.Object3D();
logoGroup.add(logo.mainRotationGroup);
var logo_on_scene = false;


import { GLTFLoader } from './GLTFLoader.js';
var loader = new GLTFLoader();

loader.load( 'test_models/5.glb', function ( gltf ) {
    gltf.scene.traverse(function(child){
        if ( child.type == "Mesh"){
            child.position.x -= 29;
            child.position.y -= 33;
            child.position.z -= 5;
            console.log(child.material);
            child.material.color.set( 0xf1ad17 );
            ////
            logoGroup.add(child);
            // logo.mainRotationGroup.add(child);
            scene.add(logoGroup);
            logo_on_scene = true;
            // group.add(logoGroup)
        }
    })
}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 100;

var logoAnimate = function () {
    requestAnimationFrame( animate );
    logo.mainRotationGroup.rotation.y += 0.01;
    logo.hourPlanetGroup.rotation.z -= 0.02;
    logo.antiHourPlanetGroup.rotation.z += 0.02;
    renderer.render( scene, camera );
};
var gltfAnimate = function () {
    requestAnimationFrame( animate );
    if (!gltf_obj) return;
    // gltf_obj.rotation.x += 0.000001;
    gltf_obj.rotation.y += 0.01;
    // gltf_obj.rotation.z += 0.0001;
    renderer.render( scene, camera );
};
var animate = logoAnimate;
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
        if (logo_on_scene) {
            animate = gltfAnimate;
            scene.remove(logoGroup)
        }
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