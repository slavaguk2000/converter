importScripts('./converter_core.js', '../wasm-lib/arrays.js');

wasm = Module

wasm['onRuntimeInitialized'] = function() {
    postMessage("init")
}

onmessage = function(convert_event)
{
    let array = convert_event.data.array
    let len = array.byteLength;
    let ptr = passArrayToWasm(array, len);
    console.log("worker start")
    try {
        var array_data_pointer = Module.ccall(
        'convert', 'number', 
        ['number', 'number', 'string', 'number'], 
        [ptr, len, convert_event.data.in, convert_event.data.out]) 
        console.log(array_data_pointer)
        if(!array_data_pointer) throw new Error();
        let new_pointer = getUInt32(array_data_pointer)
        let new_size = getUInt32(array_data_pointer + 4)
        new_array = popArray(new_pointer, new_size);
        wasm._free(ptr);
        wasm._free(array_data_pointer);
        postMessage({array: new_array, type: "convert"})
    } catch (error) {
        console.log(error)
        postMessage(null)
    }
    console.log("worker end")
}