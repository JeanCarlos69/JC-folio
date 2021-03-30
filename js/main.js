/* Nav */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
/* Nav end */


/* QUOTES */

let quoteAuthor = document.querySelector('#author');
let quote = document.querySelector('#quote');
let leftArrow = document.querySelector('#left')
let rightArrow = document.querySelector('#right')
let random = document.querySelector('#random')
let i=0;
let lengthJSON = 13;

const getQuotes = async() =>{

    const response = await fetch('js/quotes.json')
    const data = await response.json()

    return data
}



rightArrow.addEventListener('click', RightA)

leftArrow.addEventListener('click', leftA)

random.addEventListener('click',randomQ)

function QuoteBlock(){

    getQuotes().then(data => {
        quote.innerHTML = data[i].quote;
        quoteAuthor.innerHTML = data[i].name;
    });

}

// function for the right arrow
function RightA(){
    /*
    if i valiable is equal to lengthJSON (last element of the JSON file) 0 will be its new value 
    this way it starts with the first object of json 
    */
    i = (i=== lengthJSON -1) ? 0 : ++i
   
    QuoteBlock();
}
// function for the left arrow
function leftA(){
   
    i = (i === 0) ? lengthJSON -1 : --i
    QuoteBlock();
}

// function for the random arrow
function randomQ(){
    let randomQuote= 0;

    //this is for preventing that the random arrow use the same quote that it already has
    do{
        randomQuote = Math.floor(Math.random()*lengthJSON);
    } while(randomQuote === i);

    i = randomQuote
    QuoteBlock();
}

//when the page has been refreshed it genereate a random number and that number is asigned to i
randomQ();

setInterval(RightA,60000)