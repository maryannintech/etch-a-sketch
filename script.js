// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");



// to make squares inside the grid
function makeGrid(number) {
    for (let i = 0; i < 256; i ++) {
        let square = document.createElement("div");
        pad.appendChild(square);
    }
}




