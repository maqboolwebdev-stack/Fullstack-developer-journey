// Q1 Print all numbers divisible by 3 and 5 up to N

let num1 = 30;

for(let i = 1; i <= num1; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
};

// Q2 Find the sum of all odd numbers up to N

let num2 = 10;
let sumOfOddNum = 0;

for(let i = 1; i <= num2; i++) {
    if(i % 2 === 1) {
        sumOfOddNum = i + sumOfOddNum;
        // console.log(i);
    }
}
console.log(sumOfOddNum);

// Q3 Print the cubes of numbers from 1 to N

let num3 = 5;

for(let i = 1; i <= num3; i++) {
    console.log(i ** 3);
};

// Q4 Print only the numbers that are both even and perfect squares

let num4 = 20;

for (let i = 1; i <= num4; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
        console.log(i);
    }
}