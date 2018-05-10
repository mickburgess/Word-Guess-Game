$(document).ready(function() {



// GLOBAL VARIABLES

// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

// Win tally
var wins = 0;
document.getElementById("win-total").innerText = wins;

// The number of letters remaining that are unguessed
// var remainingLetters = currentWord.length;

function setCurrentWord() { 
  // Used at before game begins
  var messageBlock = "PRESS ANY KEY TO GET STARTED!";
  document.getElementById("start").innerText = messageBlock;

  // Get a random word from the wordBank array
  var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  // console.log(currentWord);

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

  // Holds the letters already guessed
  var guessLetterArray = [];
  console.log("guess", guessLetterArray);

  function keyPress() {
    // Determines which key was pressed
    document.onkeyup = function (event) {
      var userGuess = event.key.toUpperCase();
      document.getElementById("start").innerText = " ";
      if (guessLetterArray.includes(userGuess)) {
        duplicateResponse();
      }
      else {
        guessLetterArray.push(userGuess);
        console.log("guess2", guessLetterArray);
        guessLetter = guessLetterArray.join(" ");
        console.log("guess3", guessLetter);
        document.getElementById("guess-letters").innerText = guessLetter;
        guessTotal--;
        document.getElementById("guess-remaining").innerText = guessTotal;
        console.log(guessTotal);
      }
      
      function duplicateResponse() {
        document.getElementById("start").innerText = "Already guessed. Please try a different letter."
      }

        var currentSplit = currentWord.split("");

        // Checks if guess is in currentWord and if it is then add it to our answer
        for (var j = 0; j < currentWord.length; j++) {
          if (currentSplit[j] === userGuess) {
            answerArray[j] = userGuess;
            // console.log("remaining", remainingLetters);
            // console.log(answerArray);
            answerString = answerArray.join(" ");
            document.getElementById("current-word").innerHTML = answerString;
           
           
          }   
        }
        
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