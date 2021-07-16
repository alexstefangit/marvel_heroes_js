/*
	Description: generate html options for the heroes select
*/
function showPlanets() {
	var txt = ""; // in this we'll store the options from the select list

	for (i = 0; i < planets.length; i++) {
	txt += "<option value=" + i + ">" + 
			planets[i].getName()
			"</option><br>";
	}

	document.getElementById("planets").innerHTML = txt; // fill the planets' option values
	getPlanetStats(); // show planet's stats
}

/*
	Description: generate html options for the heroes / villains select
*/
function showCharacters() {
	
	var txt = ""; // in this we'll store the options from the select list

	for (i = 0; i< heroes.length; i++) {
		txt += "<option name=heroes value=" + i + ">" +
				heroes[i].getName() + 
				"</option><br>";
	}

	document.getElementById("heroes").innerHTML = txt; // fill the heroes option values
	getHeroStats(); // show hero's stats
	txt = "";

	for (i = 0; i< villains.length; i++) {
		txt += "<option name=villain value=" + i + ">" +
				villains[i].getName() +
				"</option><br>";
	}

	document.getElementById("villains").innerHTML = txt; // fill the villains option values
	getVillainStats(); // show villain's stats
}

/*
		Description: updates planet attributes from the collapsed paragraph
*/
function getPlanetStats() {
	var txt = ""; // in this we'll store the attributes
	var id = document.getElementById("planets").value;
	const planet = planets[id];
	
	txt += 	'<a class="portfolio-box" href="img/planets/' + planet.getName() + '.jpg">' +
			'<img class="img-fluid" src="img/planets/' + planet.getName() + '.jpg" alt="">' +
			'<div class="portfolio-box-caption">' +
				'<div class="project-category text-white-50">' +
					'Stats modifiers' +
				'</div>' +
				'<div class="project-name">' +
			"Hero Health: " + planet.getHeroHealth() + "<br>" +
		    "Hero Attack: " + planet.getHeroAttack() + "<br><br>" +
		    "Villain Health: " + planet.getVillainAttack() + "<br>" +
		    "Villain Attack: " + planet.getVillainHealth();
				'</div>' +
			'</div>'+
			'</a>';
	
	document.getElementById("planet_option").innerHTML = txt;
}

/*
	Description: updates hero attributes from the collapsed paragraph
*/
function getHeroStats() {
	var txt = ""; // in this we'll store the attributes
	var id = document.getElementById("heroes").value;
	const hero = heroes[id];   
		   
	txt += 	'<a class="portfolio-box" href="img/characters/' + hero.getName() + '.jpg">' +
			'<img class="img-fluid" src="img/characters/' + hero.getName() + '.jpg" alt="">' +
			'<div class="portfolio-box-caption">' +
				'<div class="project-category text-white-50">' +
					'Stats' +
				'</div>' +
				'<div class="project-name">' +
			"Health: " + hero.getHealth() + "<br>" +
		    "Attack: " + hero.getAttack() + "<br><br>" +
				'</div>' +
			'</div>'+
			'</a>';
		   
	
	document.getElementById("hero_option").innerHTML = txt;
}

/*
	Description: updates villain attributes from the collapsed paragraph
*/
function getVillainStats() {
	var txt = ""; // in this we'll store the attributes
	var id = document.getElementById("villains").value;
	const villain = villains[id];
	
	txt += 	'<a class="portfolio-box" href="img/characters/' + villain.getName() + '.jpg">' +
			'<img class="img-fluid" src="img/characters/' + villain.getName() + '.jpg" alt="">' +
			'<div class="portfolio-box-caption">' +
				'<div class="project-category text-white-50">' +
					'Stats' +
				'</div>' +
				'<div class="project-name">' +
			"Health: " + villain.getHealth() + "<br>" +
		    "Attack: " + villain.getAttack() + "<br><br>" +
				'</div>' +
			'</div>'+
			'</a>';
	
	document.getElementById("villain_option").innerHTML = txt;
}
