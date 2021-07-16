var heroes = []; // heroes repository
var villains = []; // villains repository

/*
	Description: updates the characters repository (heroes and villains)
	Input: xml ('characters.xml')
*/
function getCharacters_xml(xml) {
	var p, v, w, x, y, i, xmlDoc;
	xmlDoc = xml.responseXML;

	// get all the attributes as arrays
	w = xmlDoc.getElementsByTagName("id");
	x = xmlDoc.getElementsByTagName("name");
	p = xmlDoc.getElementsByTagName("description");
	y = xmlDoc.getElementsByTagName("attack");
	z = xmlDoc.getElementsByTagName("health");
	v = xmlDoc.getElementsByTagName("isVillain");
	
	// checks if there exists any characters in the repository. If not, loads them from the xml
	if((!heroes[0] && !villains[0]) || !heroes[0] || !villains[0]) { 
		for (i = 0; i< x.length; i++) { // x.length == y.length == ..
			let chr = new Character(x[i].childNodes[0].nodeValue, 
									p[i].childNodes[0].nodeValue, 
									y[i].childNodes[0].nodeValue, 
									z[i].childNodes[0].nodeValue);
			
			// if it is not a villain, it is a hero
			if (v[i].childNodes[0].nodeValue == "false") {
				heroes.push(chr);
			}
			else {
				villains.push(chr);
			}
		}
	}
}

/*
	Description: updates the characters repository (heroes and villains)
	Input: json_characters (array with elements parsed from 'characters.json')
*/
function getCharacters_json(json_characters) {
	var p, v, w, x, y, i;
	
	// checks if there exists any characters in the repository. If not, loads them from the xml
	if((!heroes[0] && !villains[0]) || !heroes[0] || !villains[0]) { 
		for (i = 0; i< json_characters.length; i++) {
			let chr = new Character(json_characters[i].name, 
									json_characters[i].description, 
									json_characters[i].attack, 
									json_characters[i].health);
			
			// if it is not a villain, it is a hero
			if (json_characters[i].isVillain == false) {
				heroes.push(chr);
			}
			else {
				villains.push(chr);
			}
		}
	}
}
