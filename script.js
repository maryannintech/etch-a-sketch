// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");

// size buttons
const tinybtn = document.querySelector(".tiny").addEventListener("click", function(){makeGrid(3,3);});
const smallbtn = document.querySelector(".small").addEventListener("click", function(){makeGrid(6,6);});
const mediumbtn = document.querySelector(".medium").addEventListener("click", function(){makeGrid(9,9);});
const largebtn = document.querySelector(".large").addEventListener("click", function(){makeGrid(12,12);});
const giantbtn = document.querySelector(".giant").addEventListener("click", function(){makeGrid(15,15);});

// tools buttons
const rainbowbtn = document.querySelector(".rainbowmode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// to make squares inside the grid
function makeGrid(rows, cols) {
    let size = rows*cols;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 10px;"
        pad.appendChild(square).className = "grid-items";
    }
}

// to start drawing 
function draw() {
    document.querySelector(".grid-items").style.color="black";
}

function resetProgram() {
    window.location.reload();
}