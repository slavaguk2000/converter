var loader;
var gltf_obj = null;

let setObjectOnCenter = function(object){
    //TODO
}

let setCameraPozition = function(object){
    var modelBoundingBox = new THREE.Box3().setFromObject(object);
    var camera_position_z = Math.pow(Math.min(modelBoundingBox.max.x - modelBoundingBox.min.x,
        modelBoundingBox.max.y - modelBoundingBox.min.y,
        modelBoundingBox.max.z - modelBoundingBox.min.z), 0.5);
    camera.position.z = camera_position_z  * 40
    console.log(camera_position_z)
}

var addElement = function(blob){
    ///need uint8array to array buffer
    let arr = new Uint8Array(blob)
    loader.parse( arr.buffer, null, function ( gltf ) {
        gltf_obj = gltf.scene
        setObjectOnCenter(gltf_obj)
        setCameraPozition(gltf_obj)
        if (logo_on_scene) {
            animate = gltfAnimate;
            scene.remove(logoGroup)
        }
        scene.add( gltf_obj );

    }, function(err){
        console.log(err)
    } );
}

var deleteLastElement = function(){
    if (gltf_obj){
        scene.remove(gltf_obj)
    }
}