var carList = ['Ferrari', 'Honda', 'Lexus', 'Mercedes', 'BMW', 'Acura', 'Lamborghini', 'Toyota', 'Jeep', 'Nissan'];
// var carList = ['Honda'];
var blankWord = [];
var randomWord = "";
var randomWordLetters = [];
var guessesLeft = 10;
var usedLetters = [];
var correctCounter = 0;
var lettersLeft = 0;
var gamesWon = 0;



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
    guessesLeft = 10;
    pickWord();

    for(var i = 0; i < randomWordLetters.length; i++){
        blankWord.push("_");  
        
    };

    document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("used-letters").innerHTML = usedLetters;

};




var playAgain = function() {

    var play = confirm("Play again?");

    if(play){
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

            document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();

        };

        document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();

        if (correctCounter===0){
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            alert("Wrong! You have " + lettersLeft + " letters left!");
            
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
            document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
            alert("You lost!");
            playAgain();
        } else {
            document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
        };

        if(lettersLeft===0){
            
            document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
            alert("You won!");
            gamesWon++;
            document.getElementById("games-won").innerHTML = gamesWon;
            playAgain();

        } else if (guessesLeft > 0 && guessesLeft < 5 ) {
            // alert("Wrong! You have " + lettersLeft + " letters left!");
            document.getElementById("word-blanks").innerHTML = blankWord.join(" ").toUpperCase();
        };


      

    };

};



startGame();

document.onkeyup = function(event) {

    
    playerLetter = String.fromCharCode(event.which).toLowerCase();
  
  
    checkLetter(playerLetter);
  
   
};













