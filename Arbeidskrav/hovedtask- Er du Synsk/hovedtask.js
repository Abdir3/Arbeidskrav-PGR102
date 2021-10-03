//Henter alle html elementer som jeg kommer til å bruke i funksjonene
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
const bildeLiv = document.getElementById('liv'); 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let text = document.getElementById('text');
const body = document.getElementById('win');
let win = document.getElementById('win');
let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');
 let input = prompt('Hvor mange liv vil du ha?');
// kontroll variabeler for funksjonene 
let liv_Igjen = input;
let  antall_Poeng = 0;
let antall_Feil = 0;



// Hovedfunksjon, randomiserer knappene, og kjører de andre funksjonene
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
        
       
    }
}   
// Event knapper som kjører hovedfunksjonen
button.onclick = checker;  
button1.onclick = checker;

// funksjon som sjekker vinner  og avslutter hvis spilleren har vunnet ved å gjette riktig 10 ganger
function checkWinner () {
    if (antall_Poeng == 10) {
        bildeLiv.remove();
        feil_poeng.remove();
        riktig_poeng.remove();
        feil_poeng.remove ();
        button.remove();
        button1.remove();
        text.remove();
      win.innerHTML = `<img src = "/images/fireworks.jpg">`; 
    } 
}

// Funksjon som fjerner liv visuelt og avslutter spillet når spilleren har gjettet feil 5 ganger
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
    else if(antall_Feil == input){
    win.innerHTML = `<img src = "/images/cat.png">`;  
    bildeLiv.remove();
    feil_poeng.remove();
    riktig_poeng.remove();
    feil_poeng.remove ();
    button.remove();
    button1.remove();
    text.remove();
    }
}


                      // QUESTIONS 

// Right now I am struggeling to add back lives as imgs so when 3 
// could I use for loop here instead?
//  add images based on user input



