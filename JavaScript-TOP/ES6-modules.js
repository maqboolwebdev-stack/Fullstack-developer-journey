// (() => {
//   const greeting = 'Hello, Odinite!';
// })();

// const greeting = (() => {
//   const greetingString = 'Hello, Odinite!';
//   const farewellString = 'Bye bye, Odinite!';
//   return greetingString;
// })();

const greeting = 'Hello, World!';
const farewell = 'Bye bye, Gol!';
export { greeting, farewell };

// export default 'Hello! Maria.'

const greet = 'Hello Maria!'
export default greet;

// A module can have only one 'default export'.
// And a 'named export' and a 'default export' can work together in the same module.

function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: 'white',
    thickness: '2px',
  },
  draw() {
    console.log('From graph draw function');
  },
};

export { cube, foo, graph };

export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}