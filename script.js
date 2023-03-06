// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");
startbtn.addEventListener("click", makeGrid());
pad.appendChild(startbtn);

// to make squares inside the grid
function makeGrid(number) {
    for (let i = 0; i < 30; i ++) {
        let square = document.createElement("div");
        pad.appendChild(square);
    }
}




