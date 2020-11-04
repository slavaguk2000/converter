var converWorker = new Worker("js-code/converter/convert_worker.js");
converWorker.onmessage = function(msg){
    if (msg.data == "init"){
        document.getElementById("drop-area").className = "white-frame";
    }  
}

function change_spinner_visibility(visible) {
    let invisible_class = 'invisible_elem';
    let spinner = document.getElementById("convert-spinner");
    if(visible){
        spinner.classList.remove(invisible_class)
    } else {
        spinner.classList.add(invisible_class)
    }
}

start_convert_worker = function(array, inFormat, outFormat, onConvert, onShow){    
        change_spinner_visibility(true);
        converWorker.postMessage({array: array, in: inFormat, out: outFormat})
        converWorker.onmessage = function(event){
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