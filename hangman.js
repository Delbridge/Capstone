
var hints = ["comes in a bunch on a vine", "uses the element He  on the periodic table", "to link together", "Beep beep, Richie","step right up, play and win", "I'm on a tree"]
var description = ["fruit", "thing", "noun", "movie", "attraction", "disriptive to nature/in nature"]
var Answers=["grape", "balloon", "concatenate","IT" ,"carnival", "bark"]
 var random = Math.floor(Math.random() * Answers.length)//Randomizing the words in the array
var emptyArray = [];//Push for the array words
var lettersGuessed =[];
var hintsR = Math.floor(Math.random() * hints.length)
var hintz = (hints[hintsR])
var ramA = (Answers[random]);//var ramA so the for loop can return the length of the array in a  randomized manner to be pushed

var wordsLine = document.getElementsByClassName('wordsLine')
var lettersBox = document.getElementById('lettersBox')
var button = document.getElementById("HintButton")
var Restart= document.getElementById("Restart")
console.log(ramA);

let randomA = () => {
    for (let i=0; i<ramA.length; i++) {
         emptyArray.push("_");
       }
   return emptyArray
 }
 
  //keyPress for user input
    document.addEventListener("keypress", (event) => {
     var keypressed = String.fromCharCode(event.keyCode);

if (ramA.indexOf(keypressed)>-1){  

// Changing the dashes into letters
  emptyArray[ramA.indexOf(keypressed)] = keypressed;   
          wordsLine[0].innerHTML = emptyArray.join(" ")
   

//go to the next level when array is solved
  if (emptyArray.join("") == ramA) {
     alert( 'Oh yeah!, OnWards');
    window.location.reload()


    if(emptyArray.indexOf(pressed) == -1) {
       alert("gameOver") //body.style.backgroundColor = "green";
    }
}     
}
else //(rim.indexOf(pressed) == -1)
{  // adding to the incorrect word box/array
    lettersGuessed.push(keypressed);
    lettersBox.innerHTML = lettersGuessed;
    
    // if(lettersGuessed= 6){/////////////////
    //    body.style.backgroundColor = "green";///////////////////////

    // }
    // pressNull.style.backgroundColor="gold";
    //  console.log(lettersGuessed)

}

});  
 wordsLine[0].innerHTML = randomA().join(' ');

//hint Button

for(i=0; i<hints.length; i++ ){
    button.addEventListener("click", function(){
    HintCircle.innerHTML = hintz;
})
console.log(hintz)
};

