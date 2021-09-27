//Henter html elemeneter
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
let antall_liv = document.getElementById('liv'); // Der 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let win = document.getElementById('win');

// kontroll variabler  for å sjekke vinner og randomisere btn
// funksjon med en parameter
 
function checker () {
    let random = Math.floor(Math.random()*2+1);
    if (random === 1 ) {
        antall_Poeng ++; 
        riktig_poeng.innerHTML = `Antall Poeng: ${antall_Poeng}`;
        CheckWinner ();
    } else {
        antall_Feil ++;
        feil_poeng.innerHTML = `Antall Feil: ${antall_Feil}`;
        checkLoser();
    }
}   

button.onclick = checker;  
button1.onclick = checker;

function checkWinner () {
    if (antall_Poeng == 10) {
    win.innerHTML = `<img src = "/images/fireworks.jpg">`; 
    } 
}

function checkLoser(){
    if(antall_Feil == 5){
    win.innerHTML = `<img src = "/images/gameover.jpg", width:" 50px", height: "50px">`;  

    }
}



let btn = 1;
let btn1 = 2;
let liv_Igjen = 5;
let  antall_Poeng = 0;
let antall_Feil = 0;
// random number som generer 

//  1 Lage en funksjon som lager 5 bilder
function liv () {
    for( let i = 0;  i <= 5;  i++) { 
    antall_liv.innerHTML += `<img src = "/images/person3.jpg">`; 
    }    
}

//Kalle funksjonen for å produsere 5 bilder
 liv ();



// Kontrollsetning for å kontrollere hvis man skal legge til poeng eller fjerne

if (random == btn) {
    // Legg til poeng til inner.html og øk antall_poeng med 1
    // skriv i template literal antall_poeng
    

}  else {
    // Hvis det er feil så kjør en for-loop som fjerner et bilde
    //Samtidig subthraher liv_igjen med 1

}


// Vinner betingelse
if (antall_Poeng = 10) {
    //vis et bilde og gratulerer spilleren
} else if (liv_Igjen = 0) {
    // Skriv du har tap og vis et annet bilde
} 
