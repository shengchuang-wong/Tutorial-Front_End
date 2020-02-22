import apiKey from './src/config';
import { apiKey_1 as key, sayHi } from './src/config';
console.log(apiKey);
console.log(key);
sayHi();
sayHi('King');

import User, { createURL, gravatar } from './src/user';

const user = new User('Wong Ken', 'wongken@gmail.com', 'wongken.com');
const profile = createURL(user.name);
const image = gravatar(user.email);

console.log(user);
console.log(profile);
console.log(image);