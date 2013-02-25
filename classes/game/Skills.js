function Skills (){
	this.appraise = 0,
	this.balance = 0,
	this.bluff = 0,
	this.climb = 0,
	this.concentration = 0,
	this.craft = 0,
	this.decipherScript = 0,
	this.diplomacy = 0,
	this.disableDevice = 0,
	this.disguise = 0,
	this.escapeArtist = 0,
	this.forgery = 0,
	this.assignSkills = function(oActor) {    
		switch(oActor.getRace()) {
			case "Human":
				this.appraise = 10;
			break;
			
			case "Elf":
				this.appraise = 15;
			break;
			
			case "Dwarf":
				this.appraise = 25;
			break;
			
			case "Orc":
				this.appraise = 5;
			break;
		}
    oActor.setSkillSet(this);    
	},
	this.printSkillSet = function() {
		console.log("SKILL SET: \n");
		console.log("Appraise: " + this.appraise);
	}
}

module.exports.Skills = Skills;
