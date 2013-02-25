/**
 * Base Actor class. Template for a character in the game.
 */
function BaseActor() {
  
  // BASE ATTRIBUTES
	var strength = null;
	var dexterity = null;
	var constitution = null;
	var intelligence = null;
	var wisdom = null;
	var charisma = null;
  
  // SKILLS
  var skillSet = {};
  
  // SAVING THROWS  
  var saveFort = 0;
  var saveRefl = 0;
  var saveWill = 0;
  
  // PERSONAL DATA
	var pcName = null;
	var pcAge = null;
	var pcHeight = null;
	var pcWeight = null;
	var pcRace = null;
	var pcSurname = null;
	
	// PRIVADO
	var checkVar = function(value, expected) {		
		if(typeof(value) == expected) {
			return value;						
		} else {
			var converted = null;
			switch(expected) {
				case "number":
					converted = parseInt(value);
					if(isNaN(converted)) {						
						converted = null;
					}
				break;				
				
				case "string":
					converted = "" + value;
				break;				
			}
			if(typeof(converted) == expected) {
				return converted;
			} else {
				return null;				
			}
		}
	};
	
	var attrSetError = function(attrData, value) {		"gfnntd"
		throw "Unable to set value for " + attrData[0] + " - " + attrData[1] + ", Value supplied: " + value;		
	};
  
	
	// PÚBLICO
  
	this.setStrength = function(str) {
		var temp = checkVar(str, "number");		
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "STRENGTH"], str);
		} else {			
			strength = temp;
		}
	},
	this.getStrength = function() {
		return strength;		
	},
	this.setDexterity = function(dex) {
		var temp = checkVar(dex, "number");
		if(temp === null) {
			attrStError(["ATTRIBUTE", "DEXTERITY"], temp);
		} else {
			dexterity = dex;			
		}
	},
	this.getDexterity = function() {
		return dexterity;
	},
	this.setConstitution = function(con) {
		var temp = checkVar(con, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "CONSTITUTION"], temp);
		} else {
			constitution = con;
		} 
	},
	this.getConstitution = function() {
		return constitution;
	},
	this.setIntelligence = function(int) {
		var temp = checkVar(int, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "INTELLIGENCE"], temp);			
		} else {
			intelligence = int;						
		}
	},
	this.getIntelligence = function() {
		return intelligence;		
	},
	this.setWisdom = function(wis) {
		var temp = checkVar(wis, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "WISDOM"], temp);
		} else {
			wisdom = temp;
		}
	},
	this.getWisdom = function() {
		return wisdom;
	},
	this.setCharisma = function(cha) {
		var temp = checkVar(cha, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "CHARISMA"], temp);
		} else {
			charisma = cha;
		}				
	},
	this.getCharisma = function() {
		return charisma;		
	},
	this.setName = function(name) {
		var temp = checkVar(name, "string");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "NAME"], temp);
		} else {
			pcName = name;		
		}	
	},  
  this.setSkillSet = function(skills) {
    skillSet = skills;    
  },
  this.getSkillSet = function() {
    return skillSet;
  },
	this.getName = function() {
		return pcName;
	},
	this.setAge = function(age) {
		var temp = checkVar(age, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "AGE"], temp);
		} else {
			pcAge = age;			
		}
	},
	this.getAge = function() {
		return pcAge;
	},
	this.setHeight = function(height) {
		var temp = checkVar(height, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "HEIGHT"], temp);			
		} else {
			pcHeight = height;			
		}
	},
	this.getHeight = function() {
		return pcHeight;		
	},
	this.setWeight = function(weight) {
		var temp = checkVar(weight, "number");
		if(temp === null) {
			attrSetError(["ATTRIBUTE", "WEIGHT"], temp);			
		} else {
			pcWeight = weight;			
		}
	},
  this.getWeight = function() {
    return pcWeight;
  },
	this.setRace = function(raceName) {
		pcRace = raceName;
	},
	this.getRace = function() {
		return pcRace;		
	},
	this.setName = function(name) {
		pcName = name;				
	},
	this.getName = function() {
		return pcName;		
	},
	this.setSurname = function(surname) {
		pcSurname = surname;		
	},
	this.getSurname = function() {
		return pcSurname;		
	},
	this.printSheet = function() {
		printConsoleCharSheet();
	}
};

module.exports.BaseActor = BaseActor;
