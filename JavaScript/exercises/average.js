function average(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}
const marks = [80, 90, 75, 60];
console.log("Average: " + average(marks));

