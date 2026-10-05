const d = [1, 3, [3, [4, 5, 4, 4, 4], 5], 3];
const e = [2];
const dd = [2, [2, [4, 546, [6, [12, [23]]]],[90]],[34]];

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
