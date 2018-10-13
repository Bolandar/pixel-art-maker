// Select color input
var pixelColor;

// Select size input
var inputHeight, inputWidth;

// When size is submitted by the user, call makeGrid()

const formClick = document.querySelector('#sizePicker');
formClick.addEventListener('submit', function () {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {

  const pixelGrid = document.querySelector('#pixelCanvas');

  pixelGrid.innerHTML = '';

  inputHeight = document.querySelector('#inputHeight').value;
  inputWidth = document.querySelector('#inputWidth').value;

  var tableHTML =''

  function colorClick() {

  }

  for (var height = 0; height < inputHeight; ++height) {

    var newRow = document.createElement('tr');
    pixelGrid.appendChild(newRow);
    for (var width = 0; width < inputWidth; ++width) {
      const newPixel = document.createElement('td');
      newRow.appendChild(newPixel);
      newRow.addEventListener('click', colorClick);
    }
  }
}
