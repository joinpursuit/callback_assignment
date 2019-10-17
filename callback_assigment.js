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

const isItTrue = () => {
    return true;
}

const booleanCb = (cb,num ) => {//help
    if(num % 2 === 1) {
    } else {
        return "Ignoring the callback"
    }
}

console.log(booleanCb(isItTrue,5))

// ## Question Three

// Write a function that takes in a callback and a number.  It should call the callback that many times.
// ```
// Input: () => console.log("I am being called"), 4

// Output:
// Logs:
// "I am being called"
// "I am being called"
// "I am being called"
// "I am being called"
// ```

