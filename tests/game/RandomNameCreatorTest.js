var oTPLNamer = require("../classes/RandomNameCreator.js").RandomNameCreator;
var oNamer = new oTPLNamer();

console.log(oNamer.assignName("Human"));
console.log(oNamer.assignName("Elf"));
console.log(oNamer.assignName("Dwarf"));
console.log(oNamer.assignName("Orc"));
