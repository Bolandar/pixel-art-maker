// Select color input
let pixelColor;

// Select size input
let inputHeight, inputWidth;

// When size is submitted by the user, call makeGrid()

const formClick = document.querySelector('#sizePicker');
formClick.addEventListener('submit', function () {
  event.preventDefault(); //supress page reload on submit
  makeGrid();
});

// Creates user defined grid size and sets events
function makeGrid() {

  const pixelGrid = document.querySelector('#pixelCanvas');

  pixelGrid.innerHTML = ''; //Clears previous grid

  inputHeight = document.querySelector('#inputHeight').value;
  inputWidth = document.querySelector('#inputWidth').value;

  if (inputHeight > 100) { //Limit grid height
    inputHeight = 100;
  };

  if (inputWidth > 100) { //Limit grid width
    inputWidth = 100;
  }

  //Get user selected color and set pixel color
  function colorClick() {
    color = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = color;
  }

  // Build grid based on user form input
  for (var height = 0; height < inputHeight; ++height) { //Loop creates rows
    const newRow = document.createElement('tr');
    pixelGrid.appendChild(newRow);
    for (var width = 0; width < inputWidth; ++width) { //Loop create pixels
      const newPixel = document.createElement('td');
      newRow.appendChild(newPixel);
      newPixel.addEventListener('click', colorClick);//Add click event to pixels
    }
  }
}
