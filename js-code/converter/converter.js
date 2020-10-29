// import Module from './converter_core.js'

// let globalModulePromise = Module().then((c) => {
//     Converter = c
//     wasm = Converter
// });

start_convert_worker = function(array, inFormat, outFormat, onConvert, onShow){
    var converWorker = new Worker("js-code/files/convert_worker.js");
    converWorker.onmessage = function(msg){
        console.log(msg.data)       
        converWorker.postMessage({array: array, in: inFormat, out: outFormat})
        converWorker.onmessage = function(event){
            if(event.data.type == "convert"){
                onConvert(event.data.array)
            } else if (event.data.type == "show"){
                onShow(event.data.array)
            }
        }
    }
}