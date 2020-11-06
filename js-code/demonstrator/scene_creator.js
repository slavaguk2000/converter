const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha: true});
const resizeCanvas = function(){
    var size = Math.min(window.innerHeight, window.innerWidth/2);
    renderer.setSize(size, size - 20);
    document.getElementById('show-area').appendChild( renderer.domElement );    
}
resizeCanvas();
window.addEventListener('resize', function(){
    requestAnimationFrame(resizeCanvas)
})
correctScene = function(){
    renderer.domElement.style.margin = "0 auto";
    camera.position.z = 100;
}();

var lightRotationGroup;
addLight = function(){
    const mainlight = new THREE.AmbientLight( 0x404040 ); // soft white light
    const dirLight = new THREE.DirectionalLight( 0xbbbbbb, 0.5 );
    const dinamicPointLight = new THREE.PointLight( 0x444444, 1);
    const staticPointLight = new THREE.PointLight( 0xaaaaaa, 1);
    dinamicPointLight.position.set( -40, -10, 40 );
    staticPointLight.position.set( -150, -150, 60 );
    lightRotationGroup = new THREE.Object3D();
    lightRotationGroup.add(dinamicPointLight);
    scene.add( mainlight );
    scene.add( dirLight );
    scene.add( staticPointLight )
    scene.add( lightRotationGroup );
}();

