var AddImageBtn = document.getElementById("btn");
var numberofImages = document.getElementById("number-of-images");
var outputDiv = document.getElementById("output-div")

var randomNumber;




function AddImages() {
    outputDiv.innerHTML = ""

  randomNumber = Math.floor(Math.random()*100+1)
  
  for (let i = 0; i <=randomNumber ; i++) {
   
    outputDiv.innerHTML += `<img src = "/images/person1.jpg">`
   
  }
   
  for (let i = randomNumber; i <=0 ; i--) {
   
   outputDiv.innerHTML += `<img src = "person4.jpg">`
  
 }
  

  numberofImages.innerHTML = randomNumber;
}
AddImageBtn.onclick=AddImages
