const calculateButton = document.getElementById('button-calculate');
const pizzaSizeInput = document.getElementsByName('pizza-size');
const resultElement = document.getElementById('result');

const extraCheese = document.getElementById('topping-extra-cheese');
const kebab = document.getElementById('topping-kebab');
const pepperoni = document.getElementById('topping-pepperoni');
const pineapple = document.getElementById('topping-pineapple');
const redOnion = document.getElementById('topping-red-onion');

calculateButton.addEventListener('click', calculatePrice);

function calculatePrice(event) {
    let price = 0;

    if (pizzaSizeInput[0].checked) {
        price = price + parseFloat(pizzaSizeInput[0].value)
    }
    if (pizzaSizeInput[1].checked) {
        price = price + parseFloat(pizzaSizeInput[1].value)
    }
    if (pizzaSizeInput[2].checked) {
        price = price + parseFloat(pizzaSizeInput[2].value)
    }

    if (extraCheese.checked) {
        price = price + parseFloat(extraCheese.value)
    }
    if (kebab.checked) {
        price = price + parseFloat(kebab.value)
    }
    if (pepperoni.checked) {
        price = price + parseFloat(pepperoni.value)
    }
    if (pineapple.checked) {
        price = price + parseFloat(pineapple.value)
    }
    if (redOnion.checked) {
        price = price + parseFloat(redOnion.value)
    }
    resultElement.innerHTML = price;
    console.log(price);
}