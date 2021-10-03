const btn = document.getElementById('btn');
let antallBilder = document.getElementById('antall-bilder');
const container = document.getElementById('div');


function pictureGenerator () {
 let random = Math.floor(Math.random()*100+1)
 antallBilder.innerHTML = ` Antall Bilder: ${random+1}`; 
for(i = 0; i <=random; i++) {
  container.innerHTML += `<img src = "/images/person1.jpg">`
   
}
}

// How do I clear the screen without using the remove function? 
// How do I acess the JS generated imgs from a for loop



 


btn.onclick = pictureGenerator;

