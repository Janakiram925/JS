class Person {
     firstName;
     lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `Full Name is ${this.firstName} ${this.lastName}`
    }


}

var person = new Person('Ram', 'Vundavalli');
var fullName = person.getName();
console.log(fullName);
