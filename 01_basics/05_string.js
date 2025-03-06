const name = "Zeeshan"
const repoCount = 50

// console.log(name + repoCount + value); // not recommended for concatination

console.log(`my name is ${name} and my repo count is ${repoCount}`); // recommended (its called string interpollation)

const gameName = new String('ZeeshanMohammad'); // another way to define string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5); // cannot use negative value
console.log(newString);

const anotherString = gameName.slice(-3, 2); // can use negative value
console.log(anotherString);

const newStringOne = "    Zeeshan      "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zeeshan.com/zeeshan%20farooqui"
console.log(url.replace('%20', '-'));

console.log(url.includes('zeesh'));






