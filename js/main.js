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

const quotes = [
    {
        name: 'Sosuke Aizen',
        quote: 'Fear is necessary for evolution. The fear that one could be destroyed at any moment.'
    },
    {
        name:'Madara',
        quote:'As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love.'
    },

    {
        name:'Donquixote Doflamingo',
        quote:'Those who stand at the top determine whats wrong and whats right! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!'
    },

    {
        name:'Madara',
        quote:'When you fall in love, you love with all that you’ve got. You must learn to bear anger, hatred, keep your ego and attitude aside and handle things with care, calmness and love.'
    },
    {
        name:'Sosuke Aizen',
        quote: 'If one abandons all other abilities and focuses his strength entirely on a single specialized skill, then he can overcome even the greatest of powers.'
    },
    {
        name: 'Eminem',
        quote: "Nobody likes to fail. I want to succeed in everything I do, which isn’t much. But the things that I’m really passionate about, if I fail at those, if I’m not successful, what do I have?"
    },
    {
        name:'Monkey D. Luffy',
        quote: 'If you don’t take risks, you can’t create a future.'
    },
    {
        name:'Son Goku',
        quote:'Power comes in response to a need, not a desire. You have to create that need.'
    },
    {
        name:'The Joker',
        quote:'You truly are incorruptible, aren’t you? You won’t kill me out of some misplaced sense of self-righteousness. And I won’t kill you because you’re just too much fun. I think you and I are destined to do this forever.'
    },
    {
        name:'Bruce Wayner',
        quote:'People need dramatic examples to shake them out of apathy and I can’t do that as Bruce Wayne. As a man I’m flesh and blood, I can be ignored, I can be destroyed, but as a symbol, as a symbol I can be incorruptible.I can be everlasting.'
    }
];

let quoteAuthor = document.querySelector('#author');
let quote = document.querySelector('#quote');
let leftArrow = document.querySelector('#left')
let rightArrow = document.querySelector('#right')
let random = document.querySelector('#random')
let i=0;


rightArrow.addEventListener('click', rightA)

leftArrow.addEventListener('click', leftA)

random.addEventListener('click',randomQ)

function quoteB(){
    //let r= Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[i].quote;
    quoteAuthor.innerHTML = quotes[i].name;
}

function rightA(){
    if(i === quotes.length - 1){
        i=0;
    } else{
        i++;
    };

    quoteB();
}

function leftA(){
    if(i === 0){
        i = quotes.length - 1;
    } else{
        i--;
    };
    quoteB();
}

function randomQ(){
    let randomQuote= 0;
    do{
        randomQuote = Math.floor(Math.random()*quotes.length);
    } while(randomQuote === i);

   i = randomQuote
    quoteB();
}

randomQ();
setInterval(rightA,60000)