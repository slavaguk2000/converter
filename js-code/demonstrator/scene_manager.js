var loader;
var gltf_obj = null;

var addElement = function(blob){
    ///need uint8array to array buffer
    let arr = new Uint8Array(blob)
    loader.parse( arr.buffer, null, function ( gltf ) {
        gltf_obj = gltf.scene
        setObjectOnCenter(gltf_obj)
        // setCameraPozition(gltf_obj)
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