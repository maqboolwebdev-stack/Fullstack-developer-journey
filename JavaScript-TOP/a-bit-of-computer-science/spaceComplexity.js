// O(1) - Constant complexity
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(9, 9));

// 0(N) - Linear complexity
function sumArr(arr) {
  const copyArr = arr.slice();
  let sum = 0;
  copyArr.forEach((number) => {
    sum += number;
  });
  return sum;
}

const arr = [1, 5, 6, 12, 76];
const arr2 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(sumArr(arr));

function sumObjectValues(obj) {
  const copyObject = { ...obj };
  let sum = 0;
  Object.values(copyObject).forEach((value) => {
    sum += value;
  });
  return sum;
}

const obj = {
  d: 34343,
  q: 757,
};

console.log(sumObjectValues(obj));

function squareNumsInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }

  return arr;
}

function squareNumsNewArr(arr) {
  // note that `Array.prototype.map()` makes a *new* array
  return arr.map((number) => number * number);
}

console.log(squareNumsInPlace(arr));
console.log(squareNumsNewArr(arr2));
