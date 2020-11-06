#include <stdio.h>
#include <emscripten.h>
#include <iostream>
#include <string>
#include "importer.h"
#include "exporter.h"
// #include <thread>


int main()
{
    return 0;
}


int convert_cpp(int pointer, int size, char* inFormat, int outFormat)
{
    // printf("convert\n");
    auto start = emscripten_get_now();
    const struct aiScene* scene = import_model((void*)pointer, size, inFormat);
    auto first = emscripten_get_now();
    if(!scene) return 0;
    // std::thread show(show_gltf_on_screen);
    show_gltf_on_screen(scene);
    int ptr = (int)export_model(scene, outFormat);
    auto second = emscripten_get_now();
    printf("import %f, export %f\n", first - start, second - first);
    return ptr;
}

extern "C" {
    
    EMSCRIPTEN_KEEPALIVE
    int convert(int pointer, int size, char* inFormat, int outFormat)
    {
        return convert_cpp(pointer, size, inFormat, outFormat);
    }
    
    EMSCRIPTEN_KEEPALIVE
    void freeExporter()
    {
        freeExporter_cpp();
    }
}
