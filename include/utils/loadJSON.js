/*
		Description: makes the http request and gets the infos about the PLANETS
*/
function loadJSON_planets() {
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const json_planets = JSON.parse(this.responseText); // parse the json
			getPlanets_json(json_planets); // fill the repository
			showPlanets(); // then show it in the game options list
		}
	};
	
	xmlhttp.open("GET", "planets.json", true);
	xmlhttp.send();
	
}

/*
	Description: makes the http request and gets the infos about the CHARACTERS (HEROES or VILLAINS)
*/
function loadJSON_characters() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const json_characters = JSON.parse(this.responseText); // parse the json
			getCharacters_json(json_characters); // fill the repository
			showCharacters(); // then show it in the game options list
		}
	};
	
	xmlhttp.open("GET", "characters.json", true);
	xmlhttp.send();
}