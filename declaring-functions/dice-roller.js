var randomRoll = process.argv[2];

function rollingDice(randomRoll) {
  // console.log(randomRoll);
  var rollResults = [];
  for (var i = 0; i < Number(randomRoll); i++) {
    var diceRoll = Math.floor(( Math.random() * 6 ) +1);
    rollResults.push(diceRoll);
  }
  return rollResults;
}
console.log("you rolled " + rollingDice(randomRoll));