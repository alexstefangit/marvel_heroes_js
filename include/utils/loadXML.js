/*
		Description: makes the http request and gets the infos about the PLANETS
*/
function loadXML_planets() {
	
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			getPlanets_xml(this); // fill the repository
			showPlanets(); // then show it in the game options list
		}
	};
	
	xmlhttp.open("GET", "planets.xml", true);
	xmlhttp.send();
	
}

/*
	Description: makes the http request and gets the infos about the CHARACTERS (HEROES or VILLAINS)
*/
function loadXML_characters() {
	
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			getCharacters_xml(this); // fill the repository
			showCharacters(); // then show it in the game options list
		}
	};
	
	xmlhttp.open("GET", "characters.xml", true);
	xmlhttp.send();
}