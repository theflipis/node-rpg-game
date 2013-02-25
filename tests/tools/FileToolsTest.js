var fTools = require("../../classes/tools/FileTools.js").FileTools;
var fReader = new fTools();
var HumanJSON = JSON.parse(fReader.readFile("/home/alejandro.almunia/CODE/nodeCode/d20Game/data/game/Human.json"));
console.log(HumanJSON);
