#include <stdio.h>
#include <stdint.h>
#include <string.h>
#include "formats.h"
#include <iostream>
#include <vector>
#include <string>
#include <stdlib.h> 
#include <emscripten.h>
#include "assimp-5.0.1/include/assimp/Exporter.hpp"
#include "assimp-5.0.1/include/assimp/scene.h"


Assimp::Exporter* getExporter(bool free = false)
{
    static Assimp::Exporter* exporter = nullptr;
    if (!exporter){
        exporter = new Assimp::Exporter();
    }
    Assimp::Exporter* temp = exporter;
    if(free){
        exporter = nullptr;
    }
    return temp;
}

void freeExporter_cpp()
{
    Assimp::Exporter* exp = getExporter(true);
    free(exp);
}

int export_model(const aiScene* scene, int outFormat)
{
    std::vector<std::string> formats = getFormats();
    // printf("export\n");
    Assimp::Exporter exporter;
    //  printf("out: %d - %s\n", outFormat, formats[outFormat].c_str());
    const aiExportDataBlob* blob = exporter.ExportToBlob(scene, formats[outFormat].c_str());
    if (!blob) {
        // printf("error export\n");
        // puts(exporter.GetErrorString());
        return 0;
    }
    // printf("successful export\n");
    uint32_t* pointer = (uint32_t*)malloc(2*sizeof(uint32_t));
    pointer[0] = (uint32_t)blob->data;
    pointer[1] = (uint32_t)blob->size;
    // printf("blob pointer: %d, data: %d, size: %d\n", (int)blob, (uint32_t)blob->data, (uint32_t)blob->size);
    return (int)pointer;
}

void show_gltf_on_screen(const aiScene* scene)
{
    Assimp::Exporter exporter;
    std::vector<std::string> formats = getFormats();
    const aiExportDataBlob* blob = exporter.ExportToBlob(scene, "glb2");
    int pointer = (uint32_t)blob->data;
    int size = (uint32_t)blob->size;
    if (!pointer) {
        printf("ERROR!\n");
        return;
    }
    EM_ASM({
        console.log('start');
        var array = popArray($0, $1);
        console.log(array);
        if (array){
            addElement(array);
            // console.log('success');
        } else {
            console.log('error');
        }
    }, pointer, size
    );
}   