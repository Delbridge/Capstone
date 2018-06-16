
var hints = ["comes in a bunch on a vine", "uses the element He  on the periodic table", "to link together", "Beep beep, Richie","step right up, play and win", "I'm on a tree"]
var description = ["fruit", "thing", "noun", "movie", "attraction", "disriptive to nature/in nature"]
var Answers=["grapes", "balloon", "concatenate","IT" ,"carnival", "bark"]
 var random = Math.floor(Math.random() * Answers.length)//Randomizing the words in the array

// var hintsR = Math.floor(Math.random() * hints.length)
var hintz = (hints[random])
var ramA = (Answers[random]);//var ramA so the for loop can return the length of the array in a  randomized manner to be pushed
var descript = (description[random] )
// var random = Math.floor(Math.random()* description.length)
//*Push for the array words
var emptyArray = [];
var lettersGuessed =[];

//* Get HTML elements
var wordsLine = document.getElementsByClassName('wordsLine')
var lettersBox = document.getElementById('lettersBox')
var button = document.getElementById("HintButton")
var Restart= document.getElementById("Restart")
var categoty = document.getElementById("category")


let randomA = () => {
    for (let i=0; i<ramA.length; i++) {
         emptyArray.push("_");
       }
             return emptyArray;
 }

     //*keyPress for user input
     document.addEventListener("keypress", (event) => {
     var keypressed = String.fromCharCode(event.keyCode);

if(emptyArray.indexOf(keypressed)) {
           // *Changing the dashes into letters
            emptyArray[ramA.indexOf(keypressed)] = keypressed;   
            wordsLine[0].innerHTML = emptyArray.join(" ")
   
            //*go to the next level when array is solved
    if (emptyArray.join("") == ramA) {
        alert( 'Oh yeah!, OnWards');
        window.location.reload()

    } 
} 
else{
        lettersGuessed.push(keypressed);
        lettersBox.innerHTML = lettersGuessed;
        console.log(lettersGuessed)
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

// appending the categories on the screen
category.innerHTML = descript;
console.log(descript)

   
