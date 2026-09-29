function secondLargestNumber(array) {
  let max = -Infinity;
  let second = -Infinity;

  for (const num of array) {
    if (num > max) max = num;
  }

  for (const num of array) {
    if (num !== max && num > second) second = num;
  }

  return second === -Infinity ? null : second;
}

const tests = [
  [10, 34, 934, 34, 25, 872, 63],
  [10, 5, 20, 8, 12],
  [-1, -354, -2, -54, -96, -3],
  [4, 4, 4],
];

for (const arr of tests) {
  console.log(`Array [${arr}] -> Second Largest: ${secondLargestNumber(arr)}`);
}
