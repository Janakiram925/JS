console.log(func());
console.log(funcArrow());
console.log(func1());

function func() {
    return 'hello';
}
var funcArrow = () => {
    return `returning arrow function`
}

var func1 = function() {
    return 'returning function expression'
}

