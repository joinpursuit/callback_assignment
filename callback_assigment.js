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

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, 
// otherwise log "Ignoring the callback" to the console.

// const callback2 = (callback,Boolean) => {
//     if (Boolean === true) {
//         return callback()
//     } else if (Boolean === false){
//         return "Ignoring the callback"
//     }
// }
// console.log(callback2(() => console.log("testing"), false))

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
// const repeat = (cb, num) => {
//     let i = 1;
//     while(i <= num){
//         cb()
//         i++
//     }
//     return 
// }
// console.log(repeat(() => console.log("I am being called"), 4))


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

// const calculate =(num,cb1,cb2) => {
//     return (cb2(cb1(num)))
// }
// console.log(calculate(4, (num) => num + 3, (num) => num * 2))

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

// ```
// ## Question Five

// You are given the following functions:
// ```js

// function conservativeSpender(balance)  {
//   return balance > 100
// }

// function liberalSpender(balance) {
//   return balance > 10
// }

// function horribleSaver (balance) {
//   return balance > 0
// }

// const shouldIBuyThis = (bal,cb) => {
//     if (cb(bal)) {
//         return "Sure! I've got the money"
//     } else {
//         return "Nope! Gotta keep my savings up!"
//     }
// }
// console.log(shouldIBuyThis(20,horribleSaver))
// console.log(shouldIBuyThis(20, liberalSpender))
// console.log(shouldIBuyThis(20, conservativeSpender))
// console.log(shouldIBuyThis(101, conservativeSpender))

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

// ## Question Six

// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

// const forEachElem = (arr,cb) => {
//     for(let i = 0; i < arr.length; i++){
//         cb(arr[i])       
//     }
// }
// console.log(forEachElem([1,4,5,6], (elem) => console.log("$" + elem)))

// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6
// ```

// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array. 
//  Use `forEachElem` inside the body of your function.

// const logEachElem = (arr) => {
//     return forEachElem(arr, (el) => console.log(el))
// }
// console.log(logEachElem([1,2,34]))

// ```
// Input: [1,2,34]

// Output:
// Logs the following to the console:
// 1
// 2
// 34
// ```

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.
// const logArrTypes = (arr) => {
//     return forEachElem(arr,(el) => console.log(`${el} is a ${typeof el}`))
// }
// console.log(logArrTypes([1,"Hi", true, {color: "green"}]))

// ```
// Input: [1,"Hi", true, {color: "green"}]

// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object

// ## Question Seven

// a. Write a function called `myMap` that takes in an array and a callback as arguments.  
// It should return a new array with the callback applied to each element in the array.
const myMap = (arr,cb) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}
console.log(myMap([3,5,6], (num) => {return num *3 }))

// ```
// Input: [3,5,6], function(num) { return num * 3 }

// Output: [9, 15, 18]
// ```


// b. Create a function `allCaps` that takes in an array as an argument, 
// and uses the `myMap` function to return all the elements capitalized.

const allCaps = (arr) => {
    
    return (myMap(arr, el => el.toUpperCase()))
}
console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]))

// ```
// Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

// Output:

// [
//     'THE', 'INTERNET',
//      'IS',      'NOT',
//       'A',      'BIG',
//  'TRUCK.',     "IT'S",
//       'A',   'SERIES',
//      'OF',    'TUBES'
// ]
// ```


// ## Question Eight

// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  
// The callback should take in an element and return a boolean.  
// `myFilter` should return a new array with only values that return true when passed into the callback.

const myFilter = (arr, cb) => {
    let output = []
    for( i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output
}
console.log(myFilter([1,4,6,7, -3], num => num < 5))

// ```
// Input: [1,4,6,7, -3], num => num < 5

// Output:  [1, 4, -3]
// ```

// b. Write a function called `removeEvenNumbers` 
// that takes in an array and returns an array with all the even numbers removed.
const removeEvenNumbers = (arr, cb) => {
    let output = []
    for( i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output
}
console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9], num => num % 2 === 1 ))

// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```

// c. Write a function called `removeShortWords` that takes in an array and returns 
// an array with all strings containing fewer than 4 characters removed.

const removeShortWords = (arr, cb) => {
    let output = []
    for( i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output
}
console.log(removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"], el => el.length > 4 ))



// ```
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

// Output:
// [ 'JavaScript',
//   'high-level,',
//   'interpreted',
//   'programming',
//   'language',
//   'that',
//   'conforms',
//   'ECMAScript',
//   'specification' ]
