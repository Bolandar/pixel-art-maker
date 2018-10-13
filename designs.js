// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows, columns) {
  const pixelGrid = document.querySelector('#pixelCanvas');
  var tableHTML =''
  for (var height = 0; height < rows; ++height) {
    tableHTML = tableHTML + '<tr>';
    for (var width = 0; width < columns; ++width) {
      tableHTML = tableHTML + '<td></td>';
    }
    tableHTML = tableHTML + '</tr>';
  }
  pixelGrid.insertAdjacentHTML('beforeend', tableHTML);
}
