let outputComboBox = document.getElementById('output-format-choice')

function getOutputFormat(){
    return outputComboBox.value.toLowerCase().replaceAll(/(.*\()|(\)(.*))/g, "")
}

var download = function (array, name) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var blob = new Blob([array], {type: "application/octet-binary"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
};
