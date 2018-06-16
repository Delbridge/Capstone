
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
var guessesleft = 7;
console.log(guessesleft)
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
     
              // *Changing the dashes into letters
                emptyArray[ramA.indexOf(keypressed)] = keypressed;   
                wordsLine[0].innerHTML = emptyArray.join(" ")
    
    if(emptyArray.indexOf(keypressed)>-1) {
          
                 
                //*go to the next level when array is solved 
            if(emptyArray.join("") == ramA && guessesleft<= 3  ){
                alert("got out of that one")
                // todo: add got out of rope sound
                window.location.reload()
              }
                if (emptyArray.join("") == ramA) {
                    alert( 'Oh yeah!, OnWards'); 
                    window.location.reload()     
        } 
    } 
    else{ 
            lettersGuessed.push(keypressed); 
            // for (j=guessesleft; j>0; j--){
                guessesleft --; 
                    alert("guess again :)" + " " + "You have" + " " + guessesleft + " " + "guesses left")
                //   todo: add rope tightening or putting on, tying sound
                     document.body.style.backgroundColor = "green";
                    //  todo: changing /dimming bacground color styling
                 if(guessesleft === 0){ 
                        alert("game over") 
                         var audio = new Audio('Male-Grunt.mp3');
                           audio.play();
                         var audio = new Audio('rope.wav');
                            audio.play();
                         document.body.style.backgroundImage = "url('Blood.mp4')";
                                setTimeout(function(){
                                      window.location.reload() }, 10000);
                 }
            
            
            lettersBox.innerHTML = lettersGuessed;
        //    guessesleft++;
            // console.log(lettersGuessed)
        }
});
     

 wordsLine[0].innerHTML = randomA().join(' ');
 

//hint Button
// for(i=0; i<hints.length; i++ ){
    button.addEventListener("click", function(){
          HintCircle.innerHTML = hintz;
           
})
      console.log(hintz)
// };

// appending the categories on the screen
category.innerHTML = descript;
console.log(descript)

   
