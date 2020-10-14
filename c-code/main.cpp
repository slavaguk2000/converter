#include <stdio.h>
#include <emscripten.h>
#include <iostream>
#include <string>
#include "importer.h"
#include "exporter.h"


int main()
{
    return 0;
}


int convert_cpp(int pointer, int size, char* inFormat, int outFormat)
{
    printf("convert\n");
    const struct aiScene* scene = import_model((void*)pointer, size, inFormat);
    if(!scene) return 0;
    return (int)export_model(scene, outFormat);
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
