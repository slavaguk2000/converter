let wasm;

function getUInt32(uint8Pointer){
	return wasm.HEAPU32[Math.ceil(uint8Pointer/4)]
}

function passArrayToWasm(array, size) {
    const ptr = wasm._malloc(size);
	if(!ptr) throw "Memory Error"
	wasm.HEAPU8.set(new Uint8Array(array), ptr);
	return ptr;
}
function getArrayFromWasm(ptr, len) {
	return wasm.HEAPU8.subarray(ptr, ptr + len);
}

function popArray(ptr, size){
    var new_array = getArrayFromWasm(ptr, size);
    // wasm._free(ptr);
    return new_array
}