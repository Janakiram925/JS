// find vs filter

var employee = [
    {
        name: 'Ram',
        Dept: 'IT'
    },
    {
        name: 'Shiva',
        Dept: 'Finance'
    },
    {
        name: 'steven',
        Dept: 'IT'
    }
];
//find -- If we want if somebody in employee working in IT we can use find -- single value.

var res = employee.find((item) => item.Dept == 'IT');
console.log(res);
// {
//     "name": "Ram",
//     "Dept": "IT"
// }

// filter -- if we want people who are working in IT we need to use filter -- multiple values

var filterRes = employee.filter((item) => item.Dept == 'IT');
console.log(filterRes);

// [
//     {
//         "name": "Ram",
//         "Dept": "IT"
//     },
//     {
//         "name": "steven",
//         "Dept": "IT"
//     }
// ]

// --------------------------------->>>>>>>--------------------------------------------------------
// --------------------------------->>>>>>>--------------------------------------------------------
// --------------------------------->>>>>>>--------------------------------------------------------

// Map vs forEach

const numArr = [2, 3, 6, 8, 9];

// const newArr = numArr.map((ele) => {
//     return ele * 2
// })
const newArr = numArr.forEach((ele, i) => {
    return numArr[i] = ele * 2
})
console.log(`Old arr ${numArr}`);
console.log(`new Arr ${newArr}`);

// --------------------------------->>>>>>>--------------------------------------------------------
// --------------------------------->>>>>>>--------------------------------------------------------
// --------------------------------->>>>>>>--------------------------------------------------------

// map vs filter vs forEach

var  arr = [1,2,3,4,5,6];
var res = arr.filter((item) => {
    console.log(item%2) // [1,0,1,0,1,0]   
    return item%2
});
console.log(res)  // [ 1, 3, 5 ] --> returns elements which are satisfying condition in new array.
// It should return a truthy value to keep the element in the resulting array

//A shallow copy of the given array containing just the elements that pass the test. 
// If no elements pass the test, an empty array is returned.

var arr1 = [1,2,3,4,5,6]
var res1 = arr1.map((item) => {
    return item%2
})
console.log(res1); 
// [1, 0, 1, 0, 1, 0] --> returns the results in  new array after applying logic on elements

var arr2 = [1,2,3,4,5,6];
arr2.forEach((item, i) => {
   return arr2[i] = item*2
})
console.log(arr2);
// does not have any return type, operations has to be performed on existing array

//------------------------------------xxxxxxxxxxxxxxxx------------------------------------------
//------------------------------------xxxxxxxxxxxxxxxx------------------------------------------
//------------------------------------xxxxxxxxxxxxxxxx------------------------------------------

// prime numbers using filter
// prime number -- 
// a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {

    for(let i=2; num > i; i++) {
        if(num%i == 0) {
            return false
        }
    }
    return num > 1
}

let result = array.filter((item) => isPrime(item));
console.log(result);


