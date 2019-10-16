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
// ```

function caller (callback) {
  callback()
}

function tellMeWhy () {
  console.log("Ain't nothing but a heartbreak");
}

function blueShade () {
  console.log("My tears dry on their own")
}

caller(tellMeWhy);
caller(blueShade)

// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```

function caller2 (callback, param) {
  if (param === true) {
    callback();
  } else if (param === false) {
    console.log("Ignoring the callback")
  }
}

function message () {
  console.log("Yo, how is it going");
}

caller2(message, 4 === 4)

// ## Question Three
//
// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```

function caller3(num, callback, callback2) {
  let result = callback(num)
  result = callback2(result)
  return result
}

function add(num) {
  let result = num + 3;
  return result;
}

function multiply(num) {
  let result = num * 2
  return result;
}

console.log(caller3(4, add, multiply));

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
//
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

function shouldIBuyThis (balance, callback) {
  if (callback(balance) === true) {
    console.log("Sure! I've got the money!");
  } else if (callback(balance) === false) {
    console.log("Nope! Gotta keep my savings up!");
  }
}

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver (balance) {
  return balance > 0;
}

shouldIBuyThis(20, horribleSaver);
shouldIBuyThis(20, liberalSpender);
shouldIBuyThis(20, conservativeSpender);


// ## Question Five
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
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
// ```
let arr = [2, 3, 1, 14, 9, 5]
function forEachElem (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function logDollar (num) {
  console.log("$" + num)
}

forEachElem(arr, logDollar)

// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.
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
// ```
function logNum (num) {
  console.log(num);
}
function logEachElem (arr) {
  let result = forEachElem(arr, logNum);
  return result;
}

logEachElem(arr);

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.
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
// ```
let arr2 = [true, 4, "hi", false, 5];

function type (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], typeof arr[i])
  }
}
function logArrTypes (arr) {
  let result = forEachElem2(arr, type)
  return result
}

type(arr2)


// ## Question Six
//
// a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.
//
// ```
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]
// ```
let arrA = [1, 2, 3, 4, 5];
let arrB = [];

function addA (num) {
  let res = num + 2
  return res
}
function myMap (arr, arr2, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr2.push(callback(arr[i]))
  } return arr2
}

console.log(myMap(arrA, arrB, addA));

//
// b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.
//
// ```
// Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
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
// ```

let spiderMan = ["With", "great", "power", "comes", "great", "responsibility"];
let upperSpider = [];

function allCaps (arr) {
  let result = arr.toUpperCase();
  return result
}

console.log(myMap(spiderMan, upperSpider, allCaps));


// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.
//
// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]
// ```

let arrayA = [1, 11, 3, 5, 14, 25, 9];
let arrayB = [];

function myFilter (arr, arr2, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      arr2.push(arr[i])
    }
  } return arr2
}
function trueFalse (num) {
  if (num > 10) {
    return true
  } else if (num < 10) {
    return false
  }
}

console.log(myFilter(arrayA, arrayB, trueFalse));

// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let noEvens = []
function removeEvenNumbers (num) {
  if (num % 2 === 1) {
    return true
  }
}

console.log(myFilter(numArr, noEvens, removeEvenNumbers));


// c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.
//
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
