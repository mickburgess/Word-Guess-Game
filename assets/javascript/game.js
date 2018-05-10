$(document).ready(function() {



// GLOBAL VARIABLES

// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

// Win tally
var wins = 0;
document.getElementById("win-total").innerText = wins;

// Lose tally
var losses = 0;
document.getElementById("loss-total").innerText = losses;

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
  var guessTotal = currentWord.length + 3;
  document.querySelector("#guess-remaining").innerText = guessTotal;

  // Holds the letters already guessed
  var guessLetterArray = [];

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
        guessLetter = guessLetterArray.join(" ");
        document.getElementById("guess-letters").innerText = guessLetter;
        guessTotal--;
        document.getElementById("guess-remaining").innerText = guessTotal;
      }
      
      function duplicateResponse() {
        document.getElementById("start").innerText = "Already guessed. Please try a different letter."
      }

        var currentSplit = currentWord.split("");

        // Checks if guess is in currentWord and if it is then add it to our answer
        for (var j = 0; j < currentWord.length; j++) {
          if (currentSplit[j] === userGuess) {
            answerArray[j] = userGuess;
            answerString = answerArray.join(" ");
            document.getElementById("current-word").innerHTML = answerString;
          }   
        }
        
        winChecker()
      }
    
      function winChecker () {
        var answerSplit = currentWord.split("");
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
          setCurrentWord();
          guessLetterArray.length = 0;
          guessLetter = guessLetterArray.join(" ");
          document.getElementById("guess-letters").innerText = guessLetter;
        }
        if (guessTotal < 1) {
          losses++;
          document.getElementById("loss-total").innerText = losses;
          setCurrentWord();
          guessLetterArray.length = 0;
          guessLetter = guessLetterArray.join(" ");
          document.getElementById("guess-letters").innerText = guessLetter;
        }
      }
  }
  keyPress();
}
setCurrentWord();

})