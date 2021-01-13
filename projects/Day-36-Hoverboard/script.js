const container = document.querySelector('#container');
const squares = 1020; //Number os squares we want 1020
const colors = ['#0a0908','#6ab547','#22333b','#ffffff','#d00000','#1628ca'];

for(let i = 0; i < squares;i++){
    let square = document.createElement('div'); //creating
    square.classList.add('square'); //adding class

    //adding the event listener to every square

    square.addEventListener('mouseover', ()=> setColor(square))

    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square); //adding it
}

function setColor(param){

    let color = getColor();

    param.style.background = color;

    param.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(param){
    param.style.background = '';
    param.style.boxShadow = '';
}

function getColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}