
var ooo

let setObjectOnCenter = function(object){
    //TODO
    ooo = object
    console.log(object)
}

let setCameraPozition = function(object){
    var modelBoundingBox = new THREE.Box3().setFromObject(object);
    var camera_position_z = Math.pow(Math.min(modelBoundingBox.max.x - modelBoundingBox.min.x,
        modelBoundingBox.max.y - modelBoundingBox.min.y,
        modelBoundingBox.max.z - modelBoundingBox.min.z), 0.5);
    camera.position.z = camera_position_z  * 40
    console.log(camera_position_z)
}