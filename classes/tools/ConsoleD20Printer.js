var ConsoleD20Printer = function() {
  
  // CONSOLE COLOR CODES
	var redColor   = '\u001b[31m';
	var blueColor  = '\u001b[34m';
  var yellowColor  = '\u001b[33m';
  var greenColor  = '\u001b[32m';
	var resetColor = '\u001b[0m';
  
  this.printCharacterSheet = function(PC) {
    console.log("CHARACTER SHEET");
		console.log(blueColor);
		console.log("PERSONAL DATA");
		console.log("NAME : " + PC.getName() + " " + PC.getSurname());
		console.log(PC.getRace() + ", " + PC.getAge() + " years, " + PC.getHeight() + " centimetres, " + PC.getWeight() + " kilograms");		
		console.log(redColor);
		console.log("ATTRIBUTES\n");
		console.log("STR : " + PC.getStrength() + " " + "DEX : " + PC.getDexterity() + " " + "CON : " + PC.getConstitution() + 
                " " + "INT : " + PC.getIntelligence() + " " + "WIS : " + PC.getWisdom() + " " + "CHA : " + PC.getCharisma());
    console.log(greenColor);
    console.log(PC.getSkillSet().printSkillSet());
    console.log(resetColor);
  }
}

module.exports.ConsoleD20Printer = ConsoleD20Printer;
