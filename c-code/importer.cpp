#include <stdio.h>
#include "assimp-5.0.1/include/assimp/Importer.hpp"
#include "assimp-5.0.1/include/assimp/scene.h"
#include "formats.h"


const aiScene* import_model(void* pointer, int size, int inFormat)
{
    printf("import\n");
    Assimp::Importer importer;
    std::vector<std::string> formats = getFormats();
    switch (inFormat)
    {
    case 8:
        inFormat = 26; //glb2 to glb
        break;
    case 13:
        inFormat = 53; //stlb to stl
        break;
    case 11:
        inFormat = 54; //plyb to ply
        break;
    default:
        break;
    } 

    printf("in: %d - %s\n", inFormat, formats[inFormat].c_str());
    const aiScene* scene = importer.ReadFileFromMemory(pointer, size, 0, formats[inFormat].c_str());
    if( !scene) {
        puts( importer.GetErrorString());
    }
    else printf("successful import\n");
    return scene;
}