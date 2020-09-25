import Module from './converter_core.js'


let globalModulePromise = Module().then((c) => {
    Converter = c
    wasm = Converter
});