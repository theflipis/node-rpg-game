var DiceBag = require("../classes/Dice.js").Dice;
var newDie = new DiceBag();

console.log(newDie.rollDie("4d6+7"));
console.log(newDie.rollDie("3d8+7"));
console.log(newDie.rollDie("3d12-5"));
console.log(newDie.rollDie("3d12+8"));
console.log(newDie.rollDie("12d6+35"));
console.log(newDie.rollDie("20d8+70"));
console.log(newDie.rollDie("30d10+80"));