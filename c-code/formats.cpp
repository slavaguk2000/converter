#include <string>
#include <vector>





const std::vector<std::string> getFormats(){
    const std::vector<std::string> formats = {      
        "",                                         
        "collada",                                      
        "x",                                        
        "stp",                                    
        "obj",                                    
        "objnomtl",                                    
        "stl",                                    
        "stlb",                                        
        "ply",                                        
        "plyb",                                    
        "3ds",                                        
        "gltf2",                           
        "glb2",                                        
        "gltf",                                     
        "glb",
        "assbin",
        "assxml",
        "x3d",
        "fbx",
        "fbxa",
        "3mf",
        "assjson"
    };    
    return formats;
}



// const std::vector<std::string> getFormats(){
//     const std::vector<std::string> formats = {      
//         "",                                         
//         "3ds",                                      
//         "3mf",                                        
//         "assbin",                                    
//         "json",                                    
//         "assxml",                                    
//         "dae",                                    
//         "fbx",                                        
//         "glb2",                                        
//         "gltf2",                                    
//         "obj",                                        
//         "plyb",//"ply",                                        
//         "stp",                                        
//         "stlb", //"stl",                                        
//         "x"
//     };    
//     return formats;
// }