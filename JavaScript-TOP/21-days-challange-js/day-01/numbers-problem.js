// Q1. print number to n

let number = 15;
for(let i = 1; i <= number; i++) {
    console.log(i);
};


// Q2 print n to 1 without changing the loop condition of above

for(let i = 1; i <= number; i++) {
    console.log(number - i + 1);
};


// Q3 print all Even number from 1 to n;

let number2 = 20;

for(let i = 0; i <= number2; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Q4 print sum of n natural numbers

let number3 = 5;
let sum = 0;

for(let i = 0; i <= number3; i++) {
    sum = i + sum;
}
console.log(sum);

// Q5 Product (Factorial) of N

console.time();
let number4 = 5;
let f = 1;
for(let i = 1; i <= number4; i++) {
    f *= i;
}
console.log(f);
console.timeEnd();

// Q6 Sum of All Even numbers up to n

let number5 = 21;
let sumOfEven = 0;
for(let i = 1; i <= number5; i++) {
    if(i % 2 === 0) {
        sumOfEven = i + sumOfEven;
        // console.log(i);
    }
}
console.log(sumOfEven);
