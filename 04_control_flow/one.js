// if

// if (condition){

// }

// if (true){
//     // code will execute when condition is true
// }

// if (false){
//     // code will not execute when condition is false
// }

// const isUerLoggedIn = true

// if (isUerLoggedIn){

// }

// <, >, <=, >=, ==, !=, ===, !==

if (2 == "2"){
    console.log("executed");
}

if (2 === "2"){
    console.log("executed");
}

const temperature = 41

if (temperature < 50){
    console.log("less than 50");
}
console.log("temperature is greater than 50");

if (temperature < 50){
    console.log("less than 50");
} else {
console.log("temperature is greater than 50");
}

const score = 200
if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2"); //Not a good practice

// if (balance > 500){
//     console.log("less than 500");
// }else if (balance > 750){
//     console.log("less than 750");
// }else if (balance > 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}