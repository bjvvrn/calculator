function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

function appendToDisplay() {
    const display = document.querySelector('#display');

    const numbers = document.querySelectorAll('.num');
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
        });
    });
}

function prepareOperation() {
    const display = document.querySelector('#display');

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            calculator.operator = operator.textContent;
            calculator.display = display.textContent;
            calculator.firstNum = +calculator.display;
            display.textContent = '';
        });
    });
}

function handleEquals() {
    const display = document.querySelector('#display');

    const equal = document.querySelector('#equal');
    equal.addEventListener('click', () => {
        calculator.display = display.textContent;
        calculator.secondNum = +calculator.display;
        calculator.firstNum = operate(
            calculator.firstNum, 
            calculator.secondNum, 
            calculator.operator
        );
        calculator.display = calculator.firstNum.toString();
        display.textContent = calculator.display;
    });
}

let calculator = {
    display: '',
    firstNum: null,
    secondNum: null,
    operator: null,
}