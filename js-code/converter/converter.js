let convertWorker = new Worker("js-code/converter/convert_worker.js");
convertWorker.onmessage = function(msg){
    if (msg.data == "init"){
        document.getElementById("drop-area").className = "white-frame";
    }  
}

let change_spinner_visibility = function(visible) {
    let invisible_class = 'invisible_elem';
    let spinner = document.getElementById("convert-spinner");
    if(visible){
        spinner.classList.remove(invisible_class)
    } else {
        spinner.classList.add(invisible_class)
    }
}

var start_convert_worker = function(array, inFormat, outFormat, onConvert, onShow){    
    change_spinner_visibility(true);
    convertWorker.postMessage({array: array, in: inFormat, out: outFormat})
    convertWorker.onmessage = function(event){
        if (event.data == null){
            change_spinner_visibility(false);
            onConvert(null);
        } else if(event.data.type == "convert"){
            change_spinner_visibility(false);
            onConvert(event.data.array);
        } else if (event.data.type == "show"){
            onShow(event.data.array);
        }
    }
}

var convert = function(array, inFormat, outFormat, onConvert, onShow) {
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
