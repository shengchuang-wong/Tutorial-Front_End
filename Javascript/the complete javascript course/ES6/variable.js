// Lecture: let and const

/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

// ES6

// constant variable,  cannot be changed
const name6 = "Jane Smith";

// var = let
let age6 = 23;

name6 = "Jane Miller";
console.log(name6);
*/

// ES5
function driversLicense5(passedTest) {

	if (passedTest) {
		console.log(firstName); // undefined, no error
		var firstName = "John";
		var yearOfBirth = 1990;
	}

	console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {

	//console.log(firstName); // undefined, error occured
	let firstName;
	const yearOfBirth = 1990; // constant cannot be work outside of the block

	if (passedTest) {
		firstName = "John";
		
	}
	
	console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
}

driversLicense6(true);

/*
// ES5
var i = 23;

for (i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i); // outside i has changed
*/

//ES6
let i = 23;

for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i); // let i= sepearate variable, so outside i did not change