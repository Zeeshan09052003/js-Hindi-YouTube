// var c = 300
let a = 200 // Global Scope
if (true){
    let a = 10  // Block scope
    const b = 20
    var c = 30
    //console.log("INNER:", a);
    
}

// console.log(a);
// //console.log(b);
// console.log(c);

// **************scope with functions*************

function one(){
    const username = "zeehsan"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    //two()
    
}

//one()

if (true){
    const username = "zeeshan"
    if (username === "zeeshan"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);


// +++++++++++++ interesting ++++++++++++++



function addone(num){
    return num + 1
}

addone(5)


const addTwo = function(num){
    num + 2
}

addTwo(5)