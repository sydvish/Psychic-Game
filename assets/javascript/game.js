
// Guess what letter I'm thinking of

// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).






function generateAlphabet(){
    var arr = [];
    for(var i = 97; i <= 122; i++){
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }
  
  var alphabet = generateAlphabet();
  var $alreadyGuessed = document.getElementById("already-guessed");
  console.log($alreadyGuessed);
  
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  
  
  console.log("Computer Guess:", computerGuess);
  var alreadyGuessedArr = [];
  
  document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyGuessedArr.push(userGuess);
    
  
    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
  }
  