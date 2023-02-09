fetch('./students_data.json').then((response) => response.json()).then((json) => main(json))

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


const screenEdgeMargin = 20;

const boxSize = 100;


function main(data){
    const students = data;

    students.forEach((element,i) => {
        
        const box = document.createElement('div');
        box.style.width = boxSize + 'px';
        box.style.height = boxSize + 'px';
        box.style.position = 'absolute';
        box.style.left = Math.random() * (screenWidth - screenEdgeMargin * 5) + screenEdgeMargin + 'px';
        box.style.top = (i * (boxSize + screenEdgeMargin)) + screenEdgeMargin + 'px';

        box.classList.add('box');

        box.style.backgroundImage = 'url(./profile.jpg)';

        box.innerHTML = element.name;

        document.getElementsByTagName('body')[0].append(box);
        
        console.log(element);

    });
}