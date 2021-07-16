var planets = []; // planets repository

/*
	Description: updates the planets repository
	Input: xml ('planets.xml')
*/
function getPlanets_xml(xml) {
	
	var x, y, i, ha, hh, va, vh, xmlDoc;
	xmlDoc = xml.responseXML;

	// get all the attributes as arrays
	w = xmlDoc.getElementsByTagName("id");
	x = xmlDoc.getElementsByTagName("name");
	y = xmlDoc.getElementsByTagName("description");
	ha = xmlDoc.getElementsByTagName("heroAttackModifier");
	hh = xmlDoc.getElementsByTagName("heroHealthModifier");
	va = xmlDoc.getElementsByTagName("villainAttackModifier");
	vh = xmlDoc.getElementsByTagName("villainHealthModifier");

	if(!planets[0]) {  // checks if there exists any planet in the repository. If not, get them from the attributes' arrays
		for (i = 0; i< w.length; i++) { // w.length ==  x.length == y.length == ..
			modifiers = [ ha[i].childNodes[0].nodeValue, 
						  hh[i].childNodes[0].nodeValue, 
						  va[i].childNodes[0].nodeValue, 
						  vh[i].childNodes[0].nodeValue ]; // planet's specific modifiers for health and attack
			let planet = new Planet(x[i].childNodes[0].nodeValue, 
									y[i].childNodes[0].nodeValue, 
									modifiers);
		
			planets.push(planet);
		}
	}
}

/*
	Description: updates the planets repository
	Input: json_planets (array with elements parsed from 'planets.json')
*/
function getPlanets_json(json_planets) {
	if(!planets[0]) {  // checks if there exists any planet in the repository. If not, get them from the attributes' arrays
		for (i = 0; i< json_planets.length; i++) {
			modifiers = [ json_planets[i].heroAttackModifier, 
						  json_planets[i].heroHealthModifier, 
						  json_planets[i].villainAttackModifier, 
						  json_planets[i].villainHealthModifier ]; // planet's specific modifiers for health and attack
			let planet = new Planet(json_planets[i].name, 
									json_planets[i].description, 
									modifiers);

			planets.push(planet);
		}
	}
}
