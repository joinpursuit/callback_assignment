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

// ## Question Two

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, 
// otherwise log "Ignoring the callback" to the console.

const callback2 = (callback,Boolean) => {
    if (Boolean === true) {
        return callback()
    } else if (Boolean === false){
        return "Ignoring the callback"
    }
}
console.log(callback2(() => console.log("testing"), false))

// ```
// Input: () => console.log(""), true

// Output:
// Logs "" to the console

// Input: () => console.log("Testing"), false
// Output:
// Logs "Ignoring the callback" to the console.
// ```

// ## Question Three

// Write a function that takes in a callback and a number.  It should call the callback that many times.
const repeat = (cb, num) => {
    let i = 1;
    while(i <= num){
        cb()
        i++
    }
    return 
}
console.log(repeat(() => console.log("I am being called"), 4))


// ```
// Input: () => console.log("I am being called"), 4

// Output:
// Logs:
// "I am being called"
// "I am being called"
// "I am being called"
// "I am being called"
// ```

// ## Question Four

// Write a function that take in a number and two callbacks.  
// It should apply the first callback to the number, then the second callback, then return the result

const calculate =(num,cb1,cb2) => {
    return (cb2(cb1(num)))
}
console.log(calculate(4, (num) => num + 3, (num) => num * 2))

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

// ```
// ## Question Five

// You are given the following functions:
// ```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

const shouldIBuyThis = (bal,cb) => {
    if (cb(bal)) {
        return "Sure! I've got the money"
    } else {
        return "Nope! Gotta keep my savings up!"
    }
}
console.log(shouldIBuyThis(20,horribleSaver))
console.log(shouldIBuyThis(20, liberalSpender))
console.log(shouldIBuyThis(20, conservativeSpender))
console.log(shouldIBuyThis(101, conservativeSpender))

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). 
// The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"

// ```