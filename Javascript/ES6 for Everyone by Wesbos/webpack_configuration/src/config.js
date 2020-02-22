const apiKey = 'abc123';

// 2 types of export

// 1. default exports

export default apiKey;

// To consume it
// import apiKey from './src/config';
// console.log(apiKey);

// 2. named exports

export const apiKey_1 = 'abc123456';

// import { apiKey_1 } from './src/config';
// console.log(apiKey_1);

export const url = 'http://kingkong.com'

// export function
export function sayHi(name = 'anonymous') {
	console.log(`Hello there ${name}!`);
}

// export multiple data
const age = 100;
const dog = 'snickers';

export { age, dog };

// import { age, dog } from '...';

