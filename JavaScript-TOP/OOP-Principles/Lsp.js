// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
    
//     setWidth(width) {
//         this.width = width
//     }

//     setHeight(height) {
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }

// class Square extends Rectangle {
//     setWidth(width) {
//         this.width = width
//         this.height = width
//     }
//     setHeight(height) {
//         this.height = height
//         this.width = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }

// function increaseRectangleWidth(rectangle) {
//     rectangle.setWidth(rectangle.width + 1)
// }

// const rectangle1 = new Rectangle(10, 2)
// const rectangle2 = new Rectangle(5, 5)

// increaseRectangleWidth(rectangle1)
// increaseRectangleWidth(rectangle2)

// console.log(rectangle1.area());
// console.log(rectangle2.area());


// Follow Liskov Substitution Principle

class Shape {
  area() {
    throw new Error('area() must be implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  setSize(size) {
    this.size = size;
  }

  area() {
    return this.size * this.size;
  }
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5);

rectangle.setWidth(11);
square.setSize(6);

console.log(rectangle.area());
console.log(square.area());