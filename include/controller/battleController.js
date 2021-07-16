/*
	Description: gets the selected options from the html and starts the battle
*/
function battle_middle() {
	var planet = document.getElementById("planets");
	var id0 = planet.options[planet.selectedIndex].value;

	var chr1 = document.getElementById("heroes");
    var id1 = chr1.options[chr1.selectedIndex].value;

	var chr2 = document.getElementById("villains");
	var id2 = chr2.options[chr2.selectedIndex].value;
	
	if(id0 == -1 || id1 == -1 || id2 == -1) { // checks if all the options are selected
		alert('Please choose planet / hero / villain!');
	}
	else battle_char(id0[0], id1[0], id2[0]); // if the options are selected, start the battle
}

/*
	Description: pew pew pew
	Input: id0 (planet id), id1 (hero id), id2 (villain id)
*/
function battle_char(id0, id1, id2) {
	var txt = ""; // this variable will store the stats of the current battle (health and damage),
	var txt_crit = "<u>number of critical strikes</u><br>"; // this variable will store the number of critical strikes for each character,
	var txt_dmg = ""; // this will store the stats of the current battle (health and damage),
	var crits_hero = 0; // this will store the number of crits of the hero,
	var crits_villain = 0; // number of crits of the villain,
	var hits_hero = 0; // number of hits of the hero,
	var hits_villain = 0; // number of hits of the villain,
	var avg_hero = 0; // average damage of the hero,
	var avg_villain = 0; // average damage of the villain,
	var rounds = 0; // and the number of rounds
	
	const planet = planets[id0];
	const chr1 = heroes[id1];
	const chr2 = villains[id2];
	
	// update characters' attributes with planet's specific attributes
	var heroAttack = parseInt(chr1.getAttack()) + parseInt(planet.getHeroAttack());
	var heroHealth = parseInt(chr1.getHealth()) + parseInt(planet.getHeroHealth());
	var villainAttack = parseInt(chr2.getAttack()) + parseInt(planet.getVillainAttack());
	var villainHealth = parseInt(chr2.getHealth()) + parseInt(planet.getVillainHealth());
	
	// while both of them are alive
	while(heroHealth > 0 && villainHealth > 0) {
		var ord = Math.random() > 0.5; // the order in which they will hit
		var crit_chr1 = Math.random() < 0.1; // critical strike chance for hero
		var crit_chr2 = Math.random() < 0.08; // critical strike chance for villain
		
		rounds++;
		
		// compute the damage of each character
		var chr1_damage = chr1.getAttack() * (Math.floor(Math.random() * 40) + 60 ) / 100;
		var chr2_damage = chr2.getAttack() * (Math.floor(Math.random() * 40) + 60) / 100;
		
		// critical stike
		if (crit_chr1) {
			crits_hero++;
			chr1_damage += Math.floor(heroAttack * crit_chr1);
			alert('Critical strike chance: ' + chr1.getName());
			txt += 'Critical strike chance: <span style="color: white;">' + chr1.getName() + '</span><br>';
		}
		if (crit_chr2) {
			crits_villain++;
			chr2_damage += Math.floor(villainAttack * crit_chr2);
			alert('Critical strike chance: ' + chr2.getName());
			txt += 'Critical strike chance: <span style="color: white;">' + chr2.getName() + '</span><br>';
		}
		
		// sets the order (1 hit / character / round)
		if(ord) {
			// hero first, villain second
			villainHealth -= chr1_damage;
			avg_hero += chr1_damage;

			if(villainHealth <= 0) {
				txt += (chr1.getName() + ' dealt ' + chr1_damage + ' damage' + ' / ' + chr2.getName() + ' died <br><br>');
				alert  (chr1.getName() + ' dealt ' + chr1_damage + ' damage' + ' / ' + chr2.getName() + ' died');
				break;
			}
			
			heroHealth -= chr2_damage;
			avg_villain += chr2_damage;
			
			if(heroHealth <= 0) {			
				txt += (chr2.getName() + ' dealt ' + chr2_damage + ' damage' + ' / ' + chr1.getName() + ' died <br><br>');
				alert  (chr2.getName() + ' dealt ' + chr2_damage + ' damage' + ' / ' + chr1.getName() + ' died');
				break;
			}
			alert(chr1.getName() + ' dealt ' + chr1_damage + ' damage' + ' / ' + chr2.getName() + ' dealt ' + chr2_damage + ' damage');
		}
		else {
			// villain first, hero second
			heroHealth -= chr2_damage;
			avg_villain += chr2_damage;

			if(heroHealth <= 0) {
				txt += (chr2.getName() + ' dealt ' + chr2_damage + ' damage' + ' / ' + chr1.getName() + ' died <br><br>');
				alert  (chr2.getName() + ' dealt ' + chr2_damage + ' damage' + ' / ' + chr1.getName() + ' died');
				break;
			}

			villainHealth -= chr1_damage;
			avg_hero += chr1_damage;

			if(villainHealth <= 0) {
				txt += (chr1.getName() + ' dealt ' + chr1_damage + ' damage' + ' / ' + chr2.getName() + ' died <br><br>');			
				alert  (chr1.getName() + ' dealt ' + chr1_damage + ' damage' + ' / ' + chr2.getName() + ' died');	
				break;
			}
			
			alert(chr2.getName() + ' dealt ' + chr2_damage + ' damage' + ' / ' + chr1.getName() + ' dealt ' + chr1_damage + ' damage');
		}
		
		txt += chr1.getName() + ' health: ' + heroHealth + ' / ' + chr2.getName() + ' health: ' + villainHealth + '<br>' +
		       chr1.getName() + ' damage: ' + chr1_damage + ' / ' + chr2.getName() + ' damage: ' + chr2_damage + '<br><br>';
	}
	
	// and the winner is..
	if (heroHealth > 0) {
		txt += ('<span class="text-white">' + chr1.getName() + '</span> saved us from the villains : ' + heroHealth + ' health left');
		// compute characters' average damage
		avg_hero = Math.floor((avg_hero / rounds) * 10) / 10;
		avg_villain = Math.floor((avg_villain / (rounds - 1)) * 10) / 10; // if villain was defeated, he had one hit less
	}
	else {
		txt += ('Villains captured again, because of <span class="text-white">' + chr2.getName() + '</span> : ' + villainHealth + ' health left');
		// compute characters' average damage
		avg_hero = Math.floor((avg_hero / (rounds - 1)) * 10) / 10; // analogous to previous case
		avg_villain = Math.floor((avg_villain / rounds) * 10) / 10;
	}

	// crits stats
	txt_crit += chr1.getName() + ": " + crits_hero + "<br>" +
	            chr2.getName() + ": " + crits_villain + "<br>";

	// damage stats
	txt_dmg += "there was a number of <u>" + rounds + " rounds</u><br><br>" +
			   "<u>average damage</u><br>" + 
			   chr1.getName() + ": " + avg_hero + "<br>" +
			   chr2.getName() + ": " + avg_villain;

	document.getElementById("battle").innerHTML = txt; // shows battle stats
	
	document.getElementById("crit_stats").innerHTML = txt_crit; // shows crits stats

	document.getElementById("damage_stats").innerHTML = txt_dmg; // shows damage stats

	document.getElementById("play_again").innerHTML = "Play again"; // change the text of the button from 'Go back' to 'Play again'
}
