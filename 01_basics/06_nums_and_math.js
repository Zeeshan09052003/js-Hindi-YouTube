const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8934
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.sqrt(125));
console.log(Math.min(4, 2, 8, 9));
console.log(Math.max(5, 6, 1, 9));

console.log(Math.random()); //by default always would be between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
