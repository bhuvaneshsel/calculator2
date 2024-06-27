let container = document.querySelector(".container");
let displayElement = document.querySelector(".display")

let firstNumber = "";
let secondNumber = "";

let isFirstNumber = true;
let isCalculating = false;





container.addEventListener("click", (e) => {
    if (e.target.className.includes("number")) {
        if (isFirstNumber === true) {
            firstNumber += e.target.textContent;
            displayElement.textContent = firstNumber;
        }
        else {
            secondNumber += e.target.textContent;
            displayElement.textContent = secondNumber;
        }
        
    }
    if (e.target.className.includes("operation")) {
        if (isCalculating === true) {
            calculate(e.target.className)
        }
        isFirstNumber = false;
    }
})

function calculate() {
    
}