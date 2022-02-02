//Default values
let num1;
let num2;
let currentOperator = null;

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

document.addEventListener("keydown", (e) => {
    operators = ["+", "-", "*", "/"];
    switch (true) {
        case Number.isInteger(Number(e.key)):
            setNum(e.key);
            break;
        case operators.includes(e.key):
            if (e.key === "/") {
                e.preventDefault();
                setOperator(e.key);
            } else {
                setOperator(e.key);
            }
            break;
        case e.key === "Enter":
            calculate();
            break;
        case e.key === "Backspace" || e.key === "Delete":
            deleteCurrent();
            break;
        case e.key === "Escape":
            clearAll();
        case e.key === "%":
            numAsPercentage();
            break;
        case e.key === ".":
            addDecimal();
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
    if (currentOperator !== null) calculate();
    num1 = dispResults.textContent;
    currentOperator = operator;
    dispEquation.textContent = `${num1} ${operator}`;
    dispResults.textContent = "";
}

function calculate() {
    num2 = dispResults.textContent;
    dispResults.textContent = round(operate(num1, num2, currentOperator));
    dispEquation.textContent = "";
    currentOperator = null;
}

function round(num) {
    return Math.round((num + Number.EPSILON) * 10000) / 10000;
}

function clearAll() {
    dispEquation.textContent = "";
    dispResults.textContent = "";
    num1 = "";
    num2 = "";
    currentOperator = null;
}

function deleteCurrent() {
    dispResults.textContent = dispResults.textContent.toString().slice(0, -1);
}

function numAsPercentage() {
    percentage = dispResults.textContent / 100;
    dispResults.textContent = percentage;
}

function positiveOrNegative() {
    if (dispResults.textContent.includes("-", 0)) {
        dispResults.textContent = dispResults.textContent.substring(1);
    } else {
        dispResults.textContent = "-" + dispResults.textContent;
    }
}

function addDecimal() {
    if (dispResults.textContent.includes(".")) return;
    dispResults.textContent += ".";
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
