const normal = function() {
    console.log(arguments)
}
normal('ram', 28, 'hyderabad'); // ['ram', 28, 'hyderabad']

const arrFunc = () => {
    console.log(arguments)
}
arrFunc('ram', 28, 'hyderabad'); // ref error: arguments is not defined