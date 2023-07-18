function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function devide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operato) {
    return operato(num1, num2);    
}

//calculator(10, 2, add);
calculator(20, 3, multiply);