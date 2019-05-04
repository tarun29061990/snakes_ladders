var Player = function(name, gameInstance){
	this.name = name;
	this.currentPosition = 1;
	this.gameInstance = gameInstance;
};

Player.prototype = Object.create(Game.prototype);

Player.prototype.createPlayer = function(div, dice){
	var dice = dice;
	var that = this;

	var parent = document.createElement('div');
	var player = document.createElement('button');
	player.id = 'p-'+this.name;
	var playerPosition = document.createElement('div');
	playerPosition.id = 'p-'+this.name+'-'+this.currentPosition
	
	parent.appendChild(player);
	parent.appendChild(playerPosition);

	player.onclick = function(){
		var number = dice.rollDice.call(dice.div,dice.sides);
		var pos = that.move(number);
		console.log(pos);
	};
	
	player.innerHTML = this.name;

	div.appendChild(parent);
};

Player.prototype.getCurrentPosition =function(){
	return this.currentPosition;
};

Player.prototype.move = function(count){
	this.currentPosition =  this.currentPosition+count;

	return this.validateMove(this.currentPosition);
};

Player.prototype.validateMove = function(position){
	var that = this;
	this.gameInstance.friends.forEach(function(friend, index){
		if(friend[0] === position){
			that.currentPosition = friend[1];
		}
	})

	this.gameInstance.enemies.forEach(function(enemy, index){
		if(enemy[0] === position){
			that.currentPosition = enemy[1];
		}	
	});

	return that.currentPosition;
}