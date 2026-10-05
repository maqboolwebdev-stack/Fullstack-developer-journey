const d = [1, 3, [3, [4, 5, 4, 4, 4], 5], 3];
const e = [2];
const dd = [2, [2, [4, 546, [6, [12, [23]]]], [90]], [34]];

function nestedArray(arr) {
  let maxDepth = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      let currDepth = nestedArray(item);

      if (currDepth > maxDepth) {
        maxDepth = currDepth;
      }
    }
  }
  return 1 + maxDepth;
}

console.log(nestedArray(d));
console.log(nestedArray(e));
console.log(nestedArray(dd));

// collectNumbersAbove
const numbers = [3, [55, 46, 7], 90, 2, 6, [23, , 45, [12]]];

function collectNumbersAbove(arr, threshold) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(collectNumbersAbove(item, threshold));
    } else {
      if (item > threshold) {
        result.push(item);
      }
    }
  }
  return result;
}

console.log(collectNumbersAbove(numbers, 10));

function coding(num) {
  if (num === 0) {
    console.log('coding has been done!');
    return;
  } else {
    console.log('coding in progress!');
    coding(num - 1);
  }
}

coding(5);

function sumRage(num) {
  let total = 0;
  for (let i = num; i > 0; i--) {
    total += i;
  }
  return total;
}

console.log(sumRage(8));

function sumRageRecursive(num, total = 0) {
  if (num === 0) {
    console.log(`this is the totalSum: ${total}`);
    return total;
  }
  return sumRageRecursive(num - 1, total + num);
}

console.log(sumRageRecursive(8));

function gridPaths(n, m) {
  if (n === 1 || m === 1) {
    return 1;
  } else {
    return gridPaths(n, m - 1) + gridPaths(n - 1, m);
  }
}

console.log(gridPaths(3, 5));

function countPartition(n, m) {
  if (n === 0) {
    return 1;
  } else if (m === 0 || n < 0) {
    return 0;
  } else {
    return countPartition(n - m, m) + countPartition(n, m - 1);
  }
}

console.log(countPartition(12, 9));
