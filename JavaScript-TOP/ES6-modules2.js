// import { greeting, farewell } from './ES6-modules.js';
// import helloMaria from './ES6-modules.js';

// same ass
import helloMaria, {greeting, farewell} from './ES6-modules.js'

console.log(greeting);
console.log(farewell);

console.log(helloMaria);

import { cube, foo, graph } from './ES6-modules.js';

graph.options = {
  color: 'blue',
  thickness: '3px',
};

graph.draw(); 
console.log(cube(9)); 
console.log(foo); 

import { getPrimes } from "./ES6-modules.js";

console.log(getPrimes(20));