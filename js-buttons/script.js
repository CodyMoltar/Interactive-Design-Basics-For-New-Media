let container = document.getElementById("container");

console.log(container);

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus ligula et ligula laoreet, at venenatis turpis tempus. Fusce suscipit, tortor non pulvinar lobortis, dui tellus euismod lorem, mollis interdum sapien urna a elit. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vehicula suscipit enim euismod euismod. Nulla ullamcorper ut odio quis mattis. Integer eget metus id lacus auctor condimentum id at purus. Etiam odio justo, consequat vestibulum posuere non, finibus vitae purus. Nulla vehicula feugiat egestas. Vestibulum fermentum enim a turpis faucibus blandit. Duis quis varius diam. In iaculis sapien ac commodo varius. Nullam consequat, leo convallis luctus rutrum, felis est porttitor tortor, a finibus nisl nisi a diam. Sed aliquam, leo eget eleifend facilisis, arcu arcu egestas odio, in imperdiet orci felis eget neque. Ut et enim porttitor, vestibulum leo quis, cursus nisl. Duis id lectus quis ex sollicitudin sagittis vel sed eros.";
let words = text.split(" ");
let index = 0;

let colors = ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1", "#4575b4","#313695"];

function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}



function createButton(){

    let button = document.createElement('button');

    // console.log(Math.floor(map(words[index].length, 0, 10, 0, colors.length)));

    // button.style.backgroundColor = colors[Math.floor(map(words[index].length, 0, 10, 0, colors.length))];

    button.innerHTML = words[index];
    if(index == words.length - 1){
        index = 0;
    } else {
        index++;
    }

    
    
    container.appendChild(button);

    button.addEventListener('click', function(){
        createButton(false);
        this.setAttribute('disabled', '');
    })
}

createButton();