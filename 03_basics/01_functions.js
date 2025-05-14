// console.log("Z");
// console.log("E");
// console.log("E");

function sayMyName(){
    console.log("Z");
    console.log("E");
    console.log("E");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4)
// console.log("result:", result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} jsut logged in`
}

// console.log(loginUserMessage("zeeshan"));

// console.log(loginUserMessage());

// function calculateCartPrice(...num1){   // (...) is called a rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "zeeshan",
    price: 199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Zeesh",
    Price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));