// Lecture: Blocks and IIFEs

// achieve data privacys

// ES5
(function() {
	var c = 3;
})();

//console.log(c);

// ES6
{
	const a = 1;
	let b = 2;
	var c = 3;
}

console.log(c); // but var allow access, because var did not support by ES6 block
console.log(a + b); // a and b is not defined. Because they are private within its block


