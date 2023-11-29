document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generatePalette').addEventListener('click', function () {
    generateColorPalette();
  });
});

function generateColorPalette() {
  var imageInput = document.getElementById('imageInput');
  var selectedImage = imageInput.files[0];

  if (selectedImage) {
    csInterface.evalScript('generateColorPalette("' + selectedImage.path + '")', function (result) {
      displayColorPalette(result);
    });
  } else {
    alert('Please select an image file.');
  }
}

function displayColorPalette(colors) {
  var colorPaletteDiv = document.getElementById('colorPalette');
  colorPaletteDiv.innerHTML = '';

  colors.forEach(function (color) {
    var swatch = document.createElement('div');
    swatch.style.backgroundColor = color;
    swatch.className = 'colorSwatch';
    colorPaletteDiv.appendChild(swatch);
  });
}
