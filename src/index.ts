import { isString } from './helper';

const message = 'Hello Typescript!';
console.log(message);
console.log(`"${message}" is a string?${isString(message)}`);
