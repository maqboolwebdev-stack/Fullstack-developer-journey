// getters and setters

let user = {
  firstName: 'Ali',
  secondName: 'Bal',

  get fullname() {
    return `${this.firstName} ${this.secondName}`;
  },

  set fullname(value) {
    [this.firstName, this.secondName] = value.split(' ');
  },
};

user.fullname = 'mia zia';

console.log(user.firstName);
console.log(user.secondName);
console.log(user.fullname);

let user2 = {
  name: 'waq',
  age: 22,
};

Object.defineProperty(user2, 'profile', {
  get() {
    return `${this.name} ${this.age}`;
  },

  set(value) {
    [this.name, this.age] = value.split(' ');
  },
});

console.log(user2.profile);

for (key in user2) {
  console.log(key);
}

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log(` is to short for Name. Please ty Long!`);
      return;
    }
    this._name = value;
  },
};

user3.name = 'oif';

console.log(user3.name);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let amir = new User('amir', 25);

// console.log(amir.age);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let alu = new User('alu', new Date(2000, 6, 1));

console.log(alu.birthday);
console.log(alu.name);
console.log(alu.age);

class MyUser {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(this.name);
  }
}

const what = new MyUser('that');

console.log(what.name);

console.log(typeof MyUser);
console.log(MyUser === MyUser.prototype.constructor);
console.log(MyUser.prototype.sayHello);
console.log(Object.getOwnPropertyNames(MyUser.prototype));

function functionUser(name) {
  this.name = name;
}

functionUser.prototype.sayHi = function() {
console.log(this.name);
}

let we = new functionUser('we');

we.sayHi();

let myUser = class myClass {
  sayBy() {
    console.log(myClass);
  }
};

new myUser().sayBy();

// console.log(myClass);  //error, myClass Name is not visible outside of  the class

function makeClasses(phrase) {
  return class {
    sayPrase() {
      console.log(phrase);
    }
  }
};

let user4 = makeClasses('Hello! My name is Ware');

new user4().sayPrase();

class Data{

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(value.length < 4) {
      console.log('Too short!, Please try long');
    }
    this._name = value;
  }
}

let man = new Data('Anna');

console.log(man.name);

man = new Data('di');
