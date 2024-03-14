// prototype is a mechanism by which you can share common properties & methods amoung different objects

function Employee(Name, Gender) {
    this.Name = Name;
    this.Gender = Gender
}

Employee.prototype.Department = 'IT';
Employee.prototype.welcome = function() {
    console.log(`welcome ${this.Department} department`)
}

const emp1 = new Employee('Ram', 'Male');
console.log(emp1.Department); // IT

const emp2 = new Employee('shiva', 'male');
console.log(emp2.Department); // IT
emp2.welcome();

// emp1 and emp2 both are different objects, but sharing this depatment.
//basically inheriting departmrnt from prototype