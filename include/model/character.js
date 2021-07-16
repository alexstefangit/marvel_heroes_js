class Character {
    constructor(name, description, attack, health) {
        this.__name = name;
        this.__description = description;
		this.__attack = attack;
		this.__health = health;
    }
	
	getName() {
		return this.__name;
	}
	
	setName(name) {
		this.__name = name;
	}
	
	getDescription() {
		return this.__description;
	}
	
	setDescription(description) {
		this.__description = description;
	}
	
	getAttack() {
		return this.__attack;
	}
	setAttack(attack) {
		this.__attack = attack;
	}
	
	getHealth() {
		return this.__health;
	}
	
	setHealth(health) {
		this.__health = health;
	}
}
