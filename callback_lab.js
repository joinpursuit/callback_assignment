// # Callback Exercises
//
//
// ## Question One
//
// Write a function that takes in a callback and calls the callback
//
// ```
// Input:
// function() { console.log("Hello!") }
//
// Output:
// Logs "Hello!" to the console

console.log('=======ANswer#1========')

function sayHello () {
   console.log("Hello!")
 }

function caller(callback) {
 callback()
}
// console.log(sayHello) //gives me function sayHello
 caller(sayHello)

// ```
//
// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true,
// call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")

console.log("=======answer#2")

function sayHello () {
    console.log("Hello!")
  }

const caller = (callback, boolean) => {
  callback()
}

let boolean = 5 < 2
caller(sayHello, boolean)

//
// ```
//
// ## Question Three
//
// Write a function that take in a number and two callbacks.  It should apply the
// first callback to the number, then the second callback, then return the result

//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14

console.log("=======answer#3=======")

let num = 10
const higherFunct = (num, callback1, callback2) => {
let figure1 = 0
let figure2 = 0
   console.log(cb2(cb1(num)))
let figure1 = callback1(num)
let figure2 = callback2(figure1)

     console.log(figure2)
}
function add (num) {
let sum = num + 3
return sum
}
function multiply (num) {
  return num * 2
}
higherFunct(10, add, multiply)


// ```
//
//
// ## Question Four
//
// You are given the following functions:
// ```js
//
// function conservativeSpender(balance)  {
//   return balance > 100
// }
//
// function liberalSpender(balance) {
//   return balance > 10
// }
//
// function horribleSaver (balance) {
//   return balance > 0
// }

// ```
//
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one
// of the above functions). The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
//
// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"

console.log("=======answer#4========")
//
function shouldIBuyThis (balance, callback) {
  // console.log(shouldIBuyThis(101, conservativeSpender))

  if (callback(balance)) {
  console.log("Sure! I've got the money!")
} else {
  console.log("Nope! Gotta keep my savings up!")
}
}
function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

 shouldIBuyThis(-100, liberalSpender)
 shouldIBuyThis(500, conservativeSpender)


//
// ```
//
// ## Question Five
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call
  // the callback on each element in the array.
//
// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)
//
// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6

console.log("=====answer#5a=======")
//
const forEachElem = (arr, callback) => {
for (let i = 0; i < arr.length; i++) {
  callback(arr[i])
  }
}



let arr = [1,4,5,6]
forEachElem (arr, (elem) => {console.log("$ " + elem)})


// ```
//
// b. Create a function `logEachElem` that takes an array as an argument logs
//every element in the input array.  Use `forEachElem` inside the body of your
//function.
//
//
// ```
// Input: [1,2,34]
//
// Output:
// Logs the following to the console:
// 1
// 2
// 34

console.log("=====answer#5b========")

function logEachElem (arr) {

forEachElem(arr, (elem) => {console.log(elem)})
}


logEachElem([1, 2, 34])

// ```
//
// c. Create a function `logArrTypes` that uses the `forEachElem` method to log
//each array element followed by its type.
//
//
// ```
// Input: [1,"Hi", true, {color: "green"}]
//
// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object

console.log("======answer#5c========")

// const logArrTypes = (arr) => {
// forEachElem(arr, (elem) => {console.log(elem + ' is a ' + typeof elem)})
// }
// logArrTypes([1,"Hi", true, {color: "green"}])
// ```
//
// ## Question Six
//
// a. Write a function called `myMap` that takes in an array and a callback as
//   arguments.  It should return a new array with the callback applied to each
//   element in the array.
//
// ```
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]

console.log("======answer#6a=======")
const myMap = (arr, callback ) => {

  let mapArr = []
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(callback(arr[i]))
  }
  return mapArr;


}

console.log(myMap([3, 5, 6], function (num) {return num * 3}))



// ```
//
//
// b. Create a function `allCaps` that takes in an array as an argument, and uses
//the `myMap` function to return all the elements capitalized.
//
// ```
// Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series",
//"of", "tubes"]
//
// Output:
//
// [
//     'THE', 'INTERNET',
//      'IS',      'NOT',
//       'A',      'BIG',
//  'TRUCK.',     "IT'S",
//       'A',   'SERIES',
//      'OF',    'TUBES'
// ]

console.log("=======answer#6b=======")
let i = 0
function allCaps (arr) {

  for (let i = 0; i < arr.length; i++) {
  return arr.toUpperCase()
}
}
  //return arr.toUpperCase()
let str = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series",
"of", "tubes"]
 let strArr = myMap(str, allCaps)
 console.log(strArr)

// ```
//
// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a callback
// as arguments.  The callback should take in an element and return a boolean.
// `myFilter` should return a new array with only values that return true when
//passed into the callback.
//
// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]

console.log('==========answer#7a===========')


const myFilter = (arrNum, callback) => {
  let myArr = []
for (let i = 0; i < arrNum.length; i++) {
  if (callback(arrNum[i])) {
        myArr.push(arrNum[i])
    }
    //return myArr
  }
  return myArr
}
let setOfNum = [1,4,6,7, -3]
console.log(myFilter(setOfNum, num => num < 5))
// ```
//
// b. Write a function called `removeEvenNumbers` that takes in an array and returns
// an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]

console.log("======answer#7b=======")
let arr = [1,2,3,4,5,6,7,8,9]
const removeEvenNumbers = (num) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (num % 2 !== 0) {

      return newArr
    }
  }
}
console.log(myFilter(arr, removeEvenNumbers))
// ```
//
// c. Write a function called `removeShortWords` that takes in an array and returns
//an array with all strings containing fewer than 4 characters removed.
//
// ```
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that",
//"conforms", "to", "the", "ECMAScript", "specification"]
//
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

console.log("========answer#7c=======")

 //let str = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that",
// "conforms", "to", "the", "ECMAScript", "specification"]
const removeShortWords = (word) => {
  let moreThanThree = []
  for (let i = 0; i < str.length; i++ ) {
  if (word.length <= 3) {
      return false
  } else {
    return true
  }
}
}
let str = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that",
          "conforms", "to", "the", "ECMAScript", "specification"]

let moreThanThree = myFilter(str, removeShortWords)
console.log(moreThanThree)





// ```
