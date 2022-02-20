//Business Logic


//Players
function Player() {
  this.totalScore = 0;
  this.roundScore = 0;
}


//Game
function PigDice() {
  this.player1 = new Player();
  this.player2 = new Player();
}


//Start Game


//Hold


//Reset


//Roll Dice object
//dice.roll(); <------how to call roll function
let dice = {
  sides: 6,
  roll: function() {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



// 
//Winner











//UI Logic