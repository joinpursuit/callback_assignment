// ## Question One

// Write a function that takes in a callback and calls the callback

// ```
// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console


const callback = (fn) => {
    return (fn)
}
const takeCallback = (cb) => {
    return ('Hello!')
} 
console.log(takeCallback(callback))