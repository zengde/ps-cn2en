function getAllTextLayer(target) {
	target=target? target:app.activeDocument;
    var layers      = target.layers,
        layerLen    = layers.length;
	var txtlayers='[';
    for (var i = 0; i < layerLen; i++) {
        var layer       = layers[i],
            isLayerSet  = layer.typename == 'LayerSet',
            isValid     = layer.kind == LayerKind.TEXT&&layer.visible;// &&/^\s*#\d+\s*$/.test(layer.textItem.contents);
            // we're allowing spaces around the text just in case
        if (!isLayerSet && !isValid) continue;
        var name=layer.name,type,data;
        if (isLayerSet) {
			data=getAllTextLayer(layer);
			type='set';
        } else{
			data=layer.textItem.contents;
			data=data.replace(/\'/g, "\\'");
			data=data.replace(/\"/g, "\\\"");
			data='"'+data+'"';
			type='art';
		} 
		txtlayers+='"'+name+'":{"type":"'+type+'","data":'+data+'},';
    }
	txtlayers+=']';
	return txtlayers;
}
//var str=getAllTextLayer();
//str=str.replace(/(?:\r\n|\r|\n)/g, "<br/>");;
//var str2 = JSON.stringify(str);
//alert(str);

//var layerSetRef=app.activeDocument.layerSets.getByName('产品信息');
//alert(layerSetRef.artLayers.length)
//var layerRef = app.activeDocument.artLayers.getByName("Product information");
//alert(layerRef.textItem.contents);//layerRef.allLocked = true;
function addTranslatedTextLayerByset(setname,name,translatedString) {
  var toLanguage='cn';
  var layerSetRef=app.activeDocument.layerSets.getByName(setname);
  var activeLayer=layerSetRef.artLayers.getByName(name);
  if (activeLayer !== false) {
    var duplicatedLayer = activeLayer.duplicate();
	translatedString=String(translatedString).replace(/<br\/>/gi, "\r");
    duplicatedLayer.textItem.contents = translatedString;
    duplicatedLayer.name = '[' + toLanguage.toUpperCase() + '] ' + activeLayer.name;
    activeLayer.visible = false;
    return JSONify(SUCCESS, 'success');
  }
  else {
    return JSONify(ERROR, ERROR_NO_LAYER_SELECTED);
  }
}
addTranslatedTextLayerByset("场景展示","Scene Exhibition","现场展览");
