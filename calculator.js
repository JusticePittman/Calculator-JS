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
    displayVal.textContent += number;
}

function setOperation(operator) {
    displayVal.textContent += ` ${operator} `;
}

function calculate() {
    // num1 = parseInt(num1);
    // num2 = parseInt(num2);
    calculation = displayVal.textContent.split(" ");
    num1 = parseInt(calculation[0]);
    num2 = parseInt(calculation[2]);
    operator = calculation[1];
    displayVal.textContent = operate(num1, num2, operator);
    // displayVal.textContent = operate(num1, num2, operator);
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
