const numberOneInput = document.getElementById('number1-input');
const numberTwoInput = document.getElementById('number2-input');

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divisionButton = document.getElementById('division-button');

const resultElement = document.getElementById('result');


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', sub)
multiplyButton.addEventListener('click', multi);
divisionButton.addEventListener('click', divide);


function add(event) {
    const number1 = parseFloat(numberOneInput.value);
    const number2 = parseFloat(numberTwoInput.value);
    resultElement.innerHTML = number1 + number2;
}


function sub(event) {
    const number1 = parseFloat(numberOneInput.value);
    const number2 = parseFloat(numberTwoInput.value);
    resultElement.innerHTML = number1 - number2;
}


function multi(event) {
    const number1 = parseFloat(numberOneInput.value);
    const number2 = parseFloat(numberTwoInput.value);
    resultElement.innerHTML = number1 * number2;
}


function divide(event) {
    const number1 = parseFloat(numberOneInput.value);
    const number2 = parseFloat(numberTwoInput.value);
    resultElement.innerHTML = number1 / number2;
}