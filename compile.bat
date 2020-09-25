cls

@echo off

echo.
echo. 
echo.
echo. 
echo      \\\\\\\          \\\\\\       \\          \\     \\\\\\\\      \\\\\\    \\           \\\\\\\\ 
echo    \\       \\      \\      \\     \\\\      \\\\     \\      \\      \\      \\           \\ 
echo    \\              \\        \\    \\  \\  \\  \\     \\       \\     \\      \\           \\   
echo    \\              \\        \\    \\    \\    \\     \\      \\      \\      \\           \\\\\ 
echo    \\              \\        \\    \\          \\     \\\\\\\\        \\      \\           \\ 
echo    \\        \\     \\      \\     \\          \\     \\              \\      \\           \\ 
echo      \\\\\\\\         \\\\\\       \\          \\     \\            \\\\\\    \\\\\\\\\\   \\\\\\\\\
echo.
echo. 
echo.
echo.

@echo on

em++ -s ALLOW_MEMORY_GROWTH=1 ^
-s EXPORT_ES6=1 ^
-s MODULARIZE=1 ^
-s SINGLE_FILE=1 ^
-s USE_ES6_IMPORT_META=0 ^
-s ENVIRONMENT=node,web ^
-s MODULARIZE=1 ^
-std=c++11 ^
-s EXPORTED_FUNCTIONS="['_malloc','_free', '_main']" ^
-o js-code/converter/converter_core.js c-code/main.cpp ^
c-code/importer.cpp ^
c-code/assimp-5.0.1/code/Common/Importer.cpp ^
c-code/assimp-5.0.1/code/Common/BaseProcess.cpp ^
c-code/assimp-5.0.1/code/Common/BaseImporter.cpp ^
c-code/assimp-5.0.1/code/Common/DefaultLogger.cpp ^
c-code/assimp-5.0.1/code/Common/ScenePreprocessor.cpp ^
c-code/assimp-5.0.1/code/Material/MaterialSystem.cpp ^
c-code/assimp-5.0.1/code/Common/Version.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ValidateDataStructure.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ProcessHelper.cpp ^
c-code/assimp-5.0.1/code/Common/ImporterRegistry.cpp ^
c-code/assimp-5.0.1/code/Common/SpatialSort.cpp ^
c-code/assimp-5.0.1/code/Common/PostStepRegistry.cpp ^
c-code/assimp-5.0.1/code/Common/scene.cpp ^
c-code/assimp-5.0.1/code/STL/STLLoader.cpp ^
c-code/assimp-5.0.1/code/STL/STLExporter.cpp ^
c-code/assimp-5.0.1/code/Obj/ObjExporter.cpp ^
c-code/assimp-5.0.1/code/Collada/ColladaExporter.cpp ^
c-code/assimp-5.0.1/code/X/XFileExporter.cpp ^
c-code/assimp-5.0.1/code/Step/StepExporter.cpp ^
c-code/assimp-5.0.1/code/Ply/PlyExporter.cpp ^
c-code/assimp-5.0.1/code/3DS/3DSExporter.cpp ^
c-code/assimp-5.0.1/code/Assbin/AssbinExporter.cpp ^
c-code/assimp-5.0.1/code/Assxml/AssxmlExporter.cpp ^
c-code/assimp-5.0.1/code/X3D/X3DExporter.cpp ^
c-code/assimp-5.0.1/code/FBX/FBXExporter.cpp ^
c-code/assimp-5.0.1/code/FBX/FBXExportProperty.cpp ^
c-code/assimp-5.0.1/code/FBX/FBXExportNode.cpp ^
c-code/assimp-5.0.1/code/FBX/FBXUtil.cpp ^
c-code/assimp-5.0.1/code/3MF/D3MFExporter.cpp ^
c-code/assimp-5.0.1/code/Assjson/json_exporter.cpp ^
c-code/assimp-5.0.1/code/Assjson/mesh_splitter.cpp ^
c-code/assimp-5.0.1/code/Assjson/cencode.cpp ^
c-code/assimp-5.0.1/code/CApi/AssimpCExport.cpp ^
c-code/exporter.cpp ^
c-code/assimp-5.0.1/contrib/zip/src/zip.c ^
c-code/assimp-5.0.1/code/Common/Exporter.cpp ^
c-code/assimp-5.0.1/code/glTF/glTFExporter.cpp ^
c-code/assimp-5.0.1/code/glTF/glTFCommon.cpp ^
c-code/assimp-5.0.1/code/glTF2/glTF2Exporter.cpp ^
c-code/assimp-5.0.1/code/Common/SceneCombiner.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/SplitLargeMeshes.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ConvertToLHProcess.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/JoinVerticesProcess.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/MakeVerboseFormat.cpp ^
c-code/assimp-5.0.1/code/Common/DefaultIOSystem.cpp ^
c-code/assimp-5.0.1/code/Common/Bitmap.cpp ^
c-code/formats.cpp ^
-s USE_ZLIB=1 ^
-g


REM -O3
REM c-code/exporter.cpp