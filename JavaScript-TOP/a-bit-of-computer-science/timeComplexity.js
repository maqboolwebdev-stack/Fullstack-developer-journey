function oddNumbersLessThanTen() {
  let currentNumber = 1;

  while (currentNumber < 10) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}

oddNumbersLessThanTen();

function oddNumbers(maxNumber) {
  let currentNumber = 1;

  while (currentNumber < maxNumber) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}

oddNumbers(10);

// O(1) — Constant Time
function getBalance(account) {
  return account.balance; // Direct access, no loop
}

const user = { name: 'Ali', balance: 5000 };
console.log(getBalance(user)); // O(1)

// O(n) — Linear Time
function findContact(contacts, name) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i] === name) {
      return true;
    }
  }
  return false;
}

const contacts = ['Ali', 'Sara', 'Ahmed', 'Bilal'];
console.log(findContact(contacts, 'Ahmed')); // O(n)

// O(log n) — Logarithmic Time
function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 9)); // O(log n)

// O(n log n) — Linearithmic Time
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([5, 2, 9, 1, 5, 6])); // O(n log n)

// Ya seedha built-in use karlo:
console.log([5, 2, 9, 1, 5, 6].sort((a, b) => a - b)); // O(n log n)

// O(n²) — Quadratic Time
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log('Duplicate found:', arr[i]);
      }
    }
  }
}

findDuplicates([1, 2, 3, 2, 4, 5, 1]); // O(n²)

function findDuplicatesFast(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      console.log('Duplicate found:', num);
    }
    seen.add(num);
  }
}

findDuplicatesFast([1, 2, 3, 2, 4, 5, 1]); // O(n) — bohot fast!

// O(n³) — Cubic Time
function matrixMultiply(A, B, n) {
  let C = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return C;
}

// O(2ⁿ) — Exponential Time
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);  // 2 calls har baar
}

console.log(fibonacci(10));  // O(2ⁿ) — slow ho jata hai jab n bara ho

function fibonacciFast(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];

    memo[n] = fibonacciFast(n - 1, memo) + fibonacciFast(n - 2, memo);
    return memo[n];
}

console.log(fibonacciFast(50));  // O(n) — bohot fast, memo se purane results reuse hotay hain


function permutations(arr) {
    if (arr.length <= 1) return [arr];

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let restPerms = permutations(rest);

        for (let perm of restPerms) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
}

console.log(permutations([1, 2, 3]));
// n=3 -> 3! = 6 combinations
// n=10 -> 10! = 3,628,800 combinations (bohot zyada!)


const fruits = ["aam", "kela", "seb", "angoor"];

// O(1): seedha index se nikal liya
console.log(fruits[2]);

// O(N): har item ko ek baar dekha (4 items = 4 steps)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// O(n²): loop ke andar loop (4 items = 16 steps)
for (let i = 0; i < fruits.length; i++) {
  for (let j = 0; j < fruits.length; j++) {
    console.log(fruits[i], fruits[j]);
  }
}
