// Lecture: Arrow functions 2

// ES5
var box5 = {
	color: "green",
	position: 1,
	clickMe: function() {

		var self = this;

		document.querySelector(".green").addEventListener("click", function() {
			var str = "This is box number " + self.position + " and it is " + self.color;
			alert(str); 
		});
	}
}

box5.clickMe(); // cannot access this from the function (use self = this) instead



// ES6
const box6 = {
	color: "blue",
	position: 2,
	clickMe: function() {
		document.querySelector(".blue").addEventListener("click", () => {
			var str = "This is box number " + this.position + " and it is " + this.color;
			alert(str); 
		});
	}
}

box6.clickMe(); // ES6 allow using this, by eliminate function() into () =>

var color = "global orange";
var position = 3;

const box7 = {
	color: "orange",
	position: 3,
	clickMe: () => {
		document.querySelector(".orange").addEventListener("click", () => {
			var str = "This is box number " + this.position + " and it is " + this.color;
			alert(str); 
		});
	}
}

box7.clickMe(); // this does not work because method share this keyword with the window/global


function Person(name) {
	this.name = name;
}

var friends = ["Bob", "Jane", "Mark"];

// ES5
Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(function(el) {
		return this.name + " is friends with " + el;
	}.bind(this));
	console.log(arr);
}

new Person("John").myFriends5(friends); // function inside function using bind allow using this keyword


// ES6.
Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map((el) => `${this.name} is friends with ${el}`);
	console.log(arr);
}
new Person("Mike").myFriends6(friends); 

