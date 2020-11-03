let Converter
let addElement
let deleteLastElement
let gltf_obj = null
let start_convert_worker
let resize_convas


function convert(array, inFormat, outFormat, onConvert, onShow) {
    document.getElementById("fileElem").value = "";
    if (!inFormat || inFormat == "") {
        return null;
    }
    if (!outFormat || outFormat == "") {
        outputComboBox.className="red";
        return null;
    }
    deleteLastElement()
    start_convert_worker(array, inFormat, outFormat, onConvert, onShow);    
}

