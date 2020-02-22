// Lecture: efault parameters


// ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {
	
	lastName === undefined ? lastName = "Smith" : lastName = lastName;
	nationality == undefined ? nationality = "SkyLand" : nationality = nationality;

	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}

var john = new SmithPerson5("John", 1990);
console.log(john);

var emily = new SmithPerson5("Emily", 1983, "Diaz", "Spanish");
console.log(emily);


// ES6
function SmithPerson6(firstName, yearOfBirth, lastName = "Smith", nationality = "SkyLand") {
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;	
}

var john = new SmithPerson6("John", 1990);
console.log(john);

var emily = new SmithPerson6("Emily", 1983, "Diaz", "Spanish");
console.log(emily);