var Dice = function(diceDiv){
	this.sides = 6;
	this.div = diceDiv;

	this.init(this.div)
}

Dice.prototype = Object.create({});

Dice.prototype.init = function(diceDiv){
	this.div = diceDiv
	var dice = document.createElement('div');
	dice.className = 'box';
	dice.onclick = function(){
		Dice.prototype.rollDice.call(this,6);
	};
	this.div.appendChild(dice);
}

Dice.prototype.rollDice = function(sides){
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    this.innerHTML = randomNumber;
    return randomNumber;
}