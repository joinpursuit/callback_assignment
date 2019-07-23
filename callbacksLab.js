// # Callback Exercises
//
//
// ## Question One
console.log("----------#1----------")
//
// Write a function that takes in a callback and calls the callback

const answerPhone = (callback) => {
  return callback()
}

const sayWhat = () => {
  console.log("Hello world")
}

const sayWho = () => {
  console.log("My name is, Douglas MacKrell")
}

answerPhone(sayWhat)
answerPhone(sayWho)

console.log(" ")
// ```
// Input:
// function() { console.log("Hello!") }
//
// Output:
// Logs "Hello!" to the console
// ```
//
// ## Question Two
console.log("----------#2----------")

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
const tellSecret = (secretCallback, boolean) => {
  if (boolean === false) {
    console.log("Ignoring the callback")
  } else {
    return secretCallback()
  }
}

const moonSecret = () => {
  console.log("The Moon is made of GOLD - not green cheese!")
}

const teacherSecret = () => {
  console.log("Teachers need wrong answers to teach the class. Always answer first, and you never have to be right!")
}

tellSecret(moonSecret, true)
tellSecret(teacherSecret, false)

console.log(" ")
// ```
// Input:
// () => console.log("")
//
// ```
//
// ## Question Three
console.log("----------#3----------")
//
// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result
//
// Define a function
// function should apply the first callback to the input number
// function should then apply the second callback to the adjusted number
// function should return the final adjusted number
// callback 1 should be defined
// callback 1 should add something
// callback 2 should be defined
// callback 2 should subtract something


let var1 = 0
let var2 = 0
function doubleCallback(num, callback1, callback2) {
  let var1 = 0
  var1 += callback1(num)
  return callback2(var1)

}

function plusFive(num) {
  return num + 5
}

function minusTwo(num) {
  return num - 2
}

console.log(doubleCallback(5, plusFive, minusTwo))

// console.log(var1)
// console.log(var2)

console.log(" ")




// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```
//
//
// ## Question Four
console.log("----------#4----------")
//
// You are given the following functions:
// ```js
//
function conservativeSpender(balance)  {
  return balance > 100
}
//
function liberalSpender(balance) {
  return balance > 10
}
//
function horribleSaver(balance) {
  return balance > 0
}
//

function shouldIBuyThis(balance, callback) {
  if (callback(balance) === true) {
  console.log("Sure! I've got the money!")
} else {
  console.log("Nope! Gotta keep my savings up!")
}
}

shouldIBuyThis(56, conservativeSpender)
shouldIBuyThis(173, liberalSpender)

console.log(" ")

// ```
//
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
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
//
// ```
//
// ## Question Five
console.log("----------#5----------")
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
//
// ```

let arr1 = [1, 2, 3, 4]

function forEachElem(arr, callback){
  let output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]))
  }
  return output
}

function makeItMoney(num) {
  console.log("$" + num)
}

forEachElem(arr1, makeItMoney)


// Input: [1,4,5,6], (elem) => console.log("$" + elem)
//
// Output:
// Logs the following to the console:
// $1
// $4
// $5
// $6
// ```
//
// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.
//

function logValue(num) {
  console.log(num)
}

function logEachElem(arr) {
  return forEachElem(arr, logValue)
}

logEachElem(arr1)


//
// ```
// Input: [1,2,34]
//
// Output:
// Logs the following to the console:
// 1
// 2
// 34
// ```
//
// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.
//
//
// ```
let arr2 = [1,"Hi", true, {color: "green"}]
//

function logValueType(num) {
  console.log(num + " is a " + typeof num)
}

function logArrTypes(arr) {
  return forEachElem(arr, logValueType)
}

logArrTypes(arr2)


console.log(" ")
// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object
// ```
//
// ## Question Six
console.log("----------#6----------")
//
// a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.
//

let arr3 = [3, 5, 6]

function myMap(arr, callback) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]))
  }
  console.log(output)
}

function star(num) {
  return "*" + num
}

myMap(arr3, star)


// ```
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]
// ```
//
//
// b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.
//

// ```
let arr4 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
//

function allCaps(arr) {
  return myMap(arr, cap)
}

function cap(num) {
  return num.toUpperCase()
}

allCaps(arr4)

console.log(" ")

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
// ```
//
// ## Question Seven
console.log("----------#7----------")
//
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.
//
let arr5 = [1, 4, 6, 7, -3]

function myFilter(arr, callback) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    //console.log(i);
    if (callback(arr[i])) {
      //console.log(callback);
      output.push(arr[i])
    }
  }
  return output
}

function overFiveCheck(num){
  if (num < 5) {
    return true
  }
}

console.log(myFilter(arr5, overFiveCheck))

// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]
// ```
//
// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
//

let arr6 = [1,2,3,4,5,6,7,8,9]

function removeEvenNumbers(i) {
    if (i % 2 === 1) {
  return true
} else {
  return false
}
}

let erase1 = myFilter(arr6, removeEvenNumbers)
console.log(erase1)

// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
//
// c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.
//
// define removeShortWords function (arr) as argument
//
//
let arr7 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

function removeShortWords(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 4) {
      arr.pop(i)
    }
  }
  return arr
}

console.log(removeShortWords(arr7))

// ```
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
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
// ```
