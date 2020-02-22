// Lecture: Arrays

const boxes = document.querySelectorAll(".box");

/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
	current.style.background = "dodgerblue";
});

// ES5
for (var i = 0; i < boxesArr5.length; i++) {
	if(boxesArr5[i].className === "box blue") {
		continue;
	}
	
	boxesArr5[i].textContent = "I changed to dodgerblue!";
}
*/


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => current.style.background = "dodgerblue");

// ES6
for (const current of boxesArr6) {
	if (current.className.includes("blue")) {
		continue;
	}

	current.textContent = "I changed to dodgerblue!";
}



// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current) {
	return current >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));

