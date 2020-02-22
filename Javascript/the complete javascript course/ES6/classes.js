// Lecture: CLasses

/*
// ES5 class
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5("John", 1990, "teacher");
john5.calculateAge();

// ES6 class with prototype and static method
class Person6 {
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		let age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);		
	}
	static greeting() {
		console.log("Hey there! I am a static method!");
	}
}

const john6 = new Person6("John", 1990, "teacher");
Person6.greeting();
john6.calculateAge();
*/

// ES5 inheritance
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
	this.medals++;
	console.log("Won Medals: " + this.medals);
}

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6 inheritance
class Person6 {
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		let age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);		
	}
}

class Athlete6 extends Person6 {
	constructor (name, yearOfBirth, job, olympicGames, medals) {
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;	
	}
	wonMedal() {
		this.medals++;
		console.log("Won Medals: " + this.medals);
	}
}

var johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();