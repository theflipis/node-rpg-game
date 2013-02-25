var PCTemplate = require("../../classes/game/BaseActor.js").BaseActor;
var DiceBag = require("../../classes/game/Dice.js").Dice;
var Race = require("../../classes/game/Race.js").Race;
var NameCreator = require("../../classes/game/RandomNameCreator.js").RandomNameCreator;
var Skills = require("../../classes/game/Skills.js").Skills;
var FileTools = require("../../classes/tools/FileTools.js").FileTools;

var okPC = new PCTemplate();
var okPC2 = new PCTemplate();
var diceRoller = new DiceBag();
var nameCreator = new NameCreator();
var raza = new Race();
var skills = new Skills();

var printer = require("../../classes/tools/ConsoleD20Printer.js").ConsoleD20Printer;
var theP = new printer();

okPC.setStrength(diceRoller.rollDie("3d6+3"));
okPC.setDexterity(diceRoller.rollDie("3d6+3"));
okPC.setConstitution(diceRoller.rollDie("3d6+3"));
okPC.setIntelligence(diceRoller.rollDie("3d6+3"));
okPC.setWisdom(diceRoller.rollDie("3d6+3"));
okPC.setCharisma(diceRoller.rollDie("3d6+3"));
raza.assignRace(raza.getRandomRace(), okPC);
nameCreator.assignName(okPC);
skills.assignSkills(okPC);
theP.printCharacterSheet(okPC);

okPC2.setStrength(diceRoller.rollDie("3d6+3"));
okPC2.setDexterity(diceRoller.rollDie("3d6+3"));
okPC2.setConstitution(diceRoller.rollDie("3d6+3"));
okPC2.setIntelligence(diceRoller.rollDie("3d6+3"));
okPC2.setWisdom(diceRoller.rollDie("3d6+3"));
okPC2.setCharisma(diceRoller.rollDie("3d6+3"));
raza.assignRace(raza.getRandomRace(), okPC2);
nameCreator.assignName(okPC2);
skills.assignSkills(okPC2);
theP.printCharacterSheet(okPC2);
