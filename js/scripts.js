//Business Logic

//Game Constructor
function Game(playerOne, playerTwo, turnScoreTotal, turn, winner) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.turnScoreTotal = turnScoreTotal;
  this.turn = turn;
  this.winner = winner;
}


//Players
function Player(score) {
  this.score = 0;
}


//Game
function PigDice() {
  this.player1 = new Player();
  this.player2 = new Player();
}

//Roll Dice
Player.prototype.diceRoll = function() {
  let sides = 6;
  return Math.floor(Math.random() * this.sides) + 1;
}


//add to turn score total - unheld (unsolidified points - could roll 1)




//add turn to total score - HOLD (decide to end turn)



//switch turn - roll 1



//Reset



//Winner scores 100











//UI Logic