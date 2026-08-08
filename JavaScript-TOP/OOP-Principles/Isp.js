class Worker {
    work() {
        throw new Error("This method must be overridden");
    }
    eat() {
        throw new Error("This method must be overridden");
    }
    sleep() {
        throw new Error("This method must be overridden");
    }
}

class HumanWorker extends Worker {
    work() {
        console.log("Human is working...");
    }
    eat() {
        console.log("Human is eating...");
    }
    sleep() {
        console.log("Human is sleeping...");
    }
}

class RobotWorker extends Worker {
    work() {
        console.log("Robot is working...");
    }
    eat() {
        throw new Error("Robots don't eat!");
    }
    sleep() {
        throw new Error("Robots don't sleep!");
    }
}

// Usage
const robot = new RobotWorker();
robot.work();

// Solution: (Interface Segregation)
class Workable {
    work() {
        throw new Error("This method must be overridden");
    }
}

class Eatable {
    eat() {
        throw new Error("This method must be overridden");
    }
}

class Sleepable {
    sleep() {
        throw new Error("This method must be overridden");
    }
}

class HumanWorker extends Workable {
    work() {
        console.log("Human is working...");
    }
    eat() {
        console.log("Human is eating...");
    }
    sleep() {
        console.log("Human is sleeping...");
    }
}

class RobotWorker extends Workable {
    work() {
        console.log("Robot is working efficiently without breaks!");
    }
}

// Usage
const human = new HumanWorker();
human.work();
human.eat();

const robot = new RobotWorker();
robot.work(); 