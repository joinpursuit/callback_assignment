// # Callback Exercises


// ## Question One

// Write a function that takes in a callback and calls the callback

// ```
// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console
// ```

function callBackOne(callback) {
  callback(); 
}

function callMe() {
  console.log("1) Hello!!!");
}

callBackOne(callMe);

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Two

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

// ```
// Input:
// () => console.log("")

// ```

function callBackTwo(callback, boolean) {
  if (boolean) {
    callback();
  } else {
    console.log("2) Ignoring the callback");
  }
}

function works() {
  console.log("2) Callback working");
}

callBackTwo(works, true)
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Three

// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

// ```

function callBackThree(num, callback1, callback2) {
  return callback2(callback1(num));
}

function addOne(num1){
  return num1 + 1;
}

function multiplyThree(num2) {
  return num2 * 3;
}

console.log("3) " + callBackThree(5, addOne, multiplyThree));

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Four

// You are given the following functions:
// ```js

function conservativeSpender(balance)  {
  return balance > 100;
}
function liberalSpender(balance) {
  return balance > 10;
}
function horribleSaver (balance) {
  return balance > 0;
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

function shouldIBuyThis(num, check) {
  if (check(num)) {
    console.log("4) Sure! I've got the money");
  } else {
    console.log("4) Nope! Gotta keep my savings up!");
  }
}


shouldIBuyThis(101, conservativeSpender);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Five

// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6
// ```

function forEachElem(arr, callback) {
  console.log("5a) ")
  callback(arr);
}

function logEach(arr) {
  arr.forEach( num => console.log(num));
}

forEachElem([1,2,3,4,5], logEach);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");

// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.


// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// Output:
// Logs the following to the console:
// $1
// $4
// $5
// $6
// ```
function logEachElem(arr) {
  arr.forEach(num => console.log("5b) " + num));
}

logEachElem([5,4,3,2,1]);

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.


// ```
// Input: [1,"Hi", true, {color: "green"}]

// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object
// ```

function logArrTypes(arr, callback) {
  arr.forEach(num => callback(num));
}

function log(num) {
  console.log(`"5c) ${num} is a ${typeof num}`)
}

logArrTypes([1,"Hi", true, {color: "green"}], log);

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Six

// a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.

// ```
// Input: [3,5,6], function(num) { return num * 3 }

// Output: [9, 15, 18]
// ```


// b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

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

function myMap(arr, callback) {
  arr.forEach(num => console.log(callback(num)));
}

function timesthree(num) {
  return num * 3;
}

myMap([3,5,6], timesthree)
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");

function allCaps(arr, call) {
  arr.forEach(ltr => console.log(call(ltr)));
}
function map(ltr) {
  return ltr.toUpperCase();
}

allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"], map)

console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
// ## Question Seven

// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.

// ```
// Input: [1,4,6,7, -3], num => num < 5

// Output:  [1, 4, -3]
// ```
console.log("7a) ")
function myFilter(arr, cb) {
  arr.forEach(num => cb(num));
}
function boo(num) {
  if (num < 5) {
    console.log(num);
  }
}

myFilter([1,4,6,7,-3], boo)
console.log(" - -- - - - -- - -- - - -- ")
// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.

// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
console.log("7b) ")
function removeEvenNumbers(arr, cb){
  console.log(cb(arr));
}

function removeMe(arr) {
  let newA= [];
  arr.forEach(num => {
    if(num % 2 === 1) {
      newA.push(num);
    }
  })
  return newA;
}
removeEvenNumbers([1,2,3,4,5,6,7,8,9], removeMe)
console.log(" - -- - - - -- - -- - - -- ")
// c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

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
// ```
console.log("7c) ")
function removeShortWords(arr, cb) {
  console.log(cb(arr));
}

function rmMe(arr) {
  let newA = []
  arr.forEach(ltr => {
    if (ltr.length > 4) {
      newA.push(ltr);
    }
  })
  return newA;
}
removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"], rmMe)
