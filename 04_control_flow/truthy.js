// const userEmail = "z@zeeshan.ai"

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// const userEmail2 = ""

// if(userEmail2){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

const userEmail3 = []

// if(userEmail3){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}, 

// if (userEmail3.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("objecti s empty");
}

// Nullish coalescing operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator - condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


