function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return [sortedLeft, sortedRight];
}

console.log(mergeSort([3, 6, 8, 9, 34, 87, 90, 32]));

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(16, 24));
console.log(16 % 24);

