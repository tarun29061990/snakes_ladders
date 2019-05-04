
var gameDiv = document.getElementById('snl');
var diceDiv = document.getElementById('dice');
var playersDiv = document.getElementById('players');

var SnL = function(rows, columns){
	Game.call(this, rows, columns);

	this.createGame(gameDiv);
}

SnL.prototype = Object.create(Game.prototype);

SnL.prototype.createGame = function(gameDiv){
	Game.prototype.createGame.call(this,'snl', gameDiv);

	this.populateWithEnemyAndFriend(3,3);
};

SnL.prototype.createGrid = function(el){
	Game.prototype.createGrid.call(this,'snl', gameDiv);

	var container = document.createDocumentFragment();
	var count = this.rows*this.columns;
	var leftToRight = true;

	for (i=1; i<=this.rows; i++) {
        var row = document.createElement("tr");
        row.className = "row";
        row.id = "row" + i;

      	var colArr = [];
        for (k=0; k<this.columns; k+=1) {

            var box = document.createElement("td"); 
            box.className = "box";
            box.id = count;

            box.innerHTML = count;
            colArr.push(box)
            
            count -=1;

        };

        if(i%2==0){
        	colArr.reverse().forEach(function(b, index){
    			row.appendChild(b);
        	});
        }else{
        	colArr.forEach(function(b, index){
    			row.appendChild(b);
        	});
        }
      
        container.appendChild(row);     
    };
  
    el.appendChild(container);

};

/*
	x - snakes
	y- ladders
*/
SnL.prototype.populateWithEnemyAndFriend = function(x,y){
	Game.prototype.populateWithEnemyAndFriend.call(this);

	//draw ladders
	// this.drawLinks('ladders',x);

	// //draw snakes
	// this.drawLinks('snakes',y);

	this.drawLinks();

};

SnL.prototype.drawLinks = function(type, number){

	count = this.rows*this.columns;
	var ladder1 = [10,46];
	var ladder2 = [16, 83];

	this.friends.push(ladder1);
	this.friends.push(ladder2);

	var snake1 = [98,2];
	var snake2 = [69,13];

	this.enemies.push(snake1);
	this.enemies.push(snake2);

	this.friends.forEach(function(friend, index){

		var b1 = document.getElementById(friend[0]);
		var b2 = document.getElementById(friend[1]);
		b1.append("L"+(index+1))
		b2.append("L"+(index+1))

		b1.style.background = b2.style.background = 'blue';

	});

	this.enemies.forEach(function(enemy, index){

		var b1 = document.getElementById(enemy[0]);
		var b2 = document.getElementById(enemy[1]);
		b1.append("S"+(index+1))
		b2.append("S"+(index+1))

		b1.style.background = b2.style.background = 'red';

	});

	// for(var i=0;i<number;i++){
	// 	if(type === 'ladders'){
	// 		this.friends.push([]);

	// 	}else if(type === 'snakes'){
	// 		this.enemies.push([]);
	// 	}
	// }

}

SnL.prototype.addPlayers = function(){
	Game.prototype.addPlayers.call(this);
}


SnL.prototype.createDice = function(){
	
	this.dice = new Dice(diceDiv);
}

var snakesAndLadders = new SnL(10,10);

var p1 = new Player('Tarun', snakesAndLadders);
var p2 = new Player('Walmart', snakesAndLadders);

p1.createPlayer(playersDiv,snakesAndLadders.dice);
p2.createPlayer(playersDiv,snakesAndLadders.dice);

snakesAndLadders.addPlayers(p1);
snakesAndLadders.addPlayers(p2);