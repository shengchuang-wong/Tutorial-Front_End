// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(element, index) {
	return 2016 - element;
});
console.log(ages5);

// ES6
let ages6 = years.map(element => 2016 - element);
console.log(ages6);

ages6 = years.map((element, index) => `Age element ${index + 1}: ${2016 - element}.`);
console.log(ages6);

ages6 = years.map((element, index) => {
	const now = new Date().getFullYear();
	const age = now - element;
	return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
