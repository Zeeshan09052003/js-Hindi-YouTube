// Immediately invoked function expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

// (function chai() {                       // Named iife
//     console.log(`DB CONNECTED`);
// })()

// ( () => {                                // Simple iife
//     console.log(`DB CONNECTED TWO`);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("zeeshan")