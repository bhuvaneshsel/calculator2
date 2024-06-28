let container = document.querySelector(".container");
let displayElement = document.querySelector(".display")
let clearElement = document.querySelector(".AC");
let percentageElement = document.querySelector(".percentage");
let negationElement = document.querySelector(".negation");



let firstNumber = "";
let secondNumber = "";
let tempSecondNumber = "";

let isFirstNumber = true;
let isCalculating = false;

let operator = "";
let equalsAgain = false;

clearElement.addEventListener("click", (e) => {
    firstNumber = "";
    secondNumber = "";

    isFirstNumber = true;
    isCalculating = false;

    operator = "";
    displayElement.textContent ="";
    equalsAgain = false;
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

negationElement.addEventListener("click", () => {
    if (!isCalculating) {
        firstNumber = -(+firstNumber);
        displayElement.textContent = firstNumber;
    }
    else {
        secondNumber = -(+secondNumber);
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
        equalsAgain = false;
    }
    if (e.target.className.includes("equals")) {
        if (equalsAgain) {
            firstNumber = displayElement.textContent;
            secondNumber = tempSecondNumber;
            displayElement.textContent = calculate(operator);
            firstNumber = displayElement.textContent;
            secondNumber = "";
            isCalculating = false;
            equalsAgain = true;
        }
        if (isCalculating || !equalsAgain) {
            displayElement.textContent = calculate(operator);
            firstNumber = displayElement.textContent;
            tempSecondNumber = secondNumber;
            secondNumber ="";
            isCalculating = false;
            equalsAgain = true;
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