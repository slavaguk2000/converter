let Converter
let addElement
let deleteLastElement
let gltf_obj = null

function convert(array, inFormat, outFormat) {
    let len = array.byteLength;
    let ptr = passArrayToWasm(array, len);
    if (!inFormat || inFormat == "") {
        return null;
    }
    if (!outFormat) {
        outputComboBox.className="red";
        return null;
    }
    // console.log("in js: " + inFormat)
    let array_data_pointer
    try {
        array_data_pointer = Converter.ccall('convert', 'number', ['number', 'number', 'string', 'number'], [ptr, len, inFormat, outFormat]);
    } catch (error) {
        // console.log(error)
        return null 
    }
    console.log(array_data_pointer)
    if(!array_data_pointer) return null
    let new_pointer = getUInt32(array_data_pointer)
    let new_size = getUInt32(array_data_pointer + 4)
    new_array = getArrayFromWasm(new_pointer, new_size);
    wasm._free(ptr);
    wasm._free(array_data_pointer);
    // wasm._free(new_pointer);
    return new_array;
}

