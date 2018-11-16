
//var fileRef = new File('z:\psd.psd');
//var docRef = app.open(fileRef);
var docRef=app.activeDocument;
alert(typeof XMLHttpRequest)
/**
  * Change text content of a specific named Text Layer to a new text string.
  *
  * @param {Object} doc - A reference to the document to change.
  * @param {String} layerName - The name of the Text Layer to change.
  * @param {String} newTextString - New text content for the Text Layer.
  */
function changeTextLayerContent(doc, newTextString) {
  for (var i = 0, max = doc.layers.length; i < max; i++) {
    var layerRef = doc.layers[i];
    if (layerRef.typename === "ArtLayer") {
      if (layerRef.kind === LayerKind.TEXT) {
        layerRef.textItem.contents = newTextString;
      }
    } else {
      changeTextLayerContent(layerRef, newTextString);
    }
  }
}

//changeTextLayerContent(docRef, 'Hello World');