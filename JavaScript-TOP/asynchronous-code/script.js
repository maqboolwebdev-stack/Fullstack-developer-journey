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