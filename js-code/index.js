let Converter
let addElement
let deleteLastElement
let gltf_obj = null
let start_convert_worker


function convert(array, inFormat, outFormat, onConvert, onShow) {
    if (!inFormat || inFormat == "") {
        return null;
    }
    if (!outFormat) {
        outputComboBox.className="red";
        return null;
    }
    start_convert_worker(array, inFormat, outFormat, onConvert, onShow);    
}

