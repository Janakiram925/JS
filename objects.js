var obj = {
    name: 'Ram', 
    city: 'Hyderabad',
}
obj.prototype = {
    age: 28
}
console.log(obj, obj.prototype.age);
// create method is used to create object instance from existing object properties and its prototypes
// and assign it to newly created prototype object ***** returns empty object *****
var newObj = Object.create(obj);
console.log(newObj); //{}

for(let i in newObj) {
    console.log(i, newObj)
    console.log(newObj[i]); // returns values
}

// ----------------------------------xxxxxxxxxxxxxxxxxxxxxxxxx--------------------------------
// ----------------------------------xxxxxxxxxxxxxxxxxxxxxxxxx--------------------------------

//Assign is used to assign object properties from source obj to target obj and returns target Object

const sourceObj = {
    name: "Janaki",
    id: 4258,
}

const targetObj = {
    name: 'Ram',
    city: 'Hyderabad'
}

const resultedObj = Object.assign(sourceObj, targetObj);
console.log('assign resulted', resultedObj);