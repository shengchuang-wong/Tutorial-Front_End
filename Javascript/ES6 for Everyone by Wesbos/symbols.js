const wes = Symbol('Wes');
const person = Symbol('Wes');

// wes !== person

const classRoom = {
	[Symbol('Mark')]: { grade: 50, gender: 'male' },
	[Symbol('olivia')]: { grade: 80, gender: 'female' },
	[Symbol('olivia')]: { grade: 80, gender: 'female' }
}

for (person in classRoom) {
	console.log(person);
}

const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);
console.log(data);