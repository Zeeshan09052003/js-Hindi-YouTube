const myObj = {
    js: 'javascript',
    cpp:'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {
    //console.log(myObj[key]);
    console.log(`${key} hsortcut is for ${myObj[key]}`);
    
}

const programming = ["js", "rb", "python", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);   
}

// const map = new Map()
// map.set('IN', "India")
// map.set('UAE', "Dubai")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(map[key]);
   
// } //map cannot oe appliad in forin loop as Map is not itterative


