// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");

// size buttons
const tinybtn = document.querySelector(".tiny").addEventListener("click", function(){makeGrid(3);});
const smallbtn = document.querySelector(".small").addEventListener("click", function(){makeGrid(6);});
const mediumbtn = document.querySelector(".medium").addEventListener("click", function(){makeGrid(9);});
const largebtn = document.querySelector(".large").addEventListener("click", function(){makeGrid(12);});
const giantbtn = document.querySelector(".giant").addEventListener("click", function(){makeGrid(15);});

// tools buttons
const rainbowbtn = document.querySelector(".rainbowmode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// to make squares inside the grid
function makeGrid(num) {
    let size = num **2;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 10px;"
        pad.appendChild(square).className = "grid-items";
    }
}

// user select  
function rainbowMode() {

}

function resetProgram() {
    window.location.reload();
}