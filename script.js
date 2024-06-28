let container = document.querySelector(".container");
let displayElement = document.querySelector(".display")

let firstNumber = "";
let secondNumber = "";

let isFirstNumber = true;
let isCalculating = false;

let operator = "";





container.addEventListener("click", (e) => {
    if (e.target.className.includes("number")) {
        if (isFirstNumber === true) {
            firstNumber += e.target.textContent;
            displayElement.textContent = firstNumber;
        }
        else {
            secondNumber += e.target.textContent;
            displayElement.textContent = secondNumber;
            isCalculating = true;
        }
        
    }
    if (e.target.className.includes("equals")) {
        if (isCalculating) {
            console.log(operator);
            displayElement.textContent = calculate(operator);
        }
    }
    if (e.target.className.includes("operation") && !e.target.className.includes("equals")) {
        operator = e.target.className.split(" ")[1];
        console.log(operator);
        isFirstNumber = false;
    }
})

function calculate(operator) {
    if (operator.includes("add")) {
        return add();
    }
    else if (operator.includes("subtract")) {
        return subtract();
    }
    else if (operator.includes("divide")) {
        return divide();
    }
    else if (operator.includes("multiply")) {
        return multiply();
    }
}

function add() {
    return +firstNumber + +secondNumber;
}

function subtact() {
    return firstNumber - secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}