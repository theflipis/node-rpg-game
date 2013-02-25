function Dice() {	
	var regExpDice = "([0-9]{1,100})d([0-9]{1,100})(\\+|\\-){0,1}(([0-9]{1,100})){0,1}";	
	this.roll = function(nDice, faces, operation, addTotal) {
		var tempResult = 0;
		for(var i = 0; i < nDice; i++) {
			var tmpNum = parseInt(new Number(Math.random() * faces));
			if(tmpNum == 0) {
				tmpNum = 1;
			}			
			tempResult += parseInt(tmpNum);
		}
		if(operation == "+") {
			tempResult += parseInt(addTotal);
		} else {
			tempResult -= parseInt(addTotal);
		}
		return (tempResult < 0) ? 0 : tempResult;
	},
	this.rollDie = function(diceString) {
		var self = this;
		var RegExpObject = new RegExp(regExpDice);
		var matches = RegExpObject.exec(diceString);
		
		if(matches.length == 6) {
			if(matches[3] == undefined) {
				return self.roll(matches[1], matches[2], 0, 0);
			} else {							
				return self.roll(matches[1], matches[2], matches[3], matches[4]);
			}
		} else {
			console.log(matches.length);
			//@TODO: Revisar posibles condiciones que se nos hayan pasado
		}
	}
};

module.exports.Dice = Dice;
