// ## Question One

console.log('----Q1----');

// Write a function that takes in a callback and calls the callback

function greeting() {
  return 'hello';
}

function salutation(str1) {
  return str1();
}

console.log(salutation(greeting));

// // ## Question Two

console.log('----Q2----');

// Write a function that takes in a callback and a boolean.
// If the boolean is true, call the callback, otherwise log "Ignoring the
// callback" to the console.

function callbackIgnore(boolean, callback) {
  if (boolean) {
    return callback();
  } else {
    return 'Ignoring the callback';
  }

}

console.log(callbackIgnore(true, greeting));
console.log(callbackIgnore(false, greeting));

// ## Question Three
console.log('----Q3----');

//// Write a function that take in a number and two callbacks.
//It should apply the first callback to the number, then the second callback,
//then return the result
//
function doMath(num, callback1, callback2) {
  let result = callback1(num);
  return callback2(result);
}

function add(num) {
  return num + 3;
}

function multiply(x) {
  return x * 2;
}

console.log(doMath(4, add, multiply));

// ## Question Four
console.log('----Q4----');

// Write a function `shouldIBuyThis` that takes in a balance and a callback
//(one of the below functions). The function should return either
//"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
// You are given the following functions:

function shouldIBuyThis(balance, callback) {
  if (callback(balance)) {
    console.log('Sure!, I\'ve got the money!');
  } else {
    console.log('Nope! Gotta keep my savings up!');
  }
  }

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver(balance) {
  return balance > 0;
}

shouldIBuyThis(20, liberalSpender);
shouldIBuyThis(20, horribleSaver);
shouldIBuyThis(20, conservativeSpender);
shouldIBuyThis(101, conservativeSpender);

// ## Question Five
console.log('----Q5a----');

// a. Write a function `forEachElem` that takes in an array and a callback.
// Call the callback on each element in the array.
let arr = [1, 4, 5, 6];

function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function arrValue(num) {
  console.log(num);
}

forEachElem(arr, arrValue);

console.log('----Q5b----');

// b. Create a function `logEachElem` that takes an array as an argument logs
// every element in the input array.  Use `forEachElem` inside the body of your
// function.
let array = [1, 2, 34];
function logEachElem(arr) {
  forEachElem(arr, arrValue);
}

logEachElem(array);

console.log('----Q5c----');

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log
// each array element followed by its type.
let newArray = [1, 'Hi', true, { color: 'green' }];

function logType(el) {
  console.log(el + ' is a ' + typeof el);
}

function logArrayTypes(arr) {
  forEachElem(arr, logType);
}

logArrayTypes(newArray);

// ## Question Six
console.log('----Q6a----');

/* a. Write a function called `myMap` that takes in an array and a callback
as arguments.  It should return a new array with the callback applied
to each element in the array.*/
let arr6 = [3, 5, 6];

function myMap(arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let callbackReturnVal = callback(arr[i]);
    output.push(callbackReturnVal);
  }

  return output;
}

function multiply3(num) {
  return num * 3;
}

let returnCalNum = myMap(arr6, multiply3);
console.log(returnCalNum);

console.log('----Q6b----');
/*b. Create a function `allCaps` that takes in an array as an argument,
and uses the `myMap` function to return all the elements capitalized.*/

let arr7 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];

function allCaps(arr) {
  let res = arr.toUpperCase();
  return res;
}

let returnUpperCase = myMap(arr7, allCaps);
console.log(returnUpperCase);

// ## Question Seven
console.log('----Q7a----');
/*a. Write a function called `myFilter` that takes in an array and a callback
as arguments.  The callback should take in an element and return a boolean.
`myFilter` should return a new array with only values that return true when
passed into the callback.*/
let newArray7 = [1, 4, 6, 7, -3];

function myFilter(arr, callback) {
  let output7 = [];
  for (let i = 0; i < arr.length; i++) {
    let callbackNewNum = callback(arr[i]);
    output7.push(callbackNewNum);
  }

  return output7;
}

function filterNum(num) {
  if (num < 5) {
    return num;
  }
}

let returnMyFilterRes = myFilter(newArray7, filterNum);
console.log(returnMyFilterRes);

console.log('----Q7b----');

// b. Write a function called `removeEvenNumbers` that takes in an array and
// returns an array with all the even numbers removed.

let arry7B = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeEvenNumbers(arr) {
  let oddOutput = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0)
    oddOutput.push(arr[i]);
  }

  return oddOutput;
}

console.log(removeEvenNumbers(arry7B));

console.log('----Q7c----');

/* c. Write a function called `removeShortWords` that takes in an array and
returns an array with all strings containing fewer than 4 characters removed.*/

let array7C =["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

function removeShortWords(arr) {
  let longCharOutput = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4)
    longCharOutput.push(arr[i]);
  }

  return longCharOutput;
}

console.log(removeShortWords(array7C));
