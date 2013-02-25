var oTPL = require("../../classes/tools/TPLParser.js").TPLParser;
var theParser = new oTPL();
var subs = [{"name": "TITULO", "data": "EL TITULO"},
            {"name": "DATAA", "data": "EL DATA A DEL CUERPO"},
            {"name": "DATAB", "data": "EL DATA B DEL CUERPO"},
            {"name": "URLA", "data": "http://www.google.es"},
            {"name": "HIPERLINKA", "data": function() {  return "LALALALALALA"; }}];
console.log(theParser.parseTPL("../../data/html/TestTPL.tpl.html", subs));
