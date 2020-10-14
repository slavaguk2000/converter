#ifndef IMPORTER_C5LY
#define IMPORTER_C5LY

struct aiScene;

const struct aiScene* import_model(void* pointer, int size, char* inFormat);

#endif 