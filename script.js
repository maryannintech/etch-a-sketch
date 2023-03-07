// setting dom variables
const pad = document.querySelector(".container");
const startbtn = document.createElement("button");

// buttons
const xsmallbtn = document.querySelector(".xsmall").addEventListener("click", function(){makeGrid(3);});
const smallbtn = document.querySelector(".small");
const mediumbtn = document.querySelector(".medium");
const largebtn = document.querySelector(".large");
const xlargebtn = document.querySelector(".xlarge");




// to make squares inside the grid
function makeGrid(number) {
    let size = number*number;
    for (let i = 0; i < size; i ++) {
        let square = document.createElement("div");
        pad.appendChild(square);
        square.style.cssText = "border: 1px solid grey; border-radius: 10px;"
    }
}




