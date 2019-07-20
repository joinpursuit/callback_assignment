// ## Question One
// Write a function that takes in a callback and calls the callback

function callback(callback){
  callback()
}
function sayHello(){
  console.log("Hello");
}

callback(sayHello);

// ## Question Two
// Write a function that takes in a callback and a boolean.
// If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

function callback2(callback, boolean){
  if (boolean === true) {
    return callback
  } else {
    console.log("Ignoring the callback.")
  }
}


callback2(sayHello(), true);

// ## Question Three
// Write a function that take in a number and two callbacks.
// It should apply the first callback to the number, then the second callback, then return the result.

function addOne(num1){
  return num1 + 1
}

function addTwo(num2){
  return num2 + 2
}

function callback3(num, callback1, callback2){
  let firstResult = callback1(num)
  let secondResult = callback2(firstResult)
  return secondResult
}

let result = callback3(3, addOne, addTwo);
console.log(result);


// ## Question Four
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions).
// The function should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!".

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

function shouldIBuyThis(balance, callback){
if (callback(balance) === true) {
  return "Sure! I've got the money!"
} else {
  return "Nope! Gotta keep my savings up!"
}
}

console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

// let shouldIBuyThis2 = shouldIBuyThis(5, liberalSpender);
// console.log(shouldIBuyThis2);


// ## Question Five
// a. Write a function `forEachElem` that takes in an array and a callback.
// Call the callback on each element in the array.

let arr = [1, 4, 5, 6]

function dollarSign(elem){
  console.log("$" + elem)
}

function forEachElem(arr, callback){
  for (let i = 0; i < arr.length; i++)
   callback(arr[i])
}

forEachElem(arr, dollarSign);


// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.
// Use `forEachElem` inside the body of your function.

function logEachElem(num){
  console.log(num)
}

forEachElem(arr, logEachElem);

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.

function logArrTypes(num){
  console.log(typeof(num) + " " + num)
}

forEachElem(arr, logArrTypes);


// ## Question Six
// a. Write a function called `myMap` that takes in an array and a callback as arguments.
// It should return a new array with the callback applied to each element in the array.

let arr2 = [2, 4, 6, 8]

function myMap(arr, callback){
  let newArr = [];
 for (let i = 0; i < arr.length; i++){
   newArr.push(callback(arr[i]));
 }
 return newArr;
}

function timesTwo(arr){
  return arr * 2
}

console.log(myMap(arr2, timesTwo));


// b. Create a function `allCaps` that takes in an array as an argument,
// and uses the `myMap` function to return all the elements capitalized.

let arr3 = ["hi", "bye", "maybe", "yes", "no"]

function allCaps(arr){
  return arr.toUpperCase()
}

console.log(myMap(arr3, allCaps));


// ## Question Seven
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.
// The callback should take in an element and return a boolean.
//  `myFilter` should return a new array with only values that return true when passed into the callback.

let arr4 = [5, 3, 8, 2, 9]

function returnBoolean(arr){
  return arr > 4
}

function myFilter(arr, callback){
  let newArr2 = [];
for (i = 0; i < arr.length; i++){
if (callback(arr[i]) === true){
  newArr2.push(arr[i])
}
} return newArr2
}

console.log(myFilter(arr4, returnBoolean));


// b. Write a function called `removeEvenNumbers` that takes in an array
// and returns an array with all the even numbers removed.

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8,]

function removeEvenNumbers(arr){
   return arr % 2 !== 0
}

console.log(myFilter(arr5, removeEvenNumbers));


// c. Write a function called `removeShortWords` that takes in an array
// and returns an array with all strings containing fewer than 4 characters removed.

let arr6 = ["hello", "yes", "four", "two", "hi"]

function removeShortWords(arr){
  return arr.length >= 4
}

console.log(myFilter(arr6, removeShortWords));
