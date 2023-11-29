
function generateColorPaletteInPhotoshop(imagePath) {
  var activeDocument = app.activeDocument;

  var newLayer = activeDocument.artLayers.add();
  newLayer.name = "Selected Image";
  var imageFile = new File(imagePath);
  newLayer = app.activeDocument.artLayers.add();
  app.activeDocument.activeLayer = newLayer;
  app.activeDocument.selection.selectAll();
  app.activeDocument.paste();
  app.activeDocument.selection.deselect();

  var sampledColors = extractColorsFromLayer(newLayer, 10);

  var hexColors = sampledColors.map(rgbToHex);

  newLayer.remove();

  return hexColors;
}

