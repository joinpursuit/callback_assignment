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

console.log("1.______________________________");

function sayHi () {
  console.log("Hello!");
}

sayHi();

// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```

console.log("2.______________________________");

function trueOrFalse (bool, call) {
  if (bool === true) {
    call();
  } else {
    console.log("Ignoring the callback.");
  }
}

trueOrFalse(true, sayHi);
trueOrFalse(false, sayHi);

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

console.log("3.______________________________");

function doubleCallback(num, cb1, cb2) {
  let sum = 0;
  sum += cb1(num);
  sum = cb2(sum);
  return sum;
}

function timesThree(number) {
  return number * 3;
}

function addFive(number1) {
  return number1 + 5;
}

console.log(doubleCallback(5, timesThree, addFive));
console.log(doubleCallback(2, timesThree, addFive));

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

console.log("4.______________________________");


function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

function shouldIBuyThis(money, saver) {
  if (saver(money) === true) {
    console.log("Sure! I've got the money.");
  } else {
    console.log("Nope! Gotta keep my savings up.");
  }
}

shouldIBuyThis(20, horribleSaver);
shouldIBuyThis(20, liberalSpender);
shouldIBuyThis(20, conservativeSpender);
shouldIBuyThis(150, conservativeSpender);

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
//
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
//
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

console.log("5.a.______________________________");

let arr = [5, 10, 15, 20, 25];
let arr1 = [21, "What's up?", false, {country: "Ireland"}];

function makeItMoney(element) {
  console.log(`$${element}`);
}



function forEachElem(array, backcall) {
  for (let i of array) {
    backcall(i);
  }
}

forEachElem(arr, makeItMoney);


console.log("5.b.______________________________");


function logEachElem(array1) {
  return forEachElem(array1, console.log);
}

logEachElem(arr);

console.log("5.c.______________________________");

function whatsTheType (element1) {
  console.log(`${element1} is a ` + typeof element1);
}

function logArrTypes (array2) {
  forEachElem(array2, whatsTheType);
}

logArrTypes (arr1);

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


console.log("6.a.______________________________");

numArr = [1, 4, 7, 9];


function myMap (array3, backcall0) {
  let newArr = [];
  for (let x of array3){
  newArr.push(backcall0(x));
  }
  return newArr;
}

console.log(myMap(numArr,timesThree));

console.log("6.b.______________________________");

internetArr = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];

function allCaps (input) {
  return input.toUpperCase();
}

console.log(myMap(internetArr, allCaps))
//
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

console.log("7.a.______________________________");

let numArr1 = [1, 3, 5, 77, 54, 89];

function greaterThanFive (ele) {
  if (ele > 5) {
    return true;
  }
}

function myFilter (array4, backcall2) {
  let newArr1 = [];
  for (let y of array4) {
    if (backcall2(y) === true) {
      newArr1.push(y);
    }
  }
  return newArr1;
}

console.log(myFilter(numArr1, greaterThanFive));

console.log("7.b.______________________________");

let numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEvenNumbers (ele1) {
  if ((ele1 % 2) !== 0) {
    return true;
  }
}
 console.log(myFilter(numArr2, removeEvenNumbers));



 console.log("7.c.______________________________");

let allTheWords = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

function removeShortWords (ele2) {
  if (ele2.length >= 4) {
    return true;
  }
}

console.log(myFilter(allTheWords, removeShortWords));
