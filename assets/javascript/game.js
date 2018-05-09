$(document).ready(function() {



// GLOBAL VARIABLES

// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

// Used at before game begins
var messageBlock = "PRESS ANY KEY TO GET STARTED!";
document.getElementById("start").innerText = messageBlock;

// initialize game
function initializeGame () {
  document.getElementById("start").innerText = messageBlock;
  
}

// Win tally
var wins = 0;
document.getElementById("win-total").innerText = wins;

// Holds the letters already guessed
var guessLetterArray = [];

// The number of letters remaining that are unguessed
// var remainingLetters = currentWord.length;

function setCurrentWord() { 
  // Get a random word from the wordBank array
  var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(currentWord);

  // Sets up an array of underlines equal to the length of currentWord
  var answerArray = [];
  for (i = 0; i < currentWord.length; i++) {
  answerArray[i] = "_";
  }
  // Combine all blanks in answerArray with a space in between to a string
  answerString = answerArray.join(" ");
  document.getElementById("current-word").innerText = answerString;
  // Sets the number of total guesses you have
  var guessTotal = currentWord.length + 5;
  document.querySelector("#guess-remaining").innerText = guessTotal;

  function keyPress() {
    // Determines which key was pressed
    document.onkeyup = function (event) {
      var userGuess = event.key.toUpperCase();
      document.getElementById("start").innerText = " ";
      /*for (var i = 0; i < guessLetterArray.length; i++) { if (guessLetterArray[i] !== userGuess) {
        guessLetterArray.push(userGuess);
        guessLetter = guessLetterArray.join(" ");
      }*/
        var nextSplit = currentWord.split("");
        // console.log(nextSplit);
        // console.log("length of string", currentWord.length);
        // Checks if guess is in currentWord and if it is then add it to our answer and subtract from the remaining letters to guess
        for (var j = 0; j < currentWord.length; j++) {
          if (nextSplit[j] === userGuess) {
            answerArray[j] = userGuess;
            // remainingLetters--;
            // console.log("remaining", remainingLetters);
            // console.log(answerArray);
            answerString = answerArray.join(" ");
            document.getElementById("current-word").innerHTML = answerString;
            guessLetterArray.push(userGuess);
            guessLetter = guessLetterArray.join(" ");
            //document.getElementById("#guess-letters").innerHTML = guessLetter;
            console.log("guess", guessLetter);
          }   
        }
        guessTotal--;
        document.getElementById("guess-remaining").innerText = guessTotal;
        console.log(guessTotal);

        
        winChecker()
      }
    
      function winChecker () {
        var answerSplit = currentWord.split("");
        console.log("winChecker", answerSplit);
        console.log("answer", answerArray);
        var counter = 0;
        for (var k =0; k < currentWord.length; k++) {
          // console.log( answerSplit[k]);
          if (answerSplit[k] === answerArray[k]) {
            counter++;
          }  
        }
        if (counter == currentWord.length) {
          wins++;
          document.getElementById("win-total").innerText = wins;

          console.log("success");
        }
      }
  }
  keyPress();
}
setCurrentWord();

})