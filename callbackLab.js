// Write a function that takes in a callback and calls the callback

const callBack = (fn) => {
    return fn
}


const greet = () => {
    return "Hello!"
}


console.log(greet(callBack))

// Write a function that takes in a callback and a boolean. 
// If the boolean is true, call the callback, otherwise log 
// "Ignoring the callback" to the console.


