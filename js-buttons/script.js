let container = document.getElementById("container");

console.log(container);

let text = "Hi everyone, let's have a nice lecture. Or will we.";
let words = text.split(" ");
let index = 0;

let colors = ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1", "#4575b4","#313695"];

function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

function createButton(){

    let button = document.createElement('button');

    button.innerHTML = words[index];
    if(index == words.length - 1){
        index = 0;
    } else {
        index++;
    }
    
    container.appendChild(button);

    button.addEventListener('click', function(){
        createButton();
        this.setAttribute('disabled', '');
    })
}

createButton();