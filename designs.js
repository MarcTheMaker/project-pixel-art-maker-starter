// **@author Marc.Prevost Pixel art project

//Used window onload to make sure all elements are loaded before running
window.onload = function() {
    //Set our DOM elemnts
    const sizePicker = document.getElementById("sizePicker");
    const inputHeight = document.getElementById("inputHeight");
    const inputWidth = document.getElementById("inputWidth");
    const colorPicker = document.getElementById("colorPicker");
    const pixelCanvas = document.getElementById("pixelCanvas");
    
    //Code to select the grid size of our art canvas
    sizePicker.addEventListener("submit", function(event) {
      event.preventDefault();
      let height = inputHeight.value;
      let width = inputWidth.value;
      makeGrid(height, width);
    });

    //Code to actually make the grid
    function makeGrid(height, width) {
      pixelCanvas.innerHTML = "";
      for (let i = 0; i < height; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < width; j++) {
          let cell = document.createElement("td");
          row.appendChild(cell);
        }
        pixelCanvas.appendChild(row);
      }
    }
  
    //Code to allow us to select our color from a pallete 
    pixelCanvas.addEventListener("click", function(event) {
        if (event.target.nodeName === "TD") {
          if (event.target.style.backgroundColor) {
            event.target.style.backgroundColor = "";
          } else {
            event.target.style.backgroundColor = colorPicker.value;
          }
        }
      });
    };
