let setObjectOnCenter = function(object){

    const ambientBox = new THREE.Box3();
    ambientBox.setFromObject(object);
    object.position.x -= (ambientBox.max.x + ambientBox.min.x) / 2;
    object.position.y -= (ambientBox.max.y + ambientBox.min.y) / 2;
    object.position.z -= (ambientBox.max.z + ambientBox.min.z) / 2;
}

let setCameraPozition = function(object){
    const ambientBox = new THREE.Box3();
    ambientBox.setFromObject(object);
    camera.position.z = Math.max(
        ambientBox.max.x, -ambientBox.min.x, 
        ambientBox.max.y, -ambientBox.min.y, 
        ambientBox.max.z, -ambientBox.min.z 
        ) + Math.max(
        ambientBox.max.x - ambientBox.min.x,
        (ambientBox.max.y - ambientBox.min.y) * camera.aspect 
    ) / 2 / Math.tan( camera.fov / 2 * Math.PI / 180);
}