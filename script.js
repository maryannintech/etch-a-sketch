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

    // to hide size buttons and text after the user chose
    bottomtexthide.style.visibility = "hidden";
    sizesbtns.style.visibility = "hidden";

}

// to generate random color according to array pallete
function getRandomColor() {
    const pallete = ['386641', '6A994E', 'A7C957', 'F2E8CF', 'BC4749'];
    let randomColor = pallete[Math.floor(Math.random()*pallete.length)];
    return `#${randomColor}`;
}

// drawing tools
const randomColor = document.querySelector(".randommode").addEventListener("click", () => {drawingTools("random")});
const drawbtn = document.querySelector(".draw").addEventListener("click", () => {drawingTools("color")});

// each function of drawing tools
function drawingTools(tools) {
    const grids = pad.querySelectorAll(".grid-items");
    if (tools === 'random') {
        grids.forEach((grid) => {
            grid.addEventListener("mousemove", () => {
                grid.style.backgroundColor = getRandomColor();
            })
        })
    }
    else if (tools === 'color') {
        // selecting each square item
        grids.forEach((grid) => {
            grid.addEventListener("mousemove", () => {
                grid.style.backgroundColor = "pink";
            })
        })
    }
}

// tools buttons
const eraserbtn = document.querySelector(".eraser").addEventListener("click", erase);
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

function erase() {
    const cells = pad.querySelectorAll(".grid-items");
    cells.forEach((cell) => {
        cell.addEventListener("mousemove", () => {
            cell.style.backgroundColor = "";
        })
    })
}

function resetProgram() {
    window.location.reload();
}


