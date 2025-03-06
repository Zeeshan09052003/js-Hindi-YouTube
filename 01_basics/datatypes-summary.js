// how data is getting kept in the memory and access it is: primitive and non-primitive
// Primitive
/*
7 types:
String
Number
Boolean
Null
Undefined
Symbol : to make any value unique : Ex: const id = Symbol('123');
BigInt : too big value in numbers : const bigNumber = 45353432432643623432465325236345n
*/

// Reference (non-primitive)
/*
Arrays
Objects
Functions
*/

// Java script is dynamic typed language

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (non-primitive)

// Stack example:

let myYoutubeName = "Zeeshandotcom"

let anotherName = myYoutubeName
anotherName = "Chaiaurcode"

console.log(myYoutubeName); // would print Zeeshandotcom because original value doesn't change
console.log(anotherName); // would print Chaiaurcode as changed later on

// Heap example:

let userOne = {
        email: "user@google.com"
}

let userTwo = userOne
userTwo.email = "zeeshan@google.com"

console.log(userOne.email); // Would print zeeshan@google.com as original value would be changed
console.log(userTwo.email); // would print zeeshan@google.com as value has been changed



