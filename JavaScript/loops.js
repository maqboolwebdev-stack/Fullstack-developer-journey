// WHILE LOOP

// while(condition) {
//      code that gets executed as long as the condition is true
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// };

// let someArray = ['Mike', 'Maria', 'John', 'Ali', 'Sonia'];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] === 'Ali') {
//         console.log('Found her');
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
// }

// console.log(someArray); // that's left behind

// //  FibonacciArray

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// const fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }

// console.log(fibonacciArray);
// console.log(nr2);

// let result = 0;
// fibonacciArray.forEach( (add) => {
//     result += add;
// })
// console.log(result);

// Practice Exercise 5.1

// const maxVale = 5;
// const solution = Math.floor(Math.random() * maxVale) + 1;
// let isCorrect = false;

// if(!isCorrect) {
//     const userGuess = Number(prompt(`Guess a between 1 to ${maxVale}`))

//     if(userGuess === solution) {
//         isCorrect = true;
//         console.log('Correct you guessed the number');
//     } else if (userGuess > solution) {
//         console.log('To high! try again');
//     } else {
//         console.log('To low! try again');
//     }
// }

//  DO-WHILE LOOP

// do {
// code to be executed if condition is true 
// } while(condition)

// let number;

// do {
// number = prompt('Please enter a number between 0 to 100');
// } while(!(number >= 0 && number < 100));

// Practice Exercise 5.2

let counter = 0;
let step = 5;

do {
    counter += step;
    console.log(counter);
} while (counter <= 100);

// for loop

// for(initialize variable; condition; statement) {
//     code to be executed
// }

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let arr = [];

for(let i = 1; i <= 100; i++) {
    arr.push(i);
};

let arrTotal = 0;

arr.forEach((add) => {
    arrTotal += add;
});

console.log(arr);
console.log(arrTotal);

let arr2 = [];

for (let i = 0; i <= 100; i = i + 2) {
    arr2.push(i);
};

let arrTotal2 = 0;

arr2.forEach((add) => {
    arrTotal2 += add;
});

console.log(arr2);
console.log(arrTotal2);

// Practice Exercise 5.3

let myWork = [];

for (let i = 1; i <= 10; i++) {
    let obj = {
        lesson: i,
        status: i % 2 === 0? false : true,
    };
    myWork.push(obj)
}

console.log(myWork);

// Nested loops

let arrayOfArrays = [];

for (let i = 0; i < 3; i++) {
    arrayOfArrays.push([]);
    for (let j = 1; j < 7; j++) {
        arrayOfArrays[i].push(j);
    }
};

console.table(arrayOfArrays);

// Practice exercise 5.4

let myTable = [];

const rows = 20;
const column = 10;

let counter2 = 0;

for (let i = 0; i <= rows; i++) {
    let tempTable = [];
    // myTable.push([]);
    for (let j = 1; j <= column; j++) {
        counter2++;
        tempTable.push(counter2);
    }
    myTable.push(tempTable);
}

console.table(myTable);

// loops and array

let names = ['Ali', 'Bobbi', 'John', 'Same', 'Maria'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let names2 = ['Ali', 'Bobbi', 'John', 'Same', 'Maria'];

for(let i = 0; i < names2.length; i++) {
    names2[i] = 'Hello ' + names2[i];
}

console.log(names2);

let names3 = ['Ali', 'Bobbi', 'John', 'Same', 'Maria'];

for(let i = 0; i < names3.length; i++) {
    if(names3[i].startsWith('M')) {
        delete names3[i];
        continue;
    }
    names3[i] = 'Hey ' + names3[i];
}

console.log(names3);


// Practice exercise 5.5


const grid = [];
const row = [];
const cells = 64;
let count = 0;

for(let i = 0; i <= cells + 1; i++) {
    if(count % 8 === 0) {
        row.push(count);
    }
   grid.push(row);
   count++;
}

console.table(grid);

// for of loop

let names4 = ['Bob', 'Zia', 'Jon', 'Gru', 'Tai', 'Loo' ];

for( name of names4) {
    console.log(name);
}

// Exercise 5.6

let arr3 = [];

for (let i = 1; i <= 10; i++) {
    arr3.push(i);
}

console.log(arr3);

for (let i = arr3.length; i <= arr3.length; i++) {
    console.log(arr3.length);
}

for (num of arr3) {
    console.log(num);
}

// Loops and Objects

// for in loop

let car = {
    model: 'Land cruiser',
    make: 'Toyota',
    year: 2026,
    color: 'white',
}

for (property in car) {
    console.log(car[property]);
}
// just log property
for (property in car) {
    console.log(property);
}

