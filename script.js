// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");

// size buttons
const xsmallbtn = document.querySelector(".xsmall").addEventListener("click", function(){makeGrid(4,4);});
const smallbtn = document.querySelector(".small");
const mediumbtn = document.querySelector(".medium");
const largebtn = document.querySelector(".large");
const xlargebtn = document.querySelector(".xlarge");

// tools buttons
const rainbowbtn = document.querySelector(".rainbowmode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset");




// to make squares inside the grid
function makeGrid(rows, cols) {
    pad.style.setProperty('--grid-rows', rows);
    pad.style.setProperty('--grid-cols', cols);
    let size = rows*cols;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 10px;"
        pad.appendChild(square).className = "grid-items";
    }
}




