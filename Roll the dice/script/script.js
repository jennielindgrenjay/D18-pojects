let resultElement = document.getElementById('result');

let diceButton = document.getElementById('dicebutton');

diceButton.addEventListener('click', onDiceButtonRoll);

function onDiceButtonRoll() {

    let x = Math.floor(Math.random() * 6) + 1;
    let s = Math.floor(Math.random() * 6) + 1;
    
        if ( x == 1) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-1.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        if (x == 2) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-2.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        if (x == 3) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-3.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        if (x == 4) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-4.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        if ( x == 5) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-5.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        if (x == 6) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-6.PNG';
            let src = document.getElementById('image1');
        
            src.appendChild(img);
        }
        //Image2 part
        if (s == 1) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-1.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
        if( s == 2) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-2.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
        if (s == 3) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-3.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
        if ( s == 4) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-4.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
        if (s == 5) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-5.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
        if (s == 6) {
            let img = document.createElement('img');

            img.src = '/Image/dice-side-6.PNG';
            let src = document.getElementById('image2');
        
            src.appendChild(img);
        }
   
    resultElement.innerHTML = x + s;
    
}

let rerollDice = document.getElementById('reroll-dice');

rerollDice.addEventListener('click', rollDiceAgain);

function rollDiceAgain() {
    
    onDiceButtonRoll();
        
    reloade();
}

function reloade() {
    setTimeout(function(){
        window.location.reload(1);
     }, 3500);
}
