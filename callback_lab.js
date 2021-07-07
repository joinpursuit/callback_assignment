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
// // ```
//
function caller(callback){
  callback()
}
function sayHello() {
  console.log("Hello!")
}
caller(sayHello)
//
//
//
// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```
//
//

function call2(boolean, callback){
  if (boolean === true){
  return callback()
}else{
  return "Ignoring the callback"
}
}
console.log(call(boolean, callback))





 //
//
//
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
//
//
//
function combine(num1,combiningCallback){
  return combiningCallback(num1)
}
function add(num1){
  return num1 + 3
}
function multiply(num1){
  return num1 * 2
}

console.log(combine(combine( 4, add), multiply))

//
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



function shouldIBuyThis(num1,combiningCallback){
  return combiningCallback(num1)
}
function horribleSaver(num1){
  if (num1 > 0){
  }
  return "Sure! I've got the money!"
}
function liberalSpender(num1){
  if (num1 > 10){
  }
  return "Sure! I've got the money!"
}
function conservativeSpender(num1){
  if (num1 > 100){
  return "Sure! I've got the money!"
}else{
  return "Nope! Gotta keep my savings up!"
}
}

console.log(shouldIBuyThis(20, horribleSaver))
console.log(shouldIBuyThis(20, liberalSpender))

console.log(shouldIBuyThis(20, conservativeSpender))
console.log(shouldIBuyThis(101, conservativeSpender))


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


function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function array2(num) {
  console.log("$" + num)
}

let arr = [1,4,5,6];
forEachElem(arr, array2)


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


function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function array2(num) {
  console.log( num)
}

let arr = [1,2,34];
forEachElem(arr, array2)


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
//

function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function logArrTypes(elem) {
  console.log(elem + " is a " +typeof(elem))
}
let arr = [1,"Hi", true, {color: "green"}];
forEachElem(arr, logArrTypes)

//
//
//
//
//
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
//
// //
function myMap(arr, callback){
  let output = [];
 for (let i = 0; i < arr.length; i++){
   output.push(callback(arr[i]));
 }
 return output;
}
function myMap2(elem){
  return elem * 3
}

console.log(myMap([2, 4, 6, 8], myMap2));

//
//
//
//
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
//


function myMap(arr, callback){
  let output = [];
 for (let i = 0; i < arr.length; i++){
   output.push(callback(arr[i]));
 }
 return output;
}
function allCaps(elem){
  return elem.toUpperCase()
}
console.log(myMap(["hi", "bye", "maybe", "yes", "no"], allCaps));


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



function returnBoolean(arr){
  return arr < 5
}
function myFilter(num,callBack){
  let outPut = [];
 for(let i = 0; i < num.length; i++){
   if (callBack(num[i]) === true){
    outPut.push(num[i]);
 }
}
 return outPut;
}
console.log(myFilter([1,4,6,7, -3], returnBoolean));

//
// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
//

function returnBoolean(num,callBack){
  let outPut = [];
 for(let i = 0; i < num.length; i++){
   if (callBack(num[i]) !== true){
    outPut.push(num[i]);
 }
}
 return outPut;
}
function removeEvenNumbers(arr){
  return arr % 2 === 0
}

console.log(returnBoolean([1,2,3,4,5,6,7,8,9], removeEvenNumbers));



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





function myFilter(arr, callback){
  let arr2 = [];
for (i = 0; i < arr.length; i++){
if (callback(arr[i]) === true){
  arr2.push(arr[i])
}
} return arr2
}
function removeShortWords(arr){
  return arr.length > 3
}
console.log(myFilter(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"], removeShortWords));
