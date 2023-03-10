let overlay = document.getElementById("overlay");

function add_glitch(x, y){
    // console.log("howdy");
    
    const number_of_glitches = Math.floor(Math.random() * 30);

    for(let i = 0; i < number_of_glitches; i++){

        const glitch = document.createElement('div')
        glitch.classList.add('glitch');
        glitch.style.width = '1px'
        glitch.style.height = '1px'

        let left = Math.random() * 20 + x;
        let top = Math.random() * 20 + y;
        glitch.style.left = left + 'px';
        glitch.style.top = top + 'px';

        glitch.style.backgroundColor = 'black';

        overlay.appendChild(glitch);

    }

}

// window.setInterval(add_glitch, 5);
window.addEventListener('mousemove', function(e){
    // console.log(e);
    add_glitch(e.clientX, e.clientY)
});