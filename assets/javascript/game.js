var carList = ['Ferrari', 'Honda', 'Lexus', 'Mercedes', 'BMW', 'Acura', 'Lamborghini', 'Toyota', 'Jeep', 'Nissan'];
var blankWord = [];
var randomWord = "";
var randomWordLetters = [];

var pickWord = function() {
    randomIndex = Math.floor(Math.random() * carList.length);
    randomWord = carList[randomIndex];
    randomWordLetters = randomWord.split("");

    // alert(randomWord);
    // alert(randomWordLetters);

};

pickWord();

for(var i = 0; i < randomWordLetters.length; i++){
    blankWord.push("_");    

};

alert(blankWord);
alert(randomWordLetters.length)
alert(randomWord);
alert(randomWordLetters);







