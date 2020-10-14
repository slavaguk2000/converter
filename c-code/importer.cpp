#include <stdio.h>
#include "assimp-5.0.1/include/assimp/Importer.hpp"
#include "assimp-5.0.1/include/assimp/scene.h"
#include "formats.h"


const aiScene* import_model(void* pointer, int size, char* inFormat)
{
    printf("import\n");
    Assimp::Importer importer;
    printf("in: %s\n", inFormat);
    const aiScene* scene = importer.ReadFileFromMemory(pointer, size, 0, inFormat);
    if( !scene) {
        puts( importer.GetErrorString());
    }
    else printf("successful import\n");
    return scene;
}