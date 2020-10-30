var converWorker = new Worker("js-code/converter/convert_worker.js");
converWorker.onmessage = function(msg){
    if (msg.data == "init"){
        console.log("init")
        document.getElementById("drop-area").className = "visible_elem";
    }  
}

start_convert_worker = function(array, inFormat, outFormat, onConvert, onShow){     
        converWorker.postMessage({array: array, in: inFormat, out: outFormat})
        converWorker.onmessage = function(event){
            if(event.data.type == "convert"){
                onConvert(event.data.array)
            } else if (event.data.type == "show"){
                onShow(event.data.array)
            }
        }
}