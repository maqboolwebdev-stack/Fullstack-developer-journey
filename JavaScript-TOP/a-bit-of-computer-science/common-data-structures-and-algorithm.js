class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const myQueue = new Queue();

myQueue.enqueue("Waqas");
myQueue.enqueue("Ali");
myQueue.enqueue("Ahmed");

console.log(myQueue.front());

myQueue.dequeue();

console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
