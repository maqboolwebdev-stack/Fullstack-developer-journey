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


// About class syntax

// Declaration
// class Rectangle {
//   constructor(height,width) {
//     this.height = height;
//     this.width = width;
//   }
// }

//  Expression
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// Expression; the class has its own name
// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log([...square.getSides()]); 

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; 
p1.distance; 
p2.displayName; 
p2.distance; 

console.log(Point.displayName); 
console.log(Point.distance(p1, p2)); 

const animal = class dog{
  bark() {
    console.log(dog);
  }
};

const a = new animal();

a.bark();

class Rectangle3 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square2 = new Rectangle3(10, 10);

console.log(square2.area); // 100
console.log([...square2.getSides()]); // [10, 10, 10, 10]

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

class Animal {
  constructor(name,color) {
    this.name = name;
    this.color = color;
  }

  sleep(){
    console.log(`${this.name} is sleeping!`);
  }

  eat(){
    console.log(`${this.name} is eating`);
  }

  info(){
    console.log(`Name: ${this.name}, Color: ${this.color}`);
  }
}

class Monkey extends Animal {
  
}

const animal2 = new Animal('dog', 'brown');
const m = new Monkey('bru', 'black');

animal2.eat();
m.info();
m.sleep();

function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};

class ChildClass extends OldStyleClass {}

class ModernClass {
  someProperty = 1;
  someMethod() {}
}

class AnotherChildClass extends ModernClass {};

class SomeClass extends class {
  constructor() {
    console.log("Base class");
  }
} {
  constructor() {
    super();
    console.log("Derived class");
  }
}

new SomeClass();
// Base class
// Derived class