// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

var wins = 0;
document.getElementById("win-total").innerHTML = wins;

// Holds the letters already guessed
var guessLetters = [];

// Get a random word from the wordBank array
var nextWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(nextWord);

// The number of letters remaining that are unguessed
var remainingLetters = nextWord.length;

// Sets the number of total guesses you have
var guessTotal = nextWord.length + 5;
document.querySelector(".guess-remaining").innerHTML = guessTotal;
// Sets up an array of underlines equal to the length of nextWord
var answerArray = [];
for (i = 0; i < nextWord.length; i++) {
  answerArray[i] = "_";
}

  // Combine all blanks in answerArray with a space in between to a string
  answerString = answerArray.join(" ");
  document.getElementById("current-word").innerHTML = answerString;


  // Will loop as long as there are letters unguessed in nextWord
  if (remainingLetters > 0 && guessLetters.length < guessTotal) {
  
  function keyPress(logAnswer) {
    // Determines which key was pressed
    document.onkeyup = function (event) {
      var userGuess = event.key.toUpperCase();
      // Checks if guess is in nextWord and if it is then add it to our answer and subtract from the remaining letters to guess
      for (var j = 0; j < nextWord.length; j++) {
        if (nextWord[j] === userGuess) {
          answerString[j].push(userGuess);
          remainingLetters--;
        }
        else {
          // Add incorrect guesses to an array
          guessLetters.push(userGuess);
        }
      }
      console.log(userGuess);
      guessTotal--;
      console.log(guessTotal); 
    }
  }
  console.log(remainingLetters);
  console.log(answerArray);
  console.log(guessLetters);
}

keyPress();
// Will use to make first letter uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}