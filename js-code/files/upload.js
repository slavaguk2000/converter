
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
};
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
});
['dragleave', 'drop'].forEach(eventName => {
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
    handleFiles(e.dataTransfer.files)
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
    setResult(result_string);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    let startProcess = function(){
        process(reader, file);
    }
    reader.onloadend = startProcess;
}