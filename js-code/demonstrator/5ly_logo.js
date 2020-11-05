function createPlanet(material, radius){
    var geometry = new THREE.SphereGeometry(radius, 100, 100);
    var planet = new THREE.Mesh( geometry, material );
    return planet;
}

function createOrbitPlanet(material, radius, angle){
    var planet = createPlanet(material, radius);
    planet.position.x += 40*Math.cos(Math.PI*angle/180);
    planet.position.y += 40*Math.sin(Math.PI*angle/180);
    return planet;
}

function createHourPlanetGroup(material, bigPlanet){
    var hourPlanetGroup = new THREE.Object3D();
    hourPlanetGroup.add(bigPlanet);
    hourPlanetGroup.add(createOrbitPlanet(material, 5, 56));
    return hourPlanetGroup;
}

function createAntiHourPlanetGroup(material){
    var antiHourPlanetGroup = new THREE.Object3D();
    antiHourPlanetGroup.add(createOrbitPlanet(material, 5, 4));
    antiHourPlanetGroup.add(createOrbitPlanet(material, 5, 147));
    return antiHourPlanetGroup;
}

function createOrbit(material){
    geometry = new THREE.TorusGeometry(40, 1, 100, 100);
    var orbit = new THREE.Mesh( geometry, material );
    return orbit;
}

function get5lyLogo(){
    var group = new THREE.Object3D();
    var material = new THREE.MeshStandardMaterial( { color: 0x21a0af } );
    group.add(createPlanet(material, 12));
    group.add(createOrbit(material));
    bigPlanet = createOrbitPlanet(material, 10, 176)
    hourPlanetGroup = createHourPlanetGroup(material, bigPlanet);
    group.add(hourPlanetGroup);
    antiHourPlanetGroup = createAntiHourPlanetGroup(material);
    group.add(antiHourPlanetGroup);
    return {
        bigPlanet: bigPlanet, 
        hourPlanetGroup: hourPlanetGroup,
        antiHourPlanetGroup: antiHourPlanetGroup,
        mainRotationGroup: group
    };
}

var logo = get5lyLogo();
var logoGroup = new THREE.Object3D();
logoGroup.add(logo.mainRotationGroup);
var logo_on_scene = false;

var onLoaderInit = function() {
    loader.load( 'test_models/5_2.glb', function ( gltf ) {
        gltf.scene.traverse(function(child){
            if ( child.type == "Mesh"){
                child.position.x -= 29;
                child.position.y -= 33;
                child.position.z -= 6.5;
                console.log(child.material);
                child.material.color.set( 0xf1ad17 );
                ////
                // logoGroup.add(child);
                logo.mainRotationGroup.add(child);
                scene.add(logoGroup);
                logo_on_scene = true;
                // group.add(logoGroup)
            }
        })
    }, undefined, function ( error ) {
        console.error( error );
    } );
}