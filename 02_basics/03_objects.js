// singleton: when objest is made with constructor (Object.create)

// object literals

const MySym = Symbol("Key1")

const JsUser = {
    name:"Zeeshan",
    "full name": "Mohammad Zeeshan",
    [MySym]: "MyKey1",
    age: 20,
    locatio: "Lucknow",
    email: "Zeeshan@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[MySym]);

JsUser.email = "zeeshan@fish.com"
//Object.freeze(JsUser)
JsUser.email = "zeeshan@boba.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//Conclusion: always use dot notation to call any object
