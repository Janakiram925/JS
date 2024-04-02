function* generator(i) {
    console.log('generator');
    yield i;
    yield i*2
};
/// generator function returns the object

var obj = generator(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());