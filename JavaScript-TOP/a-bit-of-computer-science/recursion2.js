const start = performance.now();

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(13, 4));

const end = performance.now();

console.log(end - start);

console.time();

function recursivePow(x, n) {
  return n === 1 ? x : x * recursivePow(x, n - 1);
}

console.log(recursivePow(13, 4));

console.timeEnd();

function counter(n, count = 1) {
  if (count > n) {
    return;
  }
  console.log(count);
  counter(n, count + 1);
}

counter(14);
counter(11);

function iterativeFactorial(n, result = 1) {
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(iterativeFactorial(5));

function recursiveFactorial(n, result = 1) {
    if(n === 1) {
        return result;
    } else {
        return n * recursiveFactorial(n - 1)
    }
}


console.log(recursiveFactorial(5));
