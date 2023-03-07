// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");
const xsmallbtn = document.querySelector(".xsmall");
const smallbtn = document.querySelector(".small");
const mediumbtn = document.querySelector(".medium");
const largebtn = document.querySelector(".large");
const xlargebtn = document.querySelector(".xlarge");


// to make squares inside the grid
function makeGrid(number) {
    for (let i = 0; i < 256; i ++) {
        let square = document.createElement("div");
        square.style.cssText = "border: 2px black solid;"
        pad.appendChild(square);
    }
}




