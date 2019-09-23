const formElement = document.getElementById('form');
const inputElement = document.getElementById('number')
const resultElement = document.getElementById('result')

let numberToGuess = Math.round(Math.random() * 20);

formElement.addEventListener('submit', onFormSubmitted);

function onFormSubmitted(event) {
    event.preventDefault();

    if (inputElement.value == numberToGuess) {
        resultElement.innerHTML('Correct!')
    } else if (inputElement.value < numberToGuess) {
        resultElement.innerHTM('Too low!')
    } else if (inputElement.value > numberToGuess) {
        resultElement.innerHTM('Too high!')
    }

}