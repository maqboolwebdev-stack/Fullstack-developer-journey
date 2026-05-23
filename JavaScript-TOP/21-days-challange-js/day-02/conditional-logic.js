// Q1 Find the maximum of three numbers

// let a = 50;
// let b = 410;
// let c = 115;  // can be also

function findMaximumOfThree(a, b, c) {
    let max;
    if(a >= b && a >= c) {
        max = a;
    } else if(b >= c) {
        max = b;
    } else {
        max = c;
    }
    console.log(max);
}

findMaximumOfThree(122, 123, 23)
findMaximumOfThree(442, 12, 23)

// Q2 Check if Number is Positive, Negative, or Zero

function checkNumberStatus(a) {
    let status;
    if(a < 0) {
        status = `${a} is a Negative`;
    } else if(a === 0) {
        status = `${a} is a Zero`;
    } else {
        status = `${a} is a Positive`;
    }
    console.log(status);
};

checkNumberStatus(3);
checkNumberStatus(-3.9);
checkNumberStatus(0.1);

// Q3 Calculate Electricity Bill

function calculateElectricityBill(units) {
    let bill;
    if(units <= 100) {
        bill = units * 5;
    } else if(units <= 200) {
        bill = (100 * 5) + (units - 100) * 7;
    } else if(units <= 300) {
        bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
    } else if(units >= 300) {
        bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
    } else {
        console.log('Invalid Units');
        return;
    }
    console.log(`Total Bill: PKR-${bill}`);
};

calculateElectricityBill(230);

// Check if a Character is vowel or consonant

function characterChecker(letter) {
    if(!letter === isNaN) {
        return console.log();
    }
    if(letter === 'a' || 
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u') {
        console.log('Vowel');
    } else {
        console.log('Consonant');
    }
};

characterChecker('e');
characterChecker('z');