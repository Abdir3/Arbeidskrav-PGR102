//Henter alle html elementer som jeg kommer til å bruke i funksjonene
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
const bildeLiv = document.getElementById('liv'); // Der 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let win = document.getElementById('win');
let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');


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
    bildeLiv.remove();
    feil_poeng.remove();
    riktig_poeng.remove();
    feil_poeng.remove ();
    win.innerHTML = `<img src = "/images/fireworks.jpg">`; 
    } 
}
// Funksjon som fjerner liv visuelt og når spiller har fått 5 feil avslutter den spillet 
function checkLoser(){
    if(antall_Feil == 1) {
        img1.remove();
    } else if (antall_Feil ==2) {
        img2.remove();
    
    } else if (antall_Feil ==3) {
        img3.remove();
    
    } else if (antall_Feil ==4) {
       img4.remove();
    }
    else if(antall_Feil == 5){
    win.innerHTML = `<img src = "/images/cat.png">`;  
    bildeLiv.remove();
    feil_poeng.remove();
    riktig_poeng.remove();
    feil_poeng.remove ();
    win.remove
    }
}

// kontroll variabeler for funksjonene ovenfor for å kontrollere spillet
let liv_Igjen = 5;
let  antall_Poeng = 0;
let antall_Feil = 0;






