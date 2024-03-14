const array = [1,2,4,1,6,3,4,2];

function getUnique(arr) {
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i)
        }
    }
    return uniqueArr

}

console.log(getUnique(array));