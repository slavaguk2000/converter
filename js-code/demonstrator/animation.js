const scale_border1 = 5.3;
const scale_border2 = 0.4;
const scale_len = 0.2
const bigRadius = 11
const smallRadius = 5
const rotateStepOrbitPlanet = 0.02
const mainRotateStep = 0.01 
const scale_step = (smallRadius / bigRadius) / (scale_len / rotateStepOrbitPlanet)

var scaleObject = function(obj, scale) {
    obj.scale.x += scale;
    obj.scale.y += scale;
    obj.scale.z += scale;
}

var logoAnimate = function () {
    requestAnimationFrame( animate );
    logo.mainRotationGroup.rotation.y += mainRotateStep;
    logo.hourPlanetGroup.rotation.z -= rotateStepOrbitPlanet;
    if (logo.hourPlanetGroup.rotation.z < 0){
        logo.hourPlanetGroup.rotation.z += 2 * Math.PI;
    }
    if (logo.hourPlanetGroup.rotation.z >= scale_border1 &&
        logo.hourPlanetGroup.rotation.z < scale_border1 + scale_len){
            scaleObject(logo.bigPlanet, -scale_step);
    } else if (logo.hourPlanetGroup.rotation.z >= scale_border2 &&
        logo.hourPlanetGroup.rotation.z < scale_border2 + scale_len) {
            scaleObject(logo.bigPlanet, scale_step);    
    }
    // console.log(logo.hourPlanetGroup.rotation.z)
    logo.antiHourPlanetGroup.rotation.z += rotateStepOrbitPlanet;
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