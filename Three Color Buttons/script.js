let RedButton = document.getElementById("red");
let GreenButton = document.getElementById("green");
let BlueButton = document.getElementById("blue");

RedButton.addEventListener("click", onButtonClick)
GreenButton.addEventListener("click", onButtonClicked);
BlueButton.addEventListener("click", onButtonClicks);

function onButtonClick() {
    document.body.style.backgroundColor = "red";
    alert("You clicked the red button");
}

function onButtonClicked() {
    document.body.style.backgroundColor = "green";
    alert("You clicked the green button");
}

function onButtonClicks() {
    document.body.style.backgroundColor = "blue";
    alert("You clicked the blue button");
}