// sizes buttons
const smallbtn = document.querySelector(".small").addEventListener("click", () => {makeGrid(6)});
const mediumbtn = document.querySelector(".medium").addEventListener("click", () => {makeGrid(9)});
const largebtn = document.querySelector(".large").addEventListener("click", () => {makeGrid(12)});

const pad = document.querySelector(".container");
function makeGrid(num) {
    const bottomtexthide = document.querySelector(".bottomtext");
    const sizesbtns = document.querySelector(".sizes");
    const size = num **2;

    // to make use of all the columns and rows
    pad.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    // loop for adding divs
    for (let i = 0; i < size; i ++) {
        const square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 5px;"
        pad.appendChild(square).className = "grid-items";
    }

    // to hide size buttons and text after the user chose the size
    bottomtexthide.style.visibility = "hidden";
    sizesbtns.style.visibility = "hidden";

}

// to generate random color according to array palette
function getRandomColor() {
    const palette = ['D4E09B', '723D46', 'CBDFBD', 'F19C79', 'A44A3F'];
    let randomColor = palette[Math.floor(Math.random()*palette.length)];
    return `#${randomColor}`;
}

// drawing buttons
const randomColor = document.querySelector(".randommode").addEventListener("click", setRandomColor);
// to monitor color input and change
let color = document.querySelector("#colorpicker").addEventListener("input", chooseColor, false);
color = document.querySelector("#colorpicker").addEventListener("change", chooseColor, false);

// each function of drawing buttons
function setRandomColor() {
    // selecting each grid item
    const grids = pad.querySelectorAll(".grid-items");
     grids.forEach((grid) => {
        grid.addEventListener("mousemove", () => {
            grid.style.backgroundColor = getRandomColor();
        })
    })
}

function chooseColor(event) {
    color = event.target.value;
    const grids = pad.querySelectorAll(".grid-items");
     grids.forEach((grid) => {
        grid.addEventListener("mousemove", () => {
            grid.style.backgroundColor = color;
        })
    })
}

// tools buttons
const eraserbtn = document.querySelector(".eraser").addEventListener("click", erase);
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);
const clearbtn = document.querySelector(".clear").addEventListener("click", clearColors);

function erase() {
    const cells = pad.querySelectorAll(".grid-items");
    cells.forEach((cell) => {
        cell.addEventListener("mousemove", () => {
            cell.style.backgroundColor = "";
        })
    })
}

function clearColors() {
    const cells = pad.querySelectorAll(".grid-items");
    cells.forEach((cell) => {
            cell.style.backgroundColor = "";
    })
}

function resetProgram() {
    // to reset the program
    window.location.reload();
}



