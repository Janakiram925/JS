for(let i=0; i<10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000)
};
for(var i=0; i<=5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

function x() {
    for (var i = 0; i < 5; i++) {
        function print(value) {
            console.log(`print called with value ${value}`)
            setTimeout(() => {
                console.log(value);
            }, i*1000)
        }
        print(i);
        console.log(`outside i ${i}`)
    }
}
x();

// let j;
// for(j =0; j<2; j++) {
//     setTimeout(() => {
//         console.log(j)
//     }, 6000)
// };

// var myFunction = function (){
//     console.log(this);
//     this.name = 'Janakiram';
//     this.age = 30;
//     const printName = function (){
//     console.log(this.name);
//     }
//     const printAge = ()=>{
//     console.log(this.age);
//     }
//     printAge();
//     printName(); // Janakiram
//   }
//   myFunction();