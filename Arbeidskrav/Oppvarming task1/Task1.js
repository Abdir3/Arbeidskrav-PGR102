// Getting elements from html
const btn = document.getElementById('btn');
let antallBilder = document.getElementById('antall-bilder');
const container = document.getElementById('div');

// initierer random til 0 
let random = 0;

// on-click kjører hovedfunksjonen
btn.onclick = pictureGenerator;

function pictureGenerator () {
  // hennter alle bildene for loopene har laget og gjør om fra html collection--> array
  let images = Array.from(document.getElementsByClassName('image'));
  
// hvis lengden på array er 0 altså ingen bilder så legg til
  if(!images.length){
    random = Math.floor(Math.random()*100+1)
    antallBilder.innerHTML = `Antall Bilder: ${random+1}`; 
   for(i = 0; i <random; i++) {
     container.innerHTML += `<img class= "image"  src = "/images/person1.jpg">`
   }
   // ellers fjern alle bildene ved å loope over arrayen og fjerne alle bildene
  }else{
    for(i=0;i <random;i++ ){
      images[i].remove()
      
    } 
    antallBilder.innerHTML = `Antall Bilder: 0`; 
  }



}





