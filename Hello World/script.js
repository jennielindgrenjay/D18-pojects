let myButton = document.getElementById("button")
let myText = document.getElementById("Hello World!")

myButton.addEventListener("click", onButtonClicked);

function onButtonClicked() {
    alert("Hello World!");
}