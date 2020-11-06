const scaleBorder5In = 5.3;
const scaleBorder5Out = 4.56;
const scaleBorderFree = 0.3;
const scaleLenIn = 0.2;
const bigRadius = 11;
const middleRadius = 6;
const smallRadius = 5;
const rotateStepOrbitPlanet = 0.02;
const mainRotateStep = 0.01;
const mainScaleStep = (bigRadius / bigRadius - smallRadius / bigRadius) / (scaleLenIn / rotateStepOrbitPlanet);
const scaleLenOut = (middleRadius / bigRadius - smallRadius / bigRadius) / mainScaleStep * rotateStepOrbitPlanet;
const scaleLenFree = (bigRadius / bigRadius - middleRadius / bigRadius) / mainScaleStep * rotateStepOrbitPlanet;


var scaleObject = function(obj, scale) {
    obj.scale.x += scale;
    obj.scale.y += scale;
    obj.scale.z += scale;
};

let tryScaleBigPlanet = function(borderAngle, scaleLen, scaleStep) {
    if (logo.hourPlanetGroup.rotation.z >= borderAngle &&
        logo.hourPlanetGroup.rotation.z < borderAngle + scaleLen){
            scaleObject(logo.bigPlanet, scaleStep);
        }
};

var logoAnimate = function () {
    requestAnimationFrame( animateObject );
    logo.mainRotationGroup.rotation.y += mainRotateStep;
    logo.hourPlanetGroup.rotation.z -= rotateStepOrbitPlanet;
    if (logo.hourPlanetGroup.rotation.z < 0){
        logo.hourPlanetGroup.rotation.z += 2 * Math.PI;
    }
    tryScaleBigPlanet(scaleBorder5In, scaleLenIn, -mainScaleStep);
    tryScaleBigPlanet(scaleBorder5Out, scaleLenOut, mainScaleStep);
    tryScaleBigPlanet(scaleBorderFree, scaleLenFree, mainScaleStep);

    // console.log(logo.hourPlanetGroup.rotation.z)
    logo.antiHourPlanetGroup.rotation.z += rotateStepOrbitPlanet;
    renderer.render( scene, camera );
};

// const gltfAnimate = function () {
//     requestAnimationFrame( animateObject );
//     if (!gltf_obj) return;
//     // gltf_obj.rotation.x += 0.000001;
//     gltf_obj.rotation.y += 0.01;
//     // gltf_obj.rotation.z += 0.0001;
//     renderer.render( scene, camera );
// };
const gltfAnimate = function () {
    requestAnimationFrame( animateObject );
    if (!gltfMainScene) return;
    // console.log(gltf_obj)
    // gltf_obj.rotation.x += 0.000001;
    whiteBox.setFromObject(gltfMainScene);
    const dimensions = new THREE.Vector3().subVectors( whiteBox.max, whiteBox.min );
    const whiteBoxGeometry = new THREE.BoxBufferGeometry(dimensions.x, dimensions.y, dimensions.z);

    // move new mesh center so it's aligned with the original object
    const matrix = new THREE.Matrix4().setPosition(dimensions.addVectors(whiteBox.min, whiteBox.max).multiplyScalar( 0.5 ));
    whiteBoxGeometry.applyMatrix4(matrix);
    whiteBoxMesh.geometry = whiteBoxGeometry; 
    gltfMainScene.rotation.y += 0.01;
    // gltf_obj.rotation.z += 0.0001;

    renderer.render( scene, camera );
};
//

var animateObject = logoAnimate;
animateObject();

var lightAnimate = function() {
    requestAnimationFrame( lightAnimate );
    lightRotationGroup.rotation.y -= 0.04;
};
lightAnimate();
//debug functions
var lastAnimateFunction = animateObject;

var resume = function() {
    animateObject = lastAnimateFunction;
    animateObject();
}

var pause = function() {
    lastAnimateFunction = animateObject;
    animateObject = function() {}
}