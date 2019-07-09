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

    
    blankWord = [];
    usedLetters = [];
    randomWord = "";
    pickWord();
    guessesLeft = 5;

    for(var i = 0; i < randomWordLetters.length; i++){
        blankWord.push("_");  
        
    };

    document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
    document.getElementById("guesses-left").innerHTML = guessesLeft;

   



};

var playAgain = function() {

    var play = confirm("Play again?");

    if(play){
        location.reload();
        startGame();
    } else {
        alert("Thanks for playing!");
        
    };
};


var checkLetter = function(playerLetter) {

    correctCounter = 0;
    
    alert("Your guess is " + playerLetter + " !");

    if(usedLetters.includes(playerLetter)) {
        alert("You already used this letter!");
    } else {

        for(var i=0; i<randomWord.length; i++){

            if(randomWordLetters[i] === playerLetter) {
                blankWord[i] = playerLetter;
                correctCounter++;
                lettersLeft--;
            };

        };


        if (correctCounter===0){
            guessesLeft--;
            // alert("You have only have " + guessesLeft + " guess(es) left!");
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            
            
        } else {
            alert("You are correct!");
            
        };


        if(usedLetters.includes(playerLetter)) {
            alert("You already used this letter!");
        } else {
            usedLetters.push(playerLetter);
            usedLetters.sort();
            document.getElementById("used-letters").innerHTML = usedLetters;
        };

        if(guessesLeft===0) {
            alert("You lost!");
            document.getElementById("letters-left").innerHTML = lettersLeft;
            playAgain();
                
        };

        if(lettersLeft===0){
            
            alert("You won!");
            document.getElementById("letters-left").innerHTML = lettersLeft;
            playAgain();
        } else if (guessesLeft > 0) {
            alert("You have " + lettersLeft + " letters left!");
            document.getElementById("letters-left").innerHTML = lettersLeft;
        }


        // alert("What is left: " + blankWord + " and you have " + lettersLeft + " left.");
        // alert("Here are your used letters: " + usedLetters);

    };

};



startGame();

document.onkeyup = function(event) {

    
    playerLetter = String.fromCharCode(event.which).toLowerCase();
  
  
    checkLetter(playerLetter);
  
   
};













