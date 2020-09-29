let Converter
function convert(array, inFormat, outFormat) {
    let len = array.byteLength;
    let ptr = passArrayToWasm(array, len);
    inF = formats.indexOf(inFormat.toLowerCase())
    outF = formats.indexOf(outFormat.toLowerCase())
    if (!~inF) {
        return null;
    }
    if (!~outF || !outF) {
        outputComboBox.className="red";
        return null;
    }
    let array_data_pointer = Converter._convert(ptr, len, inF, outF);
    if(!array_data_pointer) return null
    let new_pointer = getUInt32(array_data_pointer)
    let new_size = getUInt32(array_data_pointer + 4)
    new_array = getArrayFromWasm(new_pointer, new_size);
    wasm._free(ptr);
    // wasm._free(new_pointer);
    return new_array;
}