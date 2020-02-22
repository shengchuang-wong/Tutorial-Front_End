// Lecture: Maps


const question = new Map();
question.set("question", "What is the official name of the latest major Javascript version?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));
console.log(question.size);
console.log(question);

if (question.has(4)) {
	console.log("Key with 4 is found.");
	//question.delete(4);
} else {
	console.log("Key with 4 is not found.");
}
console.log(question);

// delete question map
//question.clear();
//console.log(question);

// loop through map
question.forEach((value, key) => console.log(
	`This is ${key}, and it's is set to ${value}`
));


// loop through map with destructuring
for (let [key, value] of question.entries()) {
 console.log(
	`This is ${key}, and it's is set to ${value}`
)}


 // loop through map that its key is number
for (let [key, value] of question.entries()) {
	if (typeof(key) === "number") {
		console.log(`Option ${key}: ${value}`);
	}
}

const ans = parseInt(prompt("What is the correct answer?"));

// get the answer
console.log(question.get(ans === question.get("correct")));