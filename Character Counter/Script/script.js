function characterCount(obj) {
    document.getElementById('characterCount').innerHTML = obj.value.length + '<br> CHARACTERS';
    
}

function wordCount(val) {
    let wom = val.match(/\S+/g);
    return {
        words : wom ? wom.length : 0
    };
}

let textCount = document.getElementById('textContent');
let showWordCount = document.getElementById('wordCount');

textContent.addEventListener("input", function() {
    let v = wordCount(this.value);
    showWordCount.innerHTML = (
          v.words + " <br> WORDS"
    );

}, false);

