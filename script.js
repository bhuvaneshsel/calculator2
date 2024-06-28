let container = document.querySelector(".container");
let displayElement = document.querySelector(".display")
let clearElement = document.querySelector(".AC");
let percentageElement = document.querySelector(".percentage");



let firstNumber = "";
let secondNumber = "";

let isFirstNumber = true;
let isCalculating = false;

let operator = "";

clearElement.addEventListener("click", (e) => {
    firstNumber = "";
    secondNumber = "";

    isFirstNumber = true;
    isCalculating = false;

    operator = "";
    displayElement.textContent ="";
})

percentageElement.addEventListener("click", (e) => {
    if (!isCalculating) {
        firstNumber = firstNumber/100;
        displayElement.textContent = firstNumber;
    }
    else {
        secondNumber = secondNumber/100;
        displayElement.textContent = secondNumber;
    }
})


container.addEventListener("click", (e) => {
    if (e.target.className.includes("number")) {
        if (!isCalculating) {
            firstNumber += e.target.textContent;
            displayElement.textContent = firstNumber;
        }
        else {
            secondNumber += e.target.textContent;
            displayElement.textContent = secondNumber;
        }
    }
    if (e.target.className.includes("operation") && !e.target.className.includes("equals")) {
        if (isCalculating) {
            displayElement.textContent = calculate(operator);
            firstNumber = displayElement.textContent;
            secondNumber ="";
            isCalculating = false;
            operator = e.target.className.split(" ")[1];
        } 
        operator = e.target.className.split(" ")[1];
        isCalculating = true;
    }
    if (e.target.className.includes("equals")) {
        if (isCalculating) {
            displayElement.textContent = calculate(operator);
            firstNumber = displayElement.textContent;
            secondNumber ="";
            isCalculating = false;
        }   
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

function subtract() {
    return firstNumber - secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}