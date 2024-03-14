function abc() {
    var x = 10;
    function xyz() {
        var y = 20;
        // console.log(x+y);
        return x+y
    }
    return xyz();
}

var res = abc();
console.log(res);


var obj = {
    name: 'Ram',
    getName: function() {
        console.log('normal', this.name)
    },
    getArrName: () => {
        console.log('arr function', this.name);
    }
}

obj.getArrName();
obj.getName()



  