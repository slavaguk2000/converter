
let dropArea = document.getElementById('drop-area')
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}
;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})
;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})
function highlight(e) {
    dropArea.classList.add('highlight')
}
function unhighlight(e) {
    dropArea.classList.remove('highlight')
}
dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files
    handleFiles(files)
}
function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}
function setResult(result_string){
    document.getElementById("result-label").innerText = result_string
}

function uploadFile(file) {
    // console.log("Handle");
    result_string = "Result: "
    setResult(result_string)
    let reader = new FileReader();
    reader.readAsArrayBuffer(file)
    reader.onloadend = function(){
        sourceName = file.name
        pointIndex = sourceName.lastIndexOf(".") + 1
        if(!pointIndex) return;
        inFormat = sourceName.slice(pointIndex)
        sourceName = sourceName.slice(0, pointIndex)
        outFormat = formats.indexOf(getOutputFormat().toLowerCase())
        deleteLastElement()
        var onConvert = function(convertedArray) {
            if (convertedArray){
                console.log(convertedArray)
                download(convertedArray, sourceName + formats[outFormat])
                result_string += "success"
            } else {
                result_string += "error"
            }
            setResult(result_string)
        }
        var onShow = function(array) {
            if (array){
                addElement(array);
                // console.log('success');
            } else {
                console.log('error');
            }
        }
        convert(reader.result, inFormat, outFormat, onConvert, onShow) 
    }

    // let reader = new FileReader();
    // reader.readAsArrayBuffer(file)
    // reader.onloadend = function(){
    //     sourceName = file.name
    //     pointIndex = sourceName.lastIndexOf(".") + 1
    //     if(!pointIndex) return;
    //     inFormat = sourceName.slice(pointIndex)
    //     sourceName = sourceName.slice(0, pointIndex)
    //     outFormat = formats.indexOf(getOutputFormat().toLowerCase())
    //     deleteLastElement()
    //     convertedArray = convert(reader.result, inFormat, outFormat) 
    //     if (convertedArray){
    //         console.log(convertedArray)
    //         download(convertedArray, sourceName + formats[outFormat])
    //         result_string += "success"
    //     } else {
    //         result_string += "error"
    //     }
    //     setResult(result_string)
    // }
}