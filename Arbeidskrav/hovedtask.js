//Henter html elemeneter
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
const bildeLiv = document.getElementById('liv'); // Der 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let win = document.getElementById('win');


// funksjon for å  randomiserer hvilken knapp som er riktig 
function checker () {
    let random = Math.floor(Math.random()*2+1);
    if (random === 1 ) {
        antall_Poeng ++; 
        riktig_poeng.innerHTML = `Antall Poeng: ${antall_Poeng}`;
        checkWinner ();
    } else {
        antall_Feil ++;
        feil_poeng.innerHTML = `Antall Feil: ${antall_Feil}`;
        checkLoser();
        remove();
    }
}   
// event som fører til at knappene fører til at funksjonen checker utføres
button.onclick = checker;  
button1.onclick = checker;
// sjekker vinner 
function checkWinner () {
    if (antall_Poeng == 10) {
    win.innerHTML = `<img src = "/images/fireworks.jpg">`; 
    } 
}
// sjekker om
function checkLoser(){
    if(antall_Feil == 5){
    win.innerHTML = `<img src = "/images/gameover.jpg">`;  
    
    }
}

// kontroll variabeler 
let liv_Igjen = 5;
let  antall_Poeng = 0;
let antall_Feil = 0;


//   Lager en funksjon som lager 5 bilder
function liv () {
    for( let i = 0;  i <= 5;  i++) { 
   bildeLiv.innerHTML += `<img src = "/images/person3.jpg">`; 
    }    
}
//Kalle funksjonen for å produsere 5 bilder
 liv ();

 //Funksjon for å fjerne bilder does not currently work...

 function remove () {
    const deletePictures = document.getElementById('liv');
    deletePictures.parentNode.removeChild(deletePictures.ChildNodes[0]);
    
 }



