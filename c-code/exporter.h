#ifndef EXPORTER_C5LY
#define EXPORTER_C5LY

struct aiScene;

int export_model(const struct aiScene* scene, int outFormat);
void freeExporter_cpp();

#endif