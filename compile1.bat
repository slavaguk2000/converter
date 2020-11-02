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

em++ c-code/assimp-5.0.1/code/Common/BaseProcess.cpp ^
c-code/assimp-5.0.1/code/Common/BaseImporter.cpp ^
c-code/assimp-5.0.1/code/Common/Bitmap.cpp ^
c-code/assimp-5.0.1/code/Common/CreateAnimMesh.cpp ^
c-code/assimp-5.0.1/code/Common/DefaultIOSystem.cpp ^
c-code/assimp-5.0.1/code/Common/DefaultLogger.cpp ^
c-code/assimp-5.0.1/code/Common/Exporter.cpp ^
c-code/assimp-5.0.1/code/Common/Importer.cpp ^
c-code/assimp-5.0.1/code/Common/ImporterRegistry.cpp ^
c-code/assimp-5.0.1/code/Common/PostStepRegistry.cpp ^
c-code/assimp-5.0.1/code/Common/RemoveComments.cpp ^
c-code/assimp-5.0.1/code/Common/scene.cpp ^
c-code/assimp-5.0.1/code/Common/SceneCombiner.cpp ^
c-code/assimp-5.0.1/code/Common/ScenePreprocessor.cpp ^
c-code/assimp-5.0.1/code/Common/SGSpatialSort.cpp ^
c-code/assimp-5.0.1/code/Common/SkeletonMeshBuilder.cpp ^
c-code/assimp-5.0.1/code/Common/SpatialSort.cpp ^
c-code/assimp-5.0.1/code/Common/StandardShapes.cpp ^
c-code/assimp-5.0.1/code/Common/Subdivision.cpp ^
c-code/assimp-5.0.1/code/Common/Version.cpp ^
c-code/assimp-5.0.1/code/Common/ZipArchiveIOSystem.cpp ^
-pthread ^
-O3 -r -o temp/common.o