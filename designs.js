// Select color input


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
  for (var height = 0; height < inputHeight; ++height) {
    tableHTML = tableHTML + '<tr>';
    for (var width = 0; width < inputWidth; ++width) {
      tableHTML = tableHTML + '<td></td>';
    }
    tableHTML = tableHTML + '</tr>';
  }
  pixelGrid.insertAdjacentHTML('beforeend', tableHTML);

}
