class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    matchAges(user2) {
        if (this.age < user2.age) {
            console.log(this.firstName + " è più giovane di " + user2.firstName);
        } else if (this.age > user2.age) {
            console.log(user2.firstName + " è più giovane di " + this.firstName);
        } else {
            console.log(this.firstName + " e " + user2.firstName + " hanno la stessa età");
        }
    }
}

let x = new User("Marco", "Zagaria", 29, "Milano");
let y = new User("Francesco", "Zagaria", 24, "Milano");
y.matchAges(x);