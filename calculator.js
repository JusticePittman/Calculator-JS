//Default values
let num1;
let num2;
let currentoperator = null;

//Display Selectors
const display = document.querySelector(".display");
const dispEquation = document.querySelector(".equation");
const dispResults = document.querySelector(".results");

//Button Selectors
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const miscButtons = document.querySelectorAll(".misc");

numButtons.forEach((button) =>
    button.addEventListener("click", () => setNum(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
);

equalButton.addEventListener("click", calculate);

miscButtons.forEach((button) => {
    switch (button.textContent) {
        case "CLR":
            button.addEventListener("click", clearAll);
            break;
        case "DEL":
            button.addEventListener("click", deleteCurrent);
            break;
        case "%":
            button.addEventListener("click", numAsPercentage);
            break;
        case "+/-":
            button.addEventListener("click", positiveOrNegative);
            break;
        case ".":
            button.addEventListener("click", addDecimal);
            break;
        default:
            break;
    }
});

//Button operation functions
function setNum(number) {
    dispResults.textContent += number;
}

function setOperator(operator) {
    num1 = dispResults.textContent;
    currentOperator = operator;
    dispEquation.textContent = `${num1} ${operator}`;
    dispResults.textContent = "";
}

function calculate() {
    num2 = dispResults.textContent;
    dispResults.textContent = operate(num1, num2, currentOperator);
    dispEquation.textContent = "";
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
    num1 = Number(num1);
    num2 = Number(num2);
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
