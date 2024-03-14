var obj = {
    name: 'ram'
}

const sayHello = function (age, occupation) {
    console.log(`Hello ${this.name} is ${age} is a ${occupation}`);
}
// sayHello.call(obj, 28);

const bindmyName = sayHello.bind(obj);
bindmyName(28, 'software engineer');
bindmyName(30, 'business man');
// using bind function can be reused and called later point of time.

// call printAnimals such that it print all animals in object;

const animals = [
    { species: 'Lion', name: 'king' },
    { species: 'Whale', name: 'queen' },
];

function printAnimals(i) {
    console.log(`${i} ${this.species} : ${this.name}`)
}

printAnimals.call(animals); //it will not work because of array of objects

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i)
}

const nestedObj = {
    name: 'ram',
    city: 'Hyderabad',
    details: {
        age: 28,
        department: 'IT',
        technologies: {
            frontEnd: 'React',
            database: 'momgodb',
            experience: {
                UI: '4 years',
                backEnd: '1 year'
            }
        }
    }
}

console.log(Object.entries(nestedObj));