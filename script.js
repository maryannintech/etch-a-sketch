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
const rainbowbtn = document.querySelector(".randommode");
const drawbtn = document.querySelector(".drawbtn");
const eraserbtn = document.querySelector(".eraser");
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// to make divs inside the container
function makeGrid(num) {
    let size = num **2;
    pad.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 1px solid grey; border-radius: 3px;"
        pad.appendChild(square).className = "grid-items";
    }

    const squareItems = pad.querySelectorAll(".grid-items");
    squareItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
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