// getters and setters

let user = {
    firstName: 'Ali',
    secondName: 'Bal',

    get fullname() {
        return `${this.firstName} ${this.secondName}`;
    },

    set fullname(value) {
         [this.firstName, this.secondName] = value.split(' ')
    }
}

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
        }
    });

    console.log(user2.profile);

    for(key in user2) {
        console.log(key);
    }

    let user3 = {
        get name () {
            return this._name;
        },
        
        set name (value) {
            if(value.length < 4) {
                console.log(` is to short for Name. Please ty Long!`);
                return;
            }
            this._name = value;
        }
    }

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

        Object.defineProperty(this, 'age',{
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        })
    };

    let alu = new User('alu', new Date(2000, 6, 1));

    console.log(alu.birthday);
    console.log(alu.name);
    console.log(alu.age);