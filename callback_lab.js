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
console.log('----- Question 1 -----');
const sayHello = () => {
  console.log("Hello!")
}
 const greeting = (callback) => {
   return callback();
 }
  greeting(sayHello);
// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```
console.log('----- Question 2 -----');
function multiply(arg1,arg2) {
  return arg1 * arg2;

}

function trueOrFalse(callback, boolean, arg1, arg2) {
  if (true) {
    return multiply(arg1, arg2);
  } else {
    console.log('Ignoring the callback');
   }
}
console.log(trueOrFalse(multiply, true, 4, 3));
// ## Question Three
//
// Write a function that take in a number and two callbacks.  It should apply the first callback to the number,
// then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```
//
console.log('----- Question 3 -----');
const superFunction = (num1, callback1, callback2) => {
let results = callback2(callback1(num1 ));
console.log(results);
}


const addBy3 = (num1) => {
    let sum = num1 + 3;
   return sum;
}

const double = (num1) => {
  return num1 * 2;
}

 superFunction(9, addBy3, double);
// ## Question Four
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
function horribleSaver (balance) {
  return balance > 0
}
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
console.log('----- Question 4 -----');
const shouldIBuyThis = (balance, callback) => {
   if(callback(balance)) {
    console.log('Sure! I\'ve got the money!')
  } else {
    console.log('Nope! Gotta keep my savings up!')
  }
}

function conservativeSpender(balance)  {
  return balance > 100
}
//
function liberalSpender(balance) {
  return balance > 10
}
//
function horribleSaver (balance) {
  return balance > 0
}
shouldIBuyThis(-2, horribleSaver);
shouldIBuyThis(99, conservativeSpender);
shouldIBuyThis(21, liberalSpender);
// ## Question Five
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
//
// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)
//
// Output:
// Logs the following to the console:
// $1
// $4
// $5
// $6
// ```

arr1 = [1, 4, 5, 6];
console.log('----- Question 5a -----');
function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function addDollar(num) {
  console.log("$" + num)
}
forEachElem(arr1, addDollar)
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
console.log('----- Question 5b -----');
function everyValue(num) {
  console.log(num)
}
forEachElem(arr1, everyValue)
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
console.log('----- Question 5c -----');
arr2 = [3, 'bye',false, {animal: "cheetah"}]

 function typeOf(element) {
   console.log(typeof(element))
 }
 forEachElem(arr2, typeOf);
// ## Question Six
//
// a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.
//
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
console.log('----- Question 6 -----');
// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.
//
// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]
// ```
//
// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
//
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
console.log('----- Question 7 -----');
