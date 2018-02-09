// Global Variables //
// ================================================================= //
// Array of words to act as wordbank for the game //
var word = ["Ryu", "Ken", "Chun Li", "Guile", "Cammy", "Dhalsim", "Blanka", "E Honda", "Balrog", "Vega", "Sagat", "Zangief", "Bison", "Akuma"]
// Uses Math commands to choose a word randomly //
var randomNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randomNum];
var rightWord = [];
var wrongWord = [];  
var blank = [];

// DOM Effects //
var docBlank = document.getElementsByClassName("blank");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

// Main Functions //
// ================================================================= //
console.log(chosenWord);
// Makes blank spaces based on length of word
var makeBlank = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        blank.push("_");
    }
    return blank;
}

// Get user's guess //
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// If users guess is correct //  
    if(chosenWord.indexOf(keyword) > -1) {
// Add guessed letters to the rightWord array //     
        rightWord.push(keyword);
// Replace blank space with correct letter //
        blank[chosenWord.indexOf(keyword)] = keyword;
        docBlank[0].innerHTML = blank.join(" ");
        docRightGuess[0].innerHTML = rightWord;
// Checks if user word matches guesses //       
    if(blank.join("") == chosenWord) {
            alert("You Win");
        }
    } 
    else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    }
});


docBlank[0].innerHTML = makeBlank().join(" ");
