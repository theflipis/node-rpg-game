function RandomNameCreator() {
	var aNames = [];
	var aSurnames = [];
	
	aNames.Human = ["John", "James", "Milton", "Johann", "Fred", "Jack"];
	aSurnames.Human = ["Smith", "Norman", "Bruckenheimer", "Lobst", "Pabst", "Neimherr"];
	
	aNames.Elf = ["Daelin", "Norvin", "Fingolfin", "Folgunin", "Nimurin"];
	aSurnames.Elf = ["Birri", "Norri", "Skavvi", "Nimrri", "Normin"];
	
	aNames.Dwarf = ["Balin", "Folbin", "Thorin", "Thrar", "Thror", "Thrain"];
	aSurnames.Dwarf = ["Stonebreaker", "Hard-Shield", "Rockbasher", "Skullcrusher", "Greatwarrior"];
	
	aNames.Orc = ["Snaga", "Bimmir", "Crag", "Snog", "Berlp", "Gord", "Grond", "Gul"];
	aSurnames.Orc = ["Bloodeater", "Deathworm", "Fairdeath", "Brutal", "Savage"];
	
	this.createRandomName = function(race) {
		if(aNames.hasOwnProperty(race)) {			
			var nNames = aNames[race].length;
			var iNames = parseInt(new Number(Math.random() * nNames));
			var nSurnames = aSurnames[race].length;
			var iSurnames = parseInt(new Number(Math.random() * nSurnames));
			return {"name" : aNames[race][iNames], "surname" : aSurnames[race][iSurnames]};
		} else {
			// Error
		}		
	},
	this.assignName = function(oActor) {
		var data = this.createRandomName(oActor.getRace());
		oActor.setName(data.name);
		oActor.setSurname(data.surname);		
	}
};

module.exports.RandomNameCreator = RandomNameCreator;
