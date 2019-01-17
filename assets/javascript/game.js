
// Guess what letter I'm thinking of

// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// Generate Alphabet
// Using the Ascii code for letters a-z 
// generate an array of a lower case alphabet
// @parameters None
// @return Array
function generateAlphabet() {
  var arr = [];
  for (var i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

// create and store our array of the alphabet
var alphabet = generateAlphabet();
var wins = 0;
var losses = 0;
var guesses = 9;


// create and store a reference to our #already-guessed html element
var $alreadyGuessed = document.getElementById("so-far");

// grab a random character out of our alphabet
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Computer Guess:", computerGuess);

// create an array to store what our user has already guessed
var alreadyGuessedArr = [];

document.onkeypress = function(event) {
    var userGuess = event.key;
    $alreadyGuessed.textContent = alreadyGuessedArr.join(", ");

} 

// Add and event listener to the document
// To watch for when the user presses a key
document.onkeyup = function (event) {

// Take the key the user pressed and store it inside of userGuess
  var userGuess = event.key.toLowerCase();
  if (
    event.which >= 65
    && event.which <= 90
    && alreadyGuessedArr.indexOf(userGuess) === -1
  ) {


 // push the userGuess into our array of alreadyGuessedArr

    var alphabet = generateAlphabet();

    alreadyGuessedArr.push(userGuess);

    if(userGuess === computerGuess) {
      wins++;
    // } else if (userGuess === alreadyGuessedArr.length) {
    //   guesses--;
    } else {
      losses++;
      guesses--;
    }
    // Q: line 76-78 display counting on the screen but the "guesses" is in the negative-how do I make this count down from 26??
  

// Update our HTML with the character the user has already guessed!
    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");

    document.getElementById('wins').innerHTML = + wins;
    document.getElementById('losses').innerHTML = + losses;
    document.getElementById('guesses').innerHTML = + guesses;

  }
}
