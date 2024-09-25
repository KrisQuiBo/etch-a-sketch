const containerDiv = document.querySelector(".container");
const removeBtn = document.querySelector(".remove");
let pixelDiv;
let root = document.querySelector(":root")

document.addEventListener("DOMContentLoaded", () => {
  
    let squares = prompt("how many squares across?")

    function makeGrid(squares) {
        let squareHeight = 960/squares;
        let squareWidth = 960/squares;
        for(let i = 0; i < squares * squares; i++) {
            pixelDiv = document.createElement("div");
            containerDiv.appendChild(pixelDiv);
                if(pixelDiv) {
                    pixelDiv.classList.add('pixel');
                    }
                    pixelDiv.style.setProperty('width', squareWidth + 'px');
                    pixelDiv.style.setProperty('height', squareHeight + 'px');
        }   
    }
    makeGrid(squares);
    containerDiv.addEventListener('mouseover', function(e) { 
        e.target.style.backgroundColor = 'pink';
    })
    function removeGrid() {
        for(let i=0; i<squares * squares; i++) {
            containerDiv.firstElementChild.remove();
            containerDiv.style.backgroundColor = 'white';
        }
    }
    removeBtn.addEventListener('click', function(e) {
    alert('clear the board and start over?')
        removeGrid()
        squares = prompt('how many?');
        makeGrid(squares);
    });
  
});