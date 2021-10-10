//Henter alle html elementer som jeg kommer til å bruke i funksjonene
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
const bildeLiv = document.getElementById('liv'); 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let text = document.getElementById('text');
const body = document.getElementById('win');
 let input = prompt('Vel antall forsøk du ønsker', 'Forsøk = Liv //Skriv kun tall');


 // kontroll variabeler for funksjonene 
let liv_Igjen = input;
let  antall_Poeng = 0; 
let antall_Feil = 0;  

// Event knapper som kjører hovedfunksjonen
button.onclick = checker;  
button1.onclick = checker;

//Lager et objekt for tallene 3,5 og 7 og setter disse til true, slik at jeg kan bruke dem senere
/*let liv = 
    {
        3: true,
        5: true,
        7: true
    }
 */

// Lager en for-loop som lager antall liv  visuelt dynamisk basert på bruker-input
for(let i = 0; i < input; i++){
    bildeLiv.innerHTML += `<img class = 'life' src="/images/person3.png">`; 
}


// Hovedfunksjon, randomiserer knappene, og kjører de andre funksjonene
function checker () {
    let random = Math.floor(Math.random()*2+1);
    if (random === 1 ) {
        antall_Poeng ++; 
        riktig_poeng.innerHTML = `Antall Poeng: ${antall_Poeng}`;
        checkWinner ();
    }
        if(antall_Poeng === 3 || antall_Poeng === 5 || antall_Poeng === 7 ){
            bildeLiv.innerHTML += `<img class = 'life' src="/images/person3.png" alt="">`
            liv_Igjen++   
            checkWinner ();
    } else {
        antall_Feil ++;
        liv_Igjen --; 
        feil_poeng.innerHTML = `Antall Feil: ${antall_Feil}`;
        // jeg legger klasse til img og får tak i denne via html collection, gåt til index 0 som er det første bilde.
        document.getElementsByClassName('life')[0].remove()  
        checkLoser()
    }

    /*if(antall_Poeng === 3 || antall_Poeng === 5 || antall_Poeng === 7 ){
        
        if(liv[antall_Poeng])  {
            bildeLiv.innerHTML += `<img class = 'life' src="/images/person3.png" alt="">`
        liv[antall_Poeng] = false
        liv_Igjen++
        }
    }*/ 
}   


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
function checkLoser () {
    if (liv_Igjen == 0 ) {
        bildeLiv.remove();
        feil_poeng.remove();
        riktig_poeng.remove();
        feil_poeng.remove ();
        button.remove();
        button1.remove();
        text.remove();
        win.innerHTML =`<img src = "/images/cat.png">`;  
}
}



