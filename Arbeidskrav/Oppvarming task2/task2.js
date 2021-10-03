'use strict mode'
// Henter alle html elements og lagerer dem i en variabel
let personOne = document.getElementById('person-one');
let persontwo = document.getElementById('person-two');
let output = document.getElementById('div');

// funksjons for sjekke hvilket bilde som er riktig
function randomChecker () {
    let random = Math.floor(Math.random()*2+1)
    personOne = 1;
    persontwo = 2;  
    
    if(random == personOne) {
       output.innerHTML = `<h1> Det er riktig ersonen har en katt! :)</h1>
       <img src = "/images/cat.jpg">`
    } else {
        output.innerHTML = `<h1> Det er feil! Personen har en frosk! :o </h1>
        <img src = "/images/frog.jpg">`
    }


}

// on-click events som kjører funksjon ovenfor
personOne.onclick = randomChecker;
persontwo.onclick = randomChecker;