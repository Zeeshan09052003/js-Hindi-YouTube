const user = {
    username: "zeeshan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
              
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Zee"
//     console.log(this.username);
    
// }

// chai()


// const chai = function (){
//     let username = "Zee"
//     console.log(this.username);
// }
// chai()

// +++++++++++++ Arrow function ++++++++++++

const chai = () => {
    let username = "Zee"
    console.log(this.username);
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

//Implecit return arrow function

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "zeeesh"}) //Object return

console.log(addTwo(3, 4));


