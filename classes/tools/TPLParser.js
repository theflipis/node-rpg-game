var FileTools = require("../../classes/tools/FileTools.js").FileTools;

function TPLParser () {
	this.fTools = new FileTools(),	
  this.pregTPLTag = /\{\{ ([A-Za-z0-9_\.:-]){0,} \}\}/g,  
	this.parseTPL = function(tplName, tplVars) {
    if(tplVars == undefined) { return false; }  // No entry vars
		var tplRaw = this.fTools.readFile(tplName);    
		var matches = tplRaw.match(this.pregTPLTag);  // No tag matches
    if(matches == null) { return false; }
    for(var j = 0; j < matches.length; j++) {      
      for(var i = 0; i < tplVars.length; i++) {        
        if(typeof(tplVars[i]) !== "function") {          
          if("{{ " + tplVars[i].name + " }}" == matches[j]) {            
            tplRaw = tplRaw.replace(matches[j], tplVars[i].data);            
          }
        } else {          
          tplRaw = tplRaw.replace(matches[j], call(tplVars[i].data));
        }
      }
    }
    return tplRaw;
	}  
}

module.exports.TPLParser = TPLParser;
