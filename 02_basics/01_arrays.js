//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Flash", "superman", "wonderwoman"]

console.log(myArr[0]);
console.log(myHeros[2]);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);

// Array Methods
myArr.push(5)
myArr.push(7)
myArr.pop()
//myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(myArr);

const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);

//Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // original array is being manipulated
console.log(myn2);
console.log("C", myArr);

