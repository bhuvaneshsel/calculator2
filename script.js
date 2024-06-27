let container = document.querySelector(".container");
let displayElement = document.querySelector(".display")

let numberOne = "";
let numberTwo = "";

let isNumberOne = true;
let isAdding = false;
let isMultipying = false;
let isDividing = false;
let isSubtracting = false;

container.addEventListener("click", (event) => {
    if (event.target.className === "number" || event.target.className === "number zero") {
        if (isNumberOne) {
            numberOne += event.target.textContent;
            displayElement.textContent = numberOne;
            console.log(numberOne)
        }
        else {
            numberTwo += event.target.textContent;
            displayElement.textContent = numberTwo;
            console.log(numberTwo)
        }
      
    }
    if (event.target.className.includes("operation") && !event.target.className.includes("equals") ) {
        isNumberOne = false;
        if (event.target.className.includes("add"))
    }
})

function add() {
    return +numberOne + numberTwo;
}

function divide() {
    return +numberOne / numberTwo;
}

function multiply() {
    return +numberOne * numberTwo;
}

function subtract() {
    return +numberOne / numberTwo;
}