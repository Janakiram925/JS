const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first promise');

    }, 1000)
    
});

const prom2 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second promise');
    }, 0)
})

const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('third promise')
    }, 100)
})

const prom = [prom1, prom2, prom3];

//promise.all -- if any of the promises got rejected entire promise.all gets rejected;
Promise.all(prom).then((res) => {
    console.log(res)
}).catch(err => console.log(err));


// promise.allsettled -- it will give an array with Objects with status and value inside.
Promise.allSettled(prom).then((res) => {
    console.log(res);
})

// allSettled O/P

// [
//     {
//         "status": "fulfilled",
//         "value": "first promise"
//     },
//     {
//         "status": "fulfilled",
//         "value": "second promise"
//     },
//     {
//         "status": "rejected",
//         "reason": "third promise"
//     }
// ]

// ------------------------------------->>>>>>>> -------------------------------
// ------------------------------------->>>>>>>> -------------------------------
// async await in promises

let apiRes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`api response success`);        
    }, 3000)
});

function getRes() {
    apiRes.then((res) => {
        console.log(res)
    })
}

async function getRes1() {
    let res = await apiRes;
    console.log(res);
}
getRes();
getRes1();

//----------------------Promise prototype finally----------------------------
//----------------------Promise prototype finally----------------------------

//Promise API is extended by an optional finally block which is called in any case 
//(after the Promise is resolved or is rejected).

let promFinally = new Promise((resolve, reject) => {
    reject(`demo for promise finally`)
})
promFinally.then((res) => {
    console.log(res);
}).
catch(err => console.error(err)).
finally(() => console.log(`finally`));