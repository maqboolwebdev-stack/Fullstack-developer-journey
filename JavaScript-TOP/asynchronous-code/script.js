// 1. what is sync and async ?

// ek kaam jab tak complete nahi ho jata tab tak dusra mat chalao complete honey ke baad chaloa isko SYNCHRONOUS kehtey hai.

// ek hi sath multiple kaam ko karna and ho phely complete hojaye acha nahi to kisi ka wait nahi karna ke ye finish hoga to mien shuru kro bulkey ek sath shuru kro and jo phley complete hoga theek baqi isi terha. isko ASYNCHRONOUS kehtey hai.

setTimeout(function() {
    console.log('hey2');
}, 0);

function callBack() {
    console.log('yes');
};

setTimeout(callBack, 4000)

console.log('hey');


const ans = fetch(`https://www.facebook.com`);
console.log(ans);

var myNumber = 1
function addOne() { myNumber++ } // define the function
addOne() // run the function
console.log(myNumber) // logs out 2

// var fs = require('fs') // require is a special function provided by node
// var myNumber = undefined // we don't know what the number is yet since it is stored in a file

// function addOne() {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//   })
// }

// addOne()

// console.log(myNumber) // logs out undefined -- this line gets run before readFile is done

// var fs = require('fs')
// var myNumber = undefined

// function addOne(callback) {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }

// function logMyNumber() {
//   console.log(myNumber)
// }

// addOne(logMyNumber)

function getDataId(dataId, nextDataId) {
setTimeout(() => {
    console.log('data', dataId);
    if (nextDataId) {
        nextDataId();
    }
}, 2000)
}

getDataId(1, () => {
    getDataId(2 ,() => {
        getDataId(3, () => {
            getDataId(4);
        });
    });
});

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    
    if(a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log(`This is in the then ` + message);
}).catch((message) => {
    console.log(`This is in the catch ` + message);
})


for(let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('print hogya baad mien');

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

console.log(Promise);

const promise = new Promise((resolve, reject) => {
    resolve("Hello Waqas");
});
console.log(promise);

promise.then(function (result) {
    console.log(result);
});

const promise1 = Promise.resolve(10);

const promise2 = promise1.then(function (value) {
    return value * 2;
});

console.log(promise2);
