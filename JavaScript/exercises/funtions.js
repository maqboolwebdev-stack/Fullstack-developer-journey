function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

function findMax(arr) {
  return Math.max(...arr);
}

function countVowels(str) {
  let count = 0;
  const string = str.toLowerCase().trim().split('');

  string.forEach((letter) => {
    if ('aeiou'.includes(letter)) {
      count++;
    }
  });
  return count;
}

function double(n) {
  return n * 2;
}

function triple(n) {
    return n * 3;
}

function applyTwice(fn, value) {
  return fn(fn(value));
}

function makeCounter() {
  let count = 0;
  return function counter() {
   count++;
   return count
  }
}

console.log(add(5, 3));
console.log(isEven(10), isEven(7));
console.log(greet('Ali'));
console.log(greet());
console.log(findMax([4, 9, 2, 7]));
console.log(countVowels('JavaScript'));
console.log(applyTwice(double, 5));
console.log(applyTwice(triple, 5));

console.log(makeCounter()());
const counter = makeCounter();
counter();
counter();
console.log(counter());
