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
// Output:
// Logs "Hello!" to the console
function hello(callback) {
  console.log(callback());
};

function sayHello() {
  return 'hello';
};

hello(sayHello);

// ## Question Two
//
// Write a function that takes in a callback and a boolean.
//If the boolean is true, call the callback, otherwise
//log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```
function ignoreCallback(ignore, callback) {
  if (ignore) {
    console.log('ignoring callback');
  } else {
    console.log(callback());
  }
};

ignoreCallback(false, sayHello);

// ## Question Three
//
// Write a function that take in a number and two callbacks.
//It should apply the first callback to the number,
//then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```

function addMultiply(num, callBack1, callBack2) {
  let num1 = 0;
  let num2 = 0;

  num1 = callBack1(num);
  num2 = callBack2(num1);
  return num2;
};

function add(num) {
  return num + 3;
}

function multiply(num) {
  return num * 2;
}

console.log(addMultiply(4, add, multiply));

// ## Question Four
//
// You are given the following functions:
// ```js
//
function conservativeSpender(balance)  {
  return balance > 100;
};

function liberalSpender(balance) {
  return balance > 10;
};

function horribleSaver(balance) {
  return balance > 0;
};

// ```
//
// Write a function `shouldIBuyThis` that takes in a balance and a
//callback (one of the above functions). The function should return either
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
function shouldIBuyThis(balance, callBack) {
  let cani = callBack(balance);

  if (cani) {
    return "Sure! I've got money";
  } else {
    return 'Nope! I gotta keep my savings up!';
  }
};

console.log(shouldIBuyThis(10, horribleSaver));

// ## Question Five
//
// a. Write a function `forEachElem` that takes in an array and a callback.
//Call the callback on each element in the array.
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
array5a = [1, 2, 3, 4];
function dollarFormat(num) {
  return '$ ' + num;
};

function forEachElem(array, callBack) {
  for (i = 0; i < array.length; i++) {
    console.log(callBack(array[i]));
  };
};

forEachElem(array5a, dollarFormat);

// b. Create a function `logEachElem` that takes an array as an
//argument logs every element in the input array. Use `forEachElem` inside the
//body of your function.
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
//
let array5b = [1, 2, 34];

function logEachElem(num) {
  return num;
};

forEachElem(array5b, logEachElem);

// c. Create a function `logArrTypes` that uses the `forEachElem` method to
//log each array element followed by its type.
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

let array5c = [1, 'Hi', true, { color: 'green' }];

function logArrTypes(array) {
  return `${array} is a ${typeof (array)}`;
};

forEachElem(array5c, logArrTypes);

// ## Question Six
//
// a. Write a function called `myMap` that takes in an array and a callback as arguments.
//It should return a new array with the callback applied to each element in the array.
//
// ```
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]
// ```
let array6a = [3, 5, 6];
function timesThree(num) {
  return num * 3;
}

function myMap(array, callBack) {
  let output = [];
  for (i = 0; i < array.length; i++) {
    output.push(callBack(array[i]));
  };

  return output;
}

console.log(myMap(array6a, timesThree));

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
let array6b = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];

function allCaps(array) {
  return array.toUpperCase();
};

console.log(myMap(array6b, allCaps));

// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a
//callback as arguments.  The callback should take in an element and return a
//boolean.  `myFilter` should return a new array with only values that return
//true when passed into the callback.
//
// ```
// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]
// ```
//
let array7a = [1, 4, 6, 7, -3];

function myFilter(array, callBack) {

  return array.filter(callBack);
};

function arrFilter(num) {
  return num < 5;
}

console.log(myFilter(array7a, arrFilter));

// const result7a = array7a.filter(num => num < 5);
// console.log(result7a);

// b. Write a function called `removeEvenNumbers` that takes in an
// array and returns an array with all the even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
//

let array7b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result7b = array7b.filter(num => num % 2 !== 0);
// console.log(result7b);

function removeEvenNumbers(num) {
  if (num % 2 !== 0) {
    return num;
  }
};

console.log(myFilter(array7b, removeEvenNumbers));

// c. Write a function called `removeShortWords` that takes in an array and
//returns an array with all strings containing fewer than 4 characters removed.
//
// ```
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted",
//"programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
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
let array7c = ["JavaScript", "is", "a", "high-level,", "interpreted",
"programming", "language", "that", "conforms", "to", "the", "ECMAScript",
"specification"]

// const removeShortWords = array7c.filter(word => word.length > 4);
// console.log(removeShortWords);

function removeShortWords(arr) {
  if (arr.length > 4) {
    return arr;
  }
}

//
console.log(myFilter(array7c, removeShortWords));
