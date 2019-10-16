// ## Question One

// Write a function that takes in a callback and calls the callback

// ```
// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console


// const callback = (fn) => {
//     return (fn)
// }
// const takeCallback = (cb) => {
//     return ('Hello!')
// } 
// console.log(takeCallback(callback))


// ## Question Two

// Write a function that takes in a callback and a boolean.  
// If the boolean is true, call the callback, 
// otherwise log "Ignoring the callback" to the console.

// ```
// Input: () => console.log(""), true

// Output:
// Logs "" to the console

// Input: () => console.log("Testing"), false
// Output:
// Logs "Ignoring the callback" to the console.
// ```

const callback = (fn) => {
    return (fn)
}

const booleanCb = (cb, boolean) => {
    if(boolean) {
         callback
    } else {
        console.log("Ignoring the callback")
    }
}

console.log(callback("Testing"))