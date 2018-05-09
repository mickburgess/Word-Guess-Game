// GLOBAL VARIABLES

// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

var messageBlock = "PRESS ANY KEY TO GET STARTED!";
document.getElementById("start").innerText = messageBlock;

var wins = 0;
document.getElementById("win-total").innerText = wins;

// Holds the letters already guessed
var guessLetterArray = [];

// Get a random word from the wordBank array
var nextWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(nextWord);

// The number of letters remaining that are unguessed
var remainingLetters = nextWord.length;

// Sets the number of total guesses you have
var guessTotal = nextWord.length + 5;
document.querySelector("#guess-remaining").innerText = guessTotal;
// Sets up an array of underlines equal to the length of nextWord
var answerArray = [];
for (i = 0; i < nextWord.length; i++) {
  answerArray[i] = "_";
}

  // Combine all blanks in answerArray with a space in between to a string
  answerString = answerArray.join(" ");
  document.getElementById("current-word").innerText = answerString;


  // Will loop as long as there are letters unguessed in nextWord
  
function keyPress() {
    // Determines which key was pressed
    document.onkeyup = function (event) {
      var userGuess = event.key.toUpperCase();
      document.getElementById("start").innerText = "";
      for (var i = 0; i < guessLetterArray.length; i++) { if (guessLetterArray[i] !== userGuess) {
        guessLetterArray.push(userGuess);
        guessLetter = guessLetterArray.join(" ");
      }
    //  console.log(userGuess);
      // console.log(nextWord);
      var nextSplit = nextWord.split("");
      // console.log(nextSplit);
      // console.log("length of string", nextWord.length);
      // Checks if guess is in nextWord and if it is then add it to our answer and subtract from the remaining letters to guess
      for (var j = 0; j < nextWord.length; j++) {
        if (nextSplit[j] === userGuess) {
          answerArray[j] = userGuess;
          remainingLetters--
          console.log("remaining", remainingLetters);
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
      var answerSplit = nextWord.split("");
      console.log("winChecker", answerSplit);
      console.log("answer", answerArray);
      var counter = 0;
      for (var k =0; k < nextWord.length; k++) {
       
        // console.log( answerSplit[k]);
        if (answerSplit[k] === answerArray[k]) {
          counter++;
        }  
      }
      if (counter == nextWord.length) {
        console.log("success");
      }
    }
  

 /* if (remainingLetters < 1) {
    document.getElementById("current-word").innerHTML = answerString;
    wins++
    document.querySelector("#win-total").innerHTML = wins;
  }

  else if (guessTotal < 1) {
    var wrapper = document.querySelector(".wrapper");
    wrapper.setAttribute("src", "../images/diablo.jpg");
  }

  else {
    document.getElementById("current-word").innerHTML = answerString;
    document.querySelector("#guess-letters").innerHTML = guessLetters.join(" ");
  }*/
}

keyPress();
