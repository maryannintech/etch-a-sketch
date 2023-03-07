// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");

// size buttons
const tinybtn = document.querySelector(".tiny").addEventListener("click", () => {makeGrid(3)});
const smallbtn = document.querySelector(".small").addEventListener("click", () => {makeGrid(6)});
const mediumbtn = document.querySelector(".medium").addEventListener("click", () => {makeGrid(9)});
const largebtn = document.querySelector(".large").addEventListener("click", () => {makeGrid(12)});
const giantbtn = document.querySelector(".giant").addEventListener("click", () => {makeGrid(15)});

// tools buttons
const rainbowbtn = document.querySelector(".rainbowmode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// to make divs inside the container
function makeGrid(num) {
    let size = num **2;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 10px;"
        pad.appendChild(square).className = "grid-items";
    }
}


function rainbowMode() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    `rgb()`

}

// to let user draw 
function draw() {

}

function erase() {

}

function resetProgram() {
    window.location.reload();
}