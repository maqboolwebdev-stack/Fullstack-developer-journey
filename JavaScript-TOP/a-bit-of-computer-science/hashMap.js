const uniqueNumbers = new Set([1, 2, 3, 3, 4, 1, 2]);

console.log(uniqueNumbers);

uniqueNumbers.add(5);
console.log(uniqueNumbers.has(3)); // for checking true or false (very fast)
console.log(uniqueNumbers.size);
uniqueNumbers.delete(2);

console.log(uniqueNumbers);

const myMap = new Map();

const userObj = { id: 1 };
myMap.set('name', 'Waqas');
myMap.set(42, 'The Answer');
myMap.set(userObj, 'Secret Data');
myMap.set(true, 'Boolean key check');

console.log(myMap.get(userObj));
console.log(myMap.size);
console.log(myMap.has(42));

console.log(
  '--------------------------------------------------------------------------',
);

function hash(name) {
  return name.charAt(0);
}

console.log(hash('waqas'));

const buckets = new Array(10);

function hash(key) {
  let hashCode = 0;

  for (let i = 0; i < key.length; i++) {
    hashCode += key.charCodeAt(i);
  }

  return hashCode;
}

function set(key, value) {
  const index = hash(key) % buckets.length;

  buckets[index] = [key, value];
}

function get(key) {
  const index = hash(key) % buckets.length;

  const pair = buckets[index];

  if (pair && pair[0] === key) {
    return pair[1];
  }

  return null;
}

set('Fred', 'Smith');

console.log(get('Fred'));
// "Smith"


function stringToNumber(string) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
}

function hash2(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

console.log(hash2('waq', 'maq'));

console.log(stringToNumber('Sara'));
console.log(stringToNumber('raSa'));

