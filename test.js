// infinite currying
function addition(x) {
    return function(y) {
        return y ? addition(x+y) : x
    }
}
console.log(addition(1)(2)(3)(4)());

//2

function test(a,b) {}
console.log(test.length)  //2

//3
let arr = [23, 46, 31, 'test', 9, true, '78'] // convert it in to numbers array

function conversion(ar) {
    let ar1 = [];
    for(let i = 0; i < ar.length; i++) {
        if(typeof ar[i] !== 'number') {
            console.log(ar[i])
            ar1.push(Number(ar[i]))
            
        } else {
            ar1.push(ar[i])
        }
    }
    return ar1;
}

console.log(conversion(arr));

//4 

const employee = {
    name: 'Ram Vundavalli',
    // getName: function() {
    //     console.log(`Name is ${this.name}`);
    // }
}

const getName = function() {
    console.log(`Name is ${this.name}`);
}

const employee2 = {
    name: 'Shiva'
}

// employee.getName.call(employee2);
getName.call(employee);
getName.call(employee2);
const bindmyName = getName.bind(employee2);
bindmyName();

//--------------------------------------XXXXXXXXXXXXXXXXXXXXX-----------------------------------------
//--------------------------------------XXXXXXXXXXXXXXXXXXXXX-----------------------------------------
//--------------------------------------XXXXXXXXXXXXXXXXXXXXX-----------------------------------------

// Map vs Objects

var obj = {};
obj[3] = 'hello';
obj['3'] = 'say hello';

console.log(obj);

// {
//     "3": "say hello"
// }
console.log(typeof Object.keys(obj)[0]); // string
// object only takes strings and symbols as keys




