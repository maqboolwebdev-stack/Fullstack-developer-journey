function callback(callback) {
  console.log('my name is callback');
}

function normalFunction(callback) {
  callback();
  console.log('normal function');
}

normalFunction(callback);


const promise = new Promise((resolve, reject) => {
    const yes = true;

    if (yes) {
        resolve('yes hogya and mien samj raha hu promise');
    } else {
        reject('no, hogya ab kuch samj aai?');
    }
})


promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);

});

// Ek function jo promise return karta hai
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = { id: 1, name: "Ali" };
            resolve(user); // Kaam kamyabi se poora hua aur data bhej diya
        }, 2000);
    });
}

// .then() ka istamal
fetchUserData()
    .then((data) => {
        // Yeh block 2 seconds baad chalega jab promise resolve hoga
        console.log("Data mil gaya:", data.name); // Output: Data mil gaya: Ali
    });

new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    resolve(10);
  }, 3000);

})

.then(function(num) {

  console.log('first then: ', num);

  return num * 2;

})

.then(function(num) {

  console.log('second then: ', num);

  return num * 2;

})

.then(function(num) {

  console.log('third then: ', num);

  return num;
})

.then(function(num) {
    console.log('last then: ', num * 10);
});

new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    reject('Done!');
  }, 3000);

})

.then(function(e) {

  console.log('done', e);

})

.catch(function(e) {

  console.log('catch: ', e);

});




new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Nope");
    }, 3000)
})

.then((e) => {
  console.log("success");
})

.catch((e) => {
  console.log("fail");
})

.finally((e) => {
  console.log("finally");
});

// Promise all()

var req1 = new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    resolve('First!');
  }, 4000);

});

var req2 = new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    reject('Second!');
  }, 3000);

});

Promise.all([req1, req2])

.then(function(results) {

  console.log('Then: ', results);

})

.catch(function(err) {

  console.log('Catch: ', err);

});


var req1 = new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    resolve('First!');
  }, 8000);

});

var req2 = new Promise(function(resolve, reject) {

  // A mock async action using setTimeout
  setTimeout(function() {
    resolve('Second!');
  }, 3000);

});

Promise.race([req1, req2])

.then(function(one) {

  console.log('Then: ', one);

})

.catch(function(one, two) {

  console.log('Catch: ', one);

});

