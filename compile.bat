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
c-code/assimp-5.0.1/code/Common/BaseProcess.cpp ^
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
c-code/assimp-5.0.1/code/Material/MaterialSystem.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ValidateDataStructure.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ProcessHelper.cpp ^
c-code/assimp-5.0.1/code/STL/STLLoader.cpp ^
c-code/assimp-5.0.1/code/STL/STLExporter.cpp ^
c-code/assimp-5.0.1/code/Obj/ObjExporter.cpp ^
c-code/assimp-5.0.1/code/Obj/ObjFileImporter.cpp ^
c-code/assimp-5.0.1/code/Obj/ObjFileMtlImporter.cpp ^
c-code/assimp-5.0.1/code/Obj/ObjFileParser.cpp ^
c-code/assimp-5.0.1/code/Collada/ColladaExporter.cpp ^
c-code/assimp-5.0.1/code/X/XFileExporter.cpp ^
c-code/assimp-5.0.1/code/X/XFileImporter.cpp ^
c-code/assimp-5.0.1/code/X/XFileParser.cpp ^
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
c-code/assimp-5.0.1/code/AMF/AMFImporter.cpp ^
c-code/assimp-5.0.1/code/AMF/AMFImporter_Geometry.cpp ^
c-code/assimp-5.0.1/code/AMF/AMFImporter_Material.cpp ^
c-code/assimp-5.0.1/code/AMF/AMFImporter_Postprocess.cpp ^
c-code/assimp-5.0.1/code/3DS/3DSLoader.cpp ^
c-code/assimp-5.0.1/code/3DS/3DSConverter.cpp ^
c-code/assimp-5.0.1/code/MD3/MD3Loader.cpp ^
c-code/assimp-5.0.1/code/MDL/MDLLoader.cpp ^
c-code/assimp-5.0.1/code/MDL/MDLMaterialLoader.cpp ^
c-code/assimp-5.0.1/code/MD2/MD2Loader.cpp ^
c-code/assimp-5.0.1/code/PLY/PLYLoader.cpp ^
c-code/assimp-5.0.1/code/PLY/PLYParser.cpp ^
c-code/assimp-5.0.1/code/ASE/ASELoader.cpp ^
c-code/assimp-5.0.1/code/ASE/ASEParser.cpp ^
c-code/assimp-5.0.1/code/HMP/HMPLoader.cpp ^
c-code/assimp-5.0.1/code/SMD/SMDLoader.cpp ^
c-code/assimp-5.0.1/code/MDC/MDCLoader.cpp ^
c-code/assimp-5.0.1/code/MD5/MD5Loader.cpp ^
c-code/assimp-5.0.1/code/MD5/MD5Parser.cpp ^
c-code/assimp-5.0.1/code/LWO/LWOLoader.cpp ^
c-code/assimp-5.0.1/code/LWO/LWOBLoader.cpp ^
c-code/assimp-5.0.1/code/LWO/LWOMaterial.cpp ^
c-code/assimp-5.0.1/code/DXF/DXFLoader.cpp ^
c-code/assimp-5.0.1/code/NFF/NFFLoader.cpp ^
c-code/assimp-5.0.1/code/Raw/RawLoader.cpp ^
c-code/assimp-5.0.1/code/SIB/SIBImporter.cpp ^
c-code/assimp-5.0.1/code/OFF/OFFLoader.cpp ^
c-code/assimp-5.0.1/code/AC/ACLoader.cpp ^
c-code/assimp-5.0.1/code/BVH/BVHLoader.cpp ^
c-code/assimp-5.0.1/code/Irr/IRRLoader.cpp ^
c-code/assimp-5.0.1/code/Irr/IRRMeshLoader.cpp ^
c-code/assimp-5.0.1/code/Irr/IRRShared.cpp ^
c-code/assimp-5.0.1/code/Q3D/Q3DLoader.cpp ^
c-code/assimp-5.0.1/code/B3D/B3DImporter.cpp ^
c-code/assimp-5.0.1/code/Collada/ColladaLoader.cpp ^
c-code/assimp-5.0.1/code/Collada/ColladaParser.cpp ^
c-code/assimp-5.0.1/code/Terragen/TerragenLoader.cpp ^
c-code/assimp-5.0.1/code/CSM/CSMLoader.cpp ^
c-code/assimp-5.0.1/code/Unreal/UnrealLoader.cpp ^
c-code/assimp-5.0.1/code/LWS/LWSLoader.cpp ^
c-code/assimp-5.0.1/code/Ogre/OgreImporter.cpp ^
c-code/assimp-5.0.1/code/Ogre/OgreBinarySerializer.cpp ^
c-code/assimp-5.0.1/code/Ogre/OgreXmlSerializer.cpp ^
c-code/assimp-5.0.1/code/Ogre/OgreStructs.cpp ^
c-code/assimp-5.0.1/code/Ogre/OgreMaterial.cpp ^
c-code/assimp-5.0.1/code/LWO/LWOAnimation.cpp ^
c-code/assimp-5.0.1/code/OpenGEX/OpenGEXImporter.cpp ^
c-code/assimp-5.0.1/code/MS3D/MS3DLoader.cpp ^
c-code/assimp-5.0.1/code/COB/COBLoader.cpp ^
c-code/assimp-5.0.1/code/Blender/BlenderLoader.cpp ^
c-code/assimp-5.0.1/code/Blender/BlenderDNA.cpp ^
c-code/assimp-5.0.1/code/Blender/BlenderCustomData.cpp ^
c-code/assimp-5.0.1/code/Blender/BlenderScene.cpp ^
c-code/assimp-5.0.1/code/Blender/BlenderModifier.cpp ^
c-code/assimp-5.0.1/code/Q3BSP/Q3BSPFileImporter.cpp ^
c-code/assimp-5.0.1/code/Q3BSP/Q3BSPFileParser.cpp ^
c-code/assimp-5.0.1/code/NDO/NDOLoader.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCLoader.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCUtil.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCMaterial.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCGeometry.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCReaderGen1_2x3.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCReaderGen2_2x3.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCReaderGen_4.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCProfile.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCBoolean.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCCurve.cpp ^
c-code/assimp-5.0.1/code/Importer/IFC/IFCOpenings.cpp ^
c-code/assimp-5.0.1/code/Importer/STEPParser/STEPFileReader.cpp ^
c-code/assimp-5.0.1/code/Importer/STEPParser/STEPFileEncoding.cpp ^
c-code/exporter.cpp ^
c-code/assimp-5.0.1/contrib/zip/src/zip.c ^
c-code/assimp-5.0.1/contrib/unzip/unzip.c ^
c-code/assimp-5.0.1/contrib/unzip/ioapi.c ^
c-code/assimp-5.0.1/contrib/irrXML/irrXML.cpp ^
c-code/assimp-5.0.1/contrib/clipper/clipper.cpp ^
c-code/assimp-5.0.1/contrib/openddlparser/code/OpenDDLParser.cpp ^
c-code/assimp-5.0.1/contrib/openddlparser/code/OpenDDLCommon.cpp ^
c-code/assimp-5.0.1/contrib/openddlparser/code/DDLNode.cpp ^
c-code/assimp-5.0.1/contrib/openddlparser/code/Value.cpp ^
c-code/assimp-5.0.1/contrib/poly2tri/poly2tri/sweep/cdt.cc  ^
c-code/assimp-5.0.1/contrib/poly2tri/poly2tri/sweep/sweep_context.cc  ^
c-code/assimp-5.0.1/contrib/poly2tri/poly2tri/sweep/sweep.cc  ^
c-code/assimp-5.0.1/contrib/poly2tri/poly2tri/sweep/advancing_front.cc  ^
c-code/assimp-5.0.1/contrib/poly2tri/poly2tri/common/shapes.cc  ^
c-code/assimp-5.0.1/code/glTF/glTFExporter.cpp ^
c-code/assimp-5.0.1/code/glTF/glTFCommon.cpp ^
c-code/assimp-5.0.1/code/glTF2/glTF2Exporter.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/SplitLargeMeshes.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/ConvertToLHProcess.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/JoinVerticesProcess.cpp ^
c-code/assimp-5.0.1/code/PostProcessing/MakeVerboseFormat.cpp ^
c-code/formats.cpp ^
-s USE_ZLIB=1 ^
-g

REM -O3
REM c-code/exporter.cpp