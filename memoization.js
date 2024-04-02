function add(...args) {
    console.log(JSON.stringify(args))
    return args.reduce((acc, cur) => acc+cur)
}

function memo(func) {
    let cache = {};
    return function(...args) {
        const keys = JSON.stringify(args)
        if(cache[keys]) {
            console.log(`returning cache value`, cache);
            return cache[keys]
        } else {
            console.log(`calculating first time`)
            let result = func(...args);
            cache[keys] = result;
            return result
        }
    }
}

const response = memo(add)
console.log(response(2,3,4,5,6,7));
console.log(response(2,3,4,5,6,7))