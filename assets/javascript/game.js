// var carList = ['Ferrari', 'Honda', 'Lexus', 'Mercedes', 'BMW', 'Acura', 'Lamborghini', 'Toyota', 'Jeep', 'Nissan'];
var carList = ['Honda'];
var blankWord = [];
var randomWord = "";
var randomWordLetters = [];
var guessesLeft = 10;
var usedLetters = [];
var correctCounter = 0;
var lettersLeft = 0;



var pickWord = function() {
    randomIndex = Math.floor(Math.random() * carList.length);
    randomWord = carList[randomIndex].toLowerCase();
    randomWordLetters = randomWord.split("");
    lettersLeft = randomWord.length;
    
};

var startGame = function() {

    pickWord();
    guessesLeft = 10;

    for(var i = 0; i < randomWordLetters.length; i++){
        blankWord.push("_");  
        
    };

    alert("Guess this! " + blankWord);
    alert("Number of letters: " + randomWordLetters.length);
    alert("Answer: " + randomWord);
    alert("Array: " + randomWordLetters);



};


var checkLetter = function(playerLetter) {

    correctCounter = 0;
    
    alert("Your guess is " + playerLetter + " !");


    for(var i=0; i<randomWord.length; i++){

        if(randomWordLetters[i] === playerLetter) {
            blankWord[i] = playerLetter;
            correctCounter++;
            lettersLeft--;
        };
    };


    if (correctCounter===0){
        guessesLeft--;
        alert("You have only have " + guessesLeft + " guess(es) left!");
        
    } else{
        alert("You are correct!");
        
    };


    if(lettersLeft===0){
        alert("You won!");
        confirm("Play again?");
    } else {
        alert("You have " + lettersLeft + " letters left!");
    }

    usedLetters.push(playerLetter);
    usedLetters.sort();

    alert("What is left: " + blankWord + " and you have " + lettersLeft + " left.");
    alert("Here are your used letters: " + usedLetters);

};




startGame();
document.onkeyup = function(event) {

    
    playerLetter = String.fromCharCode(event.which).toLowerCase();
  
  
    checkLetter(playerLetter);
  
   
};






// startGame();
// checkLetter('h');
// checkLetter('o');
// checkLetter('b');
// checkLetter('x');
// checkLetter('n');
// checkLetter('d');
// checkLetter('a');
// checkLetter('w');
// checkLetter('v');







