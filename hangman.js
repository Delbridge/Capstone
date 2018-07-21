var hints = ["comes in a bunch on a vine", "a place to work out", "etymology of the word 'stupid'", "Beep beep, Richie","used with steel to produce an igniting spark", "I'm on a tree"]
var description = ["fruit", "place", "word", "movie", "rock", "disriptive to nature/in nature"]
var Answers=["grapes", "gym", "nice","it" ,"flint", "bark"]
 var random = Math.floor(Math.random() * Answers.length)//Randomizing the words in the array

// var hintsR = Math.floor(Math.random() * hints.length)
var hintz = (hints[random])
var ramA = (Answers[random]);//var ramA so the for loop can return the length of the array in a  randomized manner to be pushed
var descript = (description[random] )
// var random = Math.floor(Math.random()* description.length)
//! Push for the array words
var emptyArray = [];
var lettersGuessed =[];
var guessesleft = 7;
// console.log(guessesleft)
//! Get HTML elements
var wordsLine = document.getElementsByClassName('wordsLine')
var lettersBox = document.getElementById('lettersBox')
var button = document.getElementById("HintButton")
var categoty = document.getElementById("category")
// var video = document.getElementsByClassName("fullscreen-bg")


let randomA = () => {
    for (let i=0; i<ramA.length; i++) {
        emptyArray.push("_");
    }
 return emptyArray;
}
document.addEventListener("keypress", (event) => {            //! keyPress for user input
    var keypressed = String.fromCharCode(event.keyCode);
    emptyArray[ramA.indexOf(keypressed)] = keypressed;        //! Changing the dashes into letters   
    wordsLine[0].innerHTML = emptyArray.join(" ")

    if(emptyArray.indexOf(keypressed)>-1) {

        if(emptyArray.join("") == ramA && guessesleft<= 3  ){  //! go to the next level when array is solved 
            alert("phew got out of that one")
            // todo: add a got out of the rope sound
            document.body.style.backgroundImage = "url('escape.gif')";  
        }

        if(emptyArray.join("") == ramA) { 
            setTimeout(function(){
                alert( 'Oh yeah!, OnWards'); 
                window.location.reload() }, 1500);       
        } 
    } 

    else{ lettersGuessed.push(keypressed); 
        // for (j=guessesleft; j>0; j--){
        guessesleft --; 
        alert("guess again :)" + " " + "You have" + " " + guessesleft + " " + "guesses left")

        if(guessesleft === 6){ 
            document.body.style.backgroundColor = " rgb(168, 164, 164";
        }
        
        else if(guessesleft === 5){
            document.body.style.backgroundColor =  "rgb(136, 134, 134)";
        }

        else if(guessesleft === 4){
            document.body.style.backgroundColor = "rgb(102, 101, 101)";
        }

        else if(guessesleft === 3){
            document.body.style.backgroundColor = "rgb(88, 87, 87)";
        }

        else if(guessesleft === 2){
            document.body.style.backgroundColor = "rgb(65, 58, 58)";
        }

        else if(guessesleft === 1){
            document.body.style.backgroundColor = "rgb(48, 44, 44)";
        }

            //todo: add rope tightening or putting on, tying sound
        else if(guessesleft === 0){ 
        document.body.style.backgroundColor = "black";
            alert("game over") 
            var audio = new Audio('Male-Grunt.mp3');
                audio.play();
            var audio = new Audio('rope.wav');
                    audio.play();
            setTimeout(function(){
                window.location.reload() }, 10000);
        }
        //! Appending the letters guessed on the screen
        // for some reason it works here and not down there with the others
        lettersBox.innerHTML = lettersGuessed;
        //guessesleft++;
        // console.log(lettersGuessed)
        
    }
});
     


// =========================

//! Appending the answers WordLine on the screen
 wordsLine[0].innerHTML = randomA().join(' ');
 
//! Appending the hints to the screen
// for(i=0; i<hints.length; i++ ){
 button.addEventListener("click", function(){
     HintCircle.innerHTML = hintz;       
})
//   console.log(hintz)
// };

//! Appending the categories to the scren
category.innerHTML = descript;
// console.log(descript)

   
