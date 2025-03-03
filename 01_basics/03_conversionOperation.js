let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// 33 => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Zeeshan" => true

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

// ************************************Operation********************************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Zeeshan"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // Not recommended
console.log(+""); // Not recommended

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // not recommended

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
