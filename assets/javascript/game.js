
var word = ["Ryu", "Ken", "Chun Li", "Guile", "Cammy", "Dhalsim", "Blanka", "E Honda", "Balrog", "Vega", "Sagat", "Zangief", "Bison", "Akuma"]

var randomNum = Math.floor(Math.random() * word.length);
    
var chosenWord = word[randomNum];

var blank = [];

var makeBlank = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        blank.push("_");
    }
    return blank;
}

console.log(makeBlank());