// Array of words to be used for hangman
var wordBank = ["DIABLO", "NEPHALEM", "BARBARIAN", "AMAZON", "ANDARIEL", "MEPHISTO", "CRUSADER", "PALADIN", "ASSASSIN", "DRUID", "CAIN", "MITIGATION", "HORADRIM"]

// Get a random word from the wordBank array
var nextWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(nextWord);

// Sets the number of total guesses you have
var guessTotal = nextWord.length + 5;

// Sets up an array of underlines equal to the length of nextWord
var answerArray = [];
for (i = 0; i < nextWord.length; i++) {
  answerArray[i] = "_";
}

// Holds the letters already guessed
var guessLetters = [];
// The number of letters remaining that are unguessed
var remainingLetters = nextWord.length;

  // Will loop as long as there are letters unguessed in nextWord
  if (remainingLetters > 0 && guessLetters.length < guessTotal) {

  // Combine all blanks in answerArray with a space in between to a string
  console.log(answerArray.join(" "));
  
  // Determines which key was pressed
  document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    guessTotal--;
    console.log(guessTotal);
    // Add guesses to an array
    guessLetters.push(userGuess);

    // Checks if guess is in nextWord and if it is then add it to our answer and subtract from the remaining letters to guess
    for (var j = 0; j < nextWord.length; j++) {
      if (nextWord[j].toLowerCase() === userGuess) {
        answerArray[j] = userGuess;
        remainingLetters--;
      }
    }
  }
  console.log(remainingLetters);
  console.log(answerArray);
  console.log(guessLetters);
}


// Will use to make first letter uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}