const array = [1,2,4,1,6,3,4,2];

function removeDuplicates(arr) {
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i)
        }
    }
    return uniqueArr

}

console.log(removeDuplicates(array));

// ***********************************************************************************************
// ********************************repeated elements count****************************************
// ***********************************************************************************************

const array2 = [34, 44, 34, 22, 22, 44, 55];

// O/P -- { '22': 2, '34': 2, '44': 2, '55': 1 }

// ***** method-1********

function repeat(arr) {
    let obj = {};
    for(let i = 0; i< arr.length; i++) {
        let count = 1
        for(let j = i+ 1; j< arr.length; j++) {
            if(arr[i] == arr[j]) {
                count++
                arr[j] = -1
            }
        }
        if(count && arr[i] !== -1 ) {
            obj[arr[i]] = count;
        }
    }
    return obj
}

const result = repeat(array2)
console.log(result); //  {22: 2, 34: 2, 44: 2, 55: 1}

// ***** method-2********

const array3 = [34, 44, 34, 22, 22, 44, 55];

function reduceRepeat(arr) {
    let count = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] > 0 ? acc[cur] + 1 : 1;
        return acc

    }, {})
    return count
};
let result2 = reduceRepeat(array3);
console.log(result2); // {22: 2, 34: 2, 44: 2, 55: 1}

// ***********************************************************************************************
// ********************************non-repeated elements from array*******************************
// ***********************************************************************************************
// get unique elements array

const array1 = [1,2,3,4,5,1,2,3];
// o/p -- [4,5]

function unique(arr) {
    let newArr = []
   for(let i = 0; i< arr.length; i++) {
       let count = 1;
       for(let j = i+1; j< arr.length; j++) {
           if(arr[i] == arr[j]) {
               count++
               arr[j] = -1
           }
       }
       if(count == 1 && arr[i] !== -1) {
           newArr.push(arr[i])
       }
       
      
   }
   return newArr
    
}
const res = unique(array1);
console.log(res)

// ***********************************************************************************************
// *************************************reverse a number******************************************
// ***********************************************************************************************
// reverse a number
let num = 12345;

function reverse(numb) {
    let str = String(numb);
    let newStr = ''
    console.log(str.length)
    // let revStr = str.split('').reverse().join('')
    // return Number(revStr)
    for(let i = str.length; i> 0; i--) {
        console.log(i)
        newStr = newStr + i
    }
    return Number(newStr)
    
}

let resp = reverse(num);
console.log(resp, typeof resp);

// ***********************************************************************************************
// ****************************Unique elements from two arrays************************************
// ***********************************************************************************************

const array4 = [1,2,3,5,9,6];
const array5 = [1,3,8,4,9]
// o/p --[1,3,9]

function duplicates(arr1, arr2) {
    // for(let i = 0; i< arr1.length; i++) {
    //     if(arr2.includes(arr1[i])) {
    //         newArr.push(arr1[i])
    //     }
    // }
    let newArr = arr1.filter((item) => arr2.includes(item))
    return newArr
}

const commonEle = duplicates(array1, array2);
console.log(resp)
