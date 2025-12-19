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