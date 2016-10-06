
var enemy = {
  	_graphic: 'enemy.png',
 	_currentDirection: 'right',
 	_position: { x: 10, y: 10 },
	_score: 20,

	moveLeft: function () {this._position.x -= 2;},
	moveRight: function () {this._position.x += 2;},
	advance: function () {this._position.y += 2;},
  	shoot: function () { diparo('enemy',_position);}
};

var nave = {
  	_graphic: 'nave.png',
 	_currentDirection: 'left',
 	_position: { x: 20, y: 10 },
 	_vida : 3,

	moveLeft: function () {this._position.x -= 2;},
	moveRight: function () {this._position.x += 2;},
  	shoot: function () { diparo('nave', _position); }
};

function disparo(tipo, position){

	var obj = {};
    obj._position = position;
	
	
	if(tipo === 'enemy')
		obj._velocity = -1;
	else if(tipo === 'nave')
		obj._velocity = 1;
};