function secondLargestNumber(array) {
// edge case for negative numbers -infinity is the best practice for the negative numbers
  let maxNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (const num of array) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  const updatedArray = array.filter((num) => num !== maxNumber);

  for (const num of updatedArray) {
    if (num > secondLargestNumber) {
      secondLargestNumber = num;
    }
  }

  const result = `Your array is [${array}]: and Second Largest number is '${secondLargestNumber}'`;
  console.log(result);
}

const array = [10, 34, 934, 34, 25, 872, 63];

secondLargestNumber(array);
secondLargestNumber([10, 5, 20, 8, 12]);
secondLargestNumber([5, 1, 9, 3]);
secondLargestNumber([100, 50, 200, 150]);

secondLargestNumber([-1,-354,-2,-54,-96, -3])
