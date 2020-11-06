const scaleBorder5In = 5.3;
const scaleBorder5Out = 4.56;
const scaleBorderFree = 0.3;
const scaleLen = 0.3;
const bigRadius = 11;
const middleRadius = 6;
const smallRadius = 5;
const rotateStepOrbitPlanet = 0.02;
const mainRotateStep = 0.01;

var scaleObject = function(obj, scale) {
    obj.scale.x += scale;
    obj.scale.y += scale;
    obj.scale.z += scale;
};

let tryScaleBigPlanet = function(borderAngle, startRadius, endRadius) {
    let scaleStep = (endRadius / bigRadius - startRadius / bigRadius) / (scaleLen / rotateStepOrbitPlanet);
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
    tryScaleBigPlanet(scaleBorder5In, bigRadius, smallRadius);
    tryScaleBigPlanet(scaleBorder5Out, smallRadius, middleRadius);
    tryScaleBigPlanet(scaleBorderFree, middleRadius, bigRadius);
    logo.antiHourPlanetGroup.rotation.z += rotateStepOrbitPlanet;
    renderer.render( scene, camera );
};

const gltfAnimate = function () {
    requestAnimationFrame( animateObject );
    if (!gltfMainScene) return;
    gltfMainScene.rotation.y += 0.01;
    renderer.render( scene, camera );
};

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