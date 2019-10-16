// ## Question One

// Write a function that takes in a callback and calls the callback

// ```
// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console
// ```
const sayHello = () => "Hello!"

// const caller = (func) => {
//   return func()
// }
// caller(sayHello)

// ## Question Two

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

// ```
// Input: () => console.log(""), true

// Output:
// Logs "" to the console

// Input: () => console.log("Testing"), false
// Output:
// Logs "Ignoring the callback" to the console.
// ```

// const isTrue = (callback,boolean) => {
//   if (boolean === true){
//     return callback()
//   }else{
//     return "Ignoring the callback"
//   }
// }
// console.log(isTrue(sayHello,0))

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

// const repeat = (cb,num) => {
//   for (let i = 1; i <= num; i++){
//     console.log (cb())
//   }
// }
// repeat(sayHello,4)

// ## Question Four

// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

// ```
// const square = (num) => num * num
// const plusOne = (num) => num + 1

// const doBoth = (num, callback1, callback2) => {
//   num = callback1(num)
//   num = callback2(num)
//   return num
// }
// console.log(doBoth(4,square,plusOne))

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

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
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
// const shouldIBuyThis = (balance,callback) =>{
//   if (callback(balance) === true){
//     return "Sure! I've got the money!"
//   }else{
//     return "Nope! Gotta keep my savings up!"
//   }
// }
// console.log(shouldIBuyThis(101,conservativeSpender))