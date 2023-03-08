function makeGrid(num) {
    const pad = document.querySelector(".container");
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

    // selecting each square item
    const squareItems = pad.querySelectorAll(".grid-items");
    squareItems.forEach((item) => {
        item.addEventListener("mousemove", () => {
            item.style.backgroundColor = "pink";
        })
    })
}


// to let user draw 
function drawingTools(tools) {
    if (tools === 'random') {
        let pallete = ['#386641', '#6A994E', '#A7C957', '#F2E8CF', '#BC4749'];
        let randomColor = pallete[Math.floor(Math.random()*pallete.length)];
        //e.target.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
    }
    else if (tools === 'color') {
        
    }
}

function erase() {

}

function resetProgram() {
    window.location.reload();
}

// tools buttons
const randomColor = document.querySelector(".randommode").addEventListener("click", drawingTools("random"));
const drawbtn = document.querySelector(".draw").addEventListener("click", drawingTools("color"));
const eraserbtn = document.querySelector(".eraser").addEventListener("click", erase);
const resetbtn = document.querySelector(".reset").addEventListener("click", resetProgram);

// size buttons
const smallbtn = document.querySelector(".small").addEventListener("click", () => {makeGrid(6)});
const mediumbtn = document.querySelector(".medium").addEventListener("click", () => {makeGrid(9)});
const largebtn = document.querySelector(".large").addEventListener("click", () => {makeGrid(12)});

