const arr = [4,5,6, [3,7,8,[10,12,34 , [11, 13]]]];
let newArr = []

function flatArr(ar) {
    for(let i=0; i< ar.length; i++) {
        //checking if the element is an array type
        if(Array.isArray(ar[i])) {
            // if its an array -- we are calling flarArr() again
            flatArr(ar[i])
        } else {
            newArr.push(ar[i])
        }
    }
    
}
flatArr(arr)
console.log(newArr);