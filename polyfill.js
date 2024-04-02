//polyfill for maap
const array = [1,2,3,4,5]

Array.prototype.myMap = function(cb) {
    let newArr = [];
    for(let i=0; i< this.length; i++) {
        newArr.push(cb(this[i], i, this))
    }
    return newArr
}

const res = array.myMap((ele) => ele*2);
console.log(res)