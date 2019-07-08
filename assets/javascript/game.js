var carList = ['Ferrari', 'Honda', 'Lexus', 'Mercedes', 'BMW', 'Acura', 'Lamborghini', 'Toyota', 'Jeep', 'Nissan'];
var blankWord = [];
var randomWord = "";
var randomWordLetters = [];
var guessesLeft = 10;
var usedLetters = [];



var pickWord = function() {
    randomIndex = Math.floor(Math.random() * carList.length);
    randomWord = carList[randomIndex].toLowerCase();
    randomWordLetters = randomWord.split("");

    
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

    var isCorrect = true;
    var correctCounter = 0;
    
    alert("Your guess is " + playerLetter + " !");


    for(var i=0; i<randomWord.length; i++){

        if(randomWordLetters[i] === playerLetter) {
            blankWord[i] = playerLetter;
            correctCounter++;
        };



    };

    if (correctCounter===0){
        guessesLeft--;
        alert("You have only have " + guessesLeft + " guess(es) left!");
    } else{
        alert("You are correct!");
    };



        
    

   


};


startGame();
checkLetter('e');
checkLetter('a');
alert(blankWord);



