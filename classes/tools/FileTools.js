var fs = require("fs");

function FileTools () {	
	this.readFile = function(filename) {
		return fs.readFileSync(filename, 'utf8');
	},
	this.writeFile = function(filename, contents) {
		
	}
}

module.exports.FileTools = FileTools;
