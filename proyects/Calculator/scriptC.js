const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
let result=0;



for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){

    let number =  btns[i].getAttribute('data-num');

    screen.value += number;
    });
}


equalBtn.addEventListener('click',function(){
let value = eval(screen.value);
//screen.value = value !== undefined ? value  : alert('Introduce a value');

//if(value === 69) return screen.value = '( ͡° ͜ʖ ͡°)';

if( value !== undefined){
    screen.value = value.toFixed(2);
} else{
    alert('Please enter a numerical value.');
}
});

clearBtn.addEventListener('click',function(){
    screen.value = '';
});
