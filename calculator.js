const displayDefault = null;
const displayVal = document.querySelector(".display");
displayVal.textContent = displayDefault;

let num1;
let num2;
let operation = null;

//Button Selectors
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const miscButtons = document.querySelectorAll(".misc");

numButtons.forEach((button) =>
    button.addEventListener("click", () => setNum(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperation(button.textContent))
);

equalButton.addEventListener("click", calculate);

//Button operation functions
function setNum(number) {
    if (operation !== null) {
        displayVal.textContent = "";
        displayVal.textContent += number;
        num2 = displayVal.textContent;
    } else {
        displayVal.textContent += number;
    }
}

function setOperation(operator) {
    num1 = displayVal.textContent;
    operation = operator;
    displayVal.textContent = operator;
}

function calculate() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    displayVal.textContent = operate(num1, num2, operation);
}

//Basic Math Functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return num2 === 0 ? null : divide(num1, num2);

        default:
            break;
    }
}
