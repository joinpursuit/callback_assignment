// ## Question One

// Write a function that takes in a callback and calls the callback


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


// Input: () => console.log(""), true

// Output:
// Logs "" to the console

// Input: () => console.log("Testing"), false
// Output:
// Logs "Ignoring the callback" to the console.


// const isItTrue = () => {
//     return true;
// }

// const booleanCb = (cb,num ) => {//help
//     if(num % 2 === 1) {
//     } else {
//         return "Ignoring the callback"
//     }
// }

// console.log(booleanCb(isItTrue,5))

// ## Question Three

// Write a function that takes in a callback and a number.  
// It should call the callback that many times.
// Input: () => console.log("I am being called"), 4

// Output:
// Logs:
// "I am being called"
// "I am being called"
// "I am being called"
// "I am being called"

const callMe = () => console.log("I am being called")

const callTimes = (num, callback) => {
    for(let i = 0; i < num; i++) {
        callback()
    }
}

console.log(callTimes(5, callMe))

// ## Question Four

// Write a function that take in a number and two callbacks.  It should apply 
// the first callback to the number, then the second callback, then return the result

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

// ```

// const iAmCallBack1 = () => {
//     return +1
// }

// const iAmCallBack2 = (cb, num) => {
//     return num * 2
// }

const twoCallBacks = (num, cb1, cb2) => {
   return cb2(cb1(num)) // explicit return 
}

console.log(twoCallBacks(4, num =>  num + 3, num => num * 2 // implicit return 
))