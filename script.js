// to make divs inside the container
function makeGrid(num) {
    const pad = document.querySelector(".container");
    toptexthide = document.querySelector(".toptext");
    sizesbtns = document.querySelector(".sizes");

    const size = num **2;
    pad.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < size; i ++) {
        const square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 5px;"
        pad.appendChild(square).className = "grid-items";
    }

    toptexthide.style.visibility = "hidden";
    sizesbtns.style.visibility = "hidden";

    // selecting each square item
    const squareItems = pad.querySelectorAll(".grid-items");
    squareItems.forEach((item) => {
        item.addEventListener("mousemove", () => {
            item.style.backgroundColor = "pink";
        })
    })
}

// generate random color by given pallete
function chooseRandomColor() {
    let pallete = ['#386641', '#6A994E', '#A7C957', '#F2E8CF', '#BC4749'];
    let randomcolorChoice = pallete[Math.floor(Math.random()*pallete.length)];
}

// to let user draw 
function draw() {

}

function erase() {

}

function resetProgram() {
    window.location.reload();
}

// tools buttons
const rainbowbtn = document.querySelector(".randommode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// size buttons
const smallbtn = document.querySelector(".small").addEventListener("click", () => {makeGrid(6)});
const mediumbtn = document.querySelector(".medium").addEventListener("click", () => {makeGrid(9)});
const largebtn = document.querySelector(".large").addEventListener("click", () => {makeGrid(12)});
