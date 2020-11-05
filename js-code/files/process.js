var process = function(reader, file){
    sourceName = file.name
    pointIndex = sourceName.lastIndexOf(".") + 1
    if(!pointIndex) return;
    inFormat = sourceName.slice(pointIndex)
    sourceName = sourceName.slice(0, pointIndex)
    outFormat = formats.indexOf(getOutputFormat().toLowerCase())
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