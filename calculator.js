const add = function (num1, num2) {
    return num1 + num2;
};
const subtract = function (num1, num2) {
    return num1 - num2;
};
const multiply = function (num1, num2) {
    return num1 * num2;
};
const divide = function (num1, num2) {
    return num1 / num2;
};

const operate = function (num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return num2 === 0 ? null : divide(num1, num2);
            break;

        default:
            break;
    }
};
