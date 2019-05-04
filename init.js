/*Board Game - 
	It can be Ludo, chess anything
	rows
	columns
*/
var Game = function(rows, columns){
	this.rows = rows;
	this.columns = columns;
	this.noOfPlayers = 0;
	this.dice = {};

	this.enemies = [];
	this.friends = [];
}

/*m-no of players*/
Game.prototype.addPlayers = function(m){
	this.noOfPlayers = m;
}

Game.prototype.getPlayers = function(){
	return this.noOfPlayers;
}

Game.prototype.createGame = function(gameType, gameDiv){

	switch(gameType){
		case 'snl':
			//create UI based on no of rows and columns
			this.createGrid(gameDiv);

			//create Dice
			this.createDice();
			break;
	}
};

Game.prototype.createGrid = function(gameDiv){
};

Game.prototype.populateWithEnemyAndFriend = function(gameType, x,y){};

Game.prototype.createDice = function(){};