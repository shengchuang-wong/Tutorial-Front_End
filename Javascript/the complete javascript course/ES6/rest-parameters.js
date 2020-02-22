// Lecture: Rest parameters

/*
// ES5
function isFullAge5() {
	console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);
	argsArr.forEach(function(current) {
		console.log((2016 - current) >= 18);
	});
}

isFullAge5(1990, 1999, 1965); // is an object, not array


// ES6
function isFullAge6(...years) {
	console.log(years);
	years.forEach(current => console.log((2016 - current) >= 18));
}

isFullAge6(1990, 1999, 1965, 2000, 1999);
*/


// below describe how to add argument inside function の function

// ES5
function isFullAge5(limit) {
	console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments, 1); // cut or remove the 1st argument
	argsArr.forEach(function(current) {
		console.log((2016 - current) >= limit);
	});
}

isFullAge5(21, 1990, 1999, 1965); // is an object, not array


// ES6
function isFullAge6(limit, ...years) {
	console.log(years);
	years.forEach(current => console.log((2016 - current) >= 18));
}

isFullAge6(21, 1990, 1999, 1965, 2000, 1999);