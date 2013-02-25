// @TODO: Guardar definiciones de raza en un archivo JSON, para
// hacer extensible

function Race() {
	var aRaces = ["Human", "Elf", "Dwarf", "Orc"];
	var aMods = [];
	var aHeightWeight = [];
	
	aMods["Human"] = {"str" : 0, "dex" : 0, "con" : 0, "int" : 0, "wis" : 0, "cha" : +2};
	aMods["Elf"] = {"str" : -1, "dex" : +2, "con" : -2, "int" : 0, "wis" : -1, "cha" : +2};
	aMods["Dwarf"] = {"str" : +2, "dex" : -2, "con" : +4, "int" : 0, "wis" : 0, "cha" : -2};
	aMods["Orc"] = {"str" : +4, "dex" : -2, "con" : +4, "int" : -2,  "wis" : -1, "cha" : -4};
	
	aHeightWeight["Human"] = {"hMin" : 160, "hMax" : 190, "wMin" : 60, "wMax" : 90};
	aHeightWeight["Elf"] = {"hMin" : 140, "hMax" : 170, "wMin" : 40, "wMax" : 70};
	aHeightWeight["Dwarf"] = {"hMin" : 110, "hMax" : 150, "wMin" : 50, "wMax" : 90};
	aHeightWeight["Orc"] = {"hMin" : 180, "hMax" : 220, "wMin" : 80, "wMax" : 120};
	
	var makeHeightWeight = function(race) {
		var rangeHeight = aHeightWeight[race].hMax - aHeightWeight[race].hMin;
		var totalHeight = (aHeightWeight[race].hMin + Math.floor(Math.random() * rangeHeight));
		var rangeWeight = aHeightWeight[race].wMax - aHeightWeight[race].wMin;
		var totalWeight = (aHeightWeight[race].wMin + Math.floor(Math.random() * rangeWeight));
		return {"height" : totalHeight, "weight" : totalWeight};
	};
	
	this.assignRace = function(race, oActor) {	
		if(typeof(oActor) !== "object") {
			throw "Actor supplied not correct";			
		} else {
			oActor.setStrength(oActor.getStrength() + aMods[race].str);
			oActor.setDexterity(oActor.getDexterity() + aMods[race].dex);
			oActor.setConstitution(oActor.getConstitution() + aMods[race].con);
			oActor.setIntelligence(oActor.getIntelligence() + aMods[race].int);
			oActor.setWisdom(oActor.getWisdom() + aMods[race].wis);
			oActor.setCharisma(oActor.getCharisma() + aMods[race].cha);
			oActor.setRace(race);
			var hw = makeHeightWeight(race);
			oActor.setHeight(hw.height);
			oActor.setWeight(hw.weight);
		}
	},
	this.getRandomRace = function() {
		return aRaces[Math.floor(Math.random() * aRaces.length)];
	}
};

module.exports.Race = Race;
