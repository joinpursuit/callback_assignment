// # Sihame Bazi Callback Exercises
//
//============================================================================
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
// function caller (callback){
//   callback()
// }
// function sayHello(){
//   console.log("Hello!")
// }
// caller(sayHello)
//============================================================================
// ## Question Two
//
// Write a function that takes in a callback and a boolean.
//If the boolean is true, call the callback,
//otherwise log "Ignoring the callback" to the console.

//====================================================
// ## Question Three
//
// Write a function that take in a number and two callbacks.
// It should apply the first callback to the number,
// then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```

// const twoFunction = (num1, callback1, callback2) => {
// let number1 = 0;
// let number2 = 0;
// number1 = callback1(num1);
// number2 = callback2(number1);
// console.log(number2)
// }
// const addBy3 = (num1) => {
//     let sum = num1 + 3;
//    return sum;
// }
// const double = (num1) => {
//   return num1 * 2;
// }
//  twoFunction(22, addBy3, double);
//=========================================================
// ## Question Four
//
// You are given the following functions:
// function conservativeSpender(balance)  {
//   return balance > 100
// }
// function liberalSpender(balance) {
//   return balance > 10
// }
// function horribleSaver (balance) {
//   return balance > 0
// }
// const shouldIBuyThis = (balance, callback) => {
// if (callback(balance)) {
//  console.log("Sure! I've got the money!")
// } else {
//   console.log("Nope! Gotta keep my savings up!")
// }
// }
//
// function conservativeSpender(balance) {
//   return balance > 100
// }
// function liberalSpender(balance) {
//   return balance > 10
// }
//
// function horribleSaver (balance) {
//   return balance > 0
// }
//
// shouldIBuyThis(200, conservativeSpender);
// shouldIBuyThis(-10,horribleSaver)

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
//========================================================
// ## Question Five
//
// a. Write a function `forEachElem` that takes in
//an array and a callback. Call the callback on each
//element in the array.
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
// arr = [1,4,5,6];
// function forEachElem (arr, callback){
//  for (let i = 0; i < arr.length; i++){
//  callback (arr[i]);
// }
//  }
// function logDollarFormattedNum(num){
//   console.log("$"+ num)
// }
// forEachElem(arr, logDollarFormattedNum)
//=====================================
// b. Create a function `logEachElem` that takes
//an array as an argument logs every
//element in the input array.
//Use `forEachElem` inside the body of your function.
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
// function forEachElem2(num) {
// console.log(num)
// };
// forEachElem(arr,forEachElem2);
//=================================
// c. Create a function `logArrTypes` that
//uses the `forEachElem` method to log each
//array element followed by its type.
//Input: [1,"Hi", true, {color: "green"}]
//
// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object
// ```
// Input: [1,"Hi", true, {color: "green"}]
// function logArrTypes(num) {
//  console.log(num +' ' + typeof(num))
//  }
// let array5 = [1,"Hi", true, {color: "green"}]
// forEachElem(array5,logArrTypes)
//==================================================
// ## Question Six
//
// a. Write a function called `myMap` that takes in an array
// and a callback as arguments.
//It should return a new array with the callback
//applied to each element in the array.
//
// ```
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]
// let arr =[3,5,6];
// function myMap( arr, callback) {
// let mapedArr = [];
// for (let i = 0; i < arr.length; i++){
//   callback(arr[i]);
// }
//  }
// const logTriple = function (arr) {
//   console.log(arr * 3);
// }
// myMap(arr,logTriple)
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

// let words = ['The', 'internet', 'is', 'not', 'a', 'big', 'truck.', 'It\'s', 'a', 'series', 'of', 'tubes'];
// const myMap = (array, callback) => {
//   let arr = [];
//
//   for (let element of array) {
//    arr.push(callback(element));
//   }
//   return arr;
// };
//
// const allCaps = (array) => {
//   return myMap(array, capitalized);
// };
//
// const capitalized = (array) => {
//   return array.toUpperCase();
// }
//
// console.log(allCaps(words));
// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.
//
// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]
// ```
// let array7 = [1, 4, 6, 7, -3];
//
// const myFilter = (array, callback) => {
//   let arr = [];
//
//   for (let element of array) {
//     if (callback(element)) {
//       arr.push(element);
//     }
//   }
//
//   return arr;
// };
//
// const element2 = (num) => {
//   if (num < 5) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// console.log(myFilter(array7, element2));

// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
let arr7b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myFilter = (array, callback) => {
  let arr = [];

  for (let element of array) {
    if (callback(element)) {
      arr.push(element);
    }
  }
  return arr;
};
const removeEvenNumbers = (num) => {
  if (num % 2 !== 0) {
    return num;
  }
};
console.log(myFilter(arr7b, removeEvenNumbers));

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
let arr7c = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

const removeShortWords = (word) => {
    if (word.length < 4) {
      return false;
    } else {
      return true;
    }
  };

console.log(myFilter(arr7c, removeShortWords));
