//Henter alle html elementer som jeg kommer til å bruke i funksjonene
let button = document.getElementById('btn');
let button1 = document.getElementById('btn1');
const bildeLiv = document.getElementById('liv'); 
let riktig_poeng = document.getElementById('riktig');
let feil_poeng = document.getElementById('feil');
let text = document.getElementById('text');
const body = document.getElementById('win');
 let input = prompt('Hvor mange liv vil du ha?');


 // kontroll variabeler for funksjonene 
let liv_Igjen = input;
let  antall_Poeng = 0; 
let antall_Feil = 0;  

// Event knapper som kjører hovedfunksjonen
button.onclick = checker;  
button1.onclick = checker;

//Lager et objekt for tallene 3,5 og 7 og setter disse til true 
let liv = 
    {
        3: true,
        5: true,
        7: true
    }
 

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
    } else {
        antall_Feil ++;
        liv_Igjen --; 
        feil_poeng.innerHTML = `Antall Feil: ${antall_Feil}`;
        // jeg legger klasse til img og får tak i denne via html collection, gåt til index 0 som er det første bilde.
        document.getElementsByClassName('life')[0].remove()  
        checkLoser()
    }

    if(antall_Poeng === 3 || antall_Poeng === 5 || antall_Poeng === 7 ){
         /* Hvis tallet er 3,5 eller 7 vil den sjekke objektet "antall liv" og hvis den er true legger den til 
          et bilde og setter den verdien til false. Dette fordi  hvis du har 3 riktig og den har lagt til et bilde,
           og du gjetter feil er verdien forsatt 3, i denne scenarion vil den lagt til et bilde men siden vi 
           gjorde 3 til false vil den ikke legge til et bilde hvis du skulle gjette feil når du har enten 3, 5 eller 7 poeng. */ 
        if(liv[antall_Poeng])  {
            bildeLiv.innerHTML += `<img class = 'life' src="/images/person3.png" alt="">`
        liv[antall_Poeng] = false
        liv_Igjen++
        }
    }
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

// Funksjon som fjerner liv visuelt og avslutter spillet når spilleren har gjettet feil 5 ganger



                      // QUESTIONS 

// Right now I am struggling to add back lives as imgs so when 3 
// could I use for loop here instead?
//  add images based on user input



