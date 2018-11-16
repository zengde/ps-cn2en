function getTextLayer(target) {
// this basically loops all the layers to find the
// upmost text layer with the content #nn... and returns it
    if (target == null) return false;
    var layers      = target.layers,
        layerLen    = layers.length;
    for (var i = 0; i < layerLen; i++) {
        var layer       = layers[i],
            isLayerSet  = layer.typename == 'LayerSet',
            isValid     = layer.kind == LayerKind.TEXT &&
                          /^\s*#\d+\s*$/.test(layer.textItem.contents);
            // we're allowing spaces around the text just in case
        if (!isLayerSet && !isValid) continue;
        if (isLayerSet) {
            var found = getTextLayer(layer);
            if (found) return found;
        } else return layer;
    }
    return false;
}

var doc;
try {
    doc = app.activeDocument;
    // the front document
} catch(e) {}
var txtLayer = getTextLayer(doc);
console.log(textLayer);
// obviously, the text layer if found

if (txtLayer) {
    var num = txtLayer.textItem.contents.match(/\d+/)[0],
    // find the numeric part
        len = num.length,
    // find the length of the numeric part
        num = (parseInt(num,10)+1).toString();
    // add 1 to that number
    while (num.length < len) num = '0' + num;
    // and adjust length if necessary so that e.g.
    // 032 will not become 33 but it will become 033
    txtLayer.textItem.contents = '#' + num;
    // update layer content
    var ext = '.png',
        dir = decodeURI(doc.path) + '/png24',
        // to use the same directory where the layered file exists
        // just keep it as decodeURI(doc.path)
        // I added a folder here, which actually does not exist
        // but it doesn't matter because I'm making it create it
        // below in case there's no such directory.
        fileName = dir + '/' + num + ext,
        i = 0;
    if (!Folder(dir).exists) Folder(dir).create();
    // create the directory if it doesn't exist
    while (File(fileName).exists)
        fileName = dir + '/' + num + '-' + (++i) + ext;
    // if file with that name exists, add -n to the end of the name
    var file = new File(fileName),
        opts = new ExportOptionsSaveForWeb();
    with (opts) {
        format = SaveDocumentType.PNG;
        PNG8 = false;
    }
    doc.exportDocument(file, ExportType.SAVEFORWEB, opts);
    // save for web
}
//if (doc) {
    //doc.close(SaveOptions.DONOTSAVECHANGES);
    // close the original layered document without saving
//}
//doc = null;
// remove reference