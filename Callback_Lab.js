/* Question One
Write a function that takes in a callback and calls the callback

Input:
function() { console.log("Hello!") }
Output:
Logs "Hello!" to the console
*/
console.log('QUESTION 1:');
const simpleHigherOrder = (callback) => {
  callback();
};

const displayHello = () => {
  console.log('Hello!!');
}
simpleHigherOrder(displayHello);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question Two
Write a function that takes in a callback and a boolean. If the boolean is true,
call the callback, otherwise log "Ignoring the callback" to the console.

Input:
() => console.log("")
*/

console.log('QUESTION 2:')
const highOrder = (bool, callback) => {
  if (bool){
    callback();
  } else {
    console.log('Ignoring the callback');
  }
};

highOrder(false, displayHello);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question Three
Write a function that take in a number and two callbacks.
It should apply the first callback to the number, then the second callback,
then return the result

Input: 4, (num) => num + 3, (num) => num * 2
Output: 14
*/

console.log('QUESTION 3:');
const doubleCallBacks = (num, callback1, callback2) => {
  let result1 = callback1(num);
  let result2 = callback2(result1);

  return result2;
};

const addition = (num) => num + 3;
const multiplication = (num) => num * 2;

let addAndMult = doubleCallBacks(4, addition, multiplication);
console.log(addAndMult);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



/* Question Four
You are given the following functions:

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

Write a function shouldIBuyThis that takes in a balance and a callback
(one of the above functions). The function should return
either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"
*/

console.log('QUESTION 4:');
function conservativeSpender(balance)  {
  return balance > 100
};

function liberalSpender(balance) {
  return balance > 10
};

function horribleSaver (balance) {
  return balance > 0
};

const shouldIBuyThis = (balance, callback) => {
  let result = callback(balance);
  if (result){
    console.log("Sure! I've got the money!");
  } else {
    console.log("Nope! Gotta keep my savings up!");
  }
};

console.log(`$20 being a conservative saver`);
let conservative = shouldIBuyThis(20, conservativeSpender);

console.log(`$20 being a liberal saver`);
let liberal = shouldIBuyThis(20, liberalSpender);

console.log(`$20 being a horrible saver`);
let horrible = shouldIBuyThis(20, horribleSaver);

console.log(`$101 being a conservative saver`);
let conservative2 = shouldIBuyThis(101, conservativeSpender);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question Five
a. Write a function forEachElem that takes in an array and a callback.
Call the callback on each element in the array.

Input: [1,4,5,6], (elem) => console.log("$" + elem)
Output:
Logs the following to the console:
1
4
5
6
*/

console.log('QUESTION 5.a');

const forEachElem = (array, callback) => {
  for (let element of array){
    callback(element);
  }
};

const addingTextToNum = (element) => {
  console.log('$' + element);
};

let array = [1, 4, 5, 6];
forEachElem(array, addingTextToNum);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* b. Create a function logEachElem that takes an array as an argument
logs every element in the input array.
Use forEachElem inside the body of your function.

Input: [1,2,34]
Output:
Logs the following to the console:
1
2
34
*/

console.log('QUESTION 5.b :');
const logEachElem = (element) => {
  console.log(element);
};

let array2 = [1, 2, 34];
forEachElem(array2, logEachElem);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* c. Create a function logArrTypes that uses the
forEachElem method to log each array element followed by its type.

Input: [1,"Hi", true, {color: "green"}]
Output:
Logs the following to the console:
1 is a number
Hi is a string
true is a boolean
[object Object] is a object
*/

console.log('QUESTION 5.c :');
const logArrTypes = (element) => {
  console.log(element, ' is a ', typeof element);
};

let array8 = [1,"Hi", true, {color: "green"}];
forEachElem(array8, logArrTypes);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question Six
a. Write a function called myMap that takes in an array and a callback as arguments.
It should return a new array with the callback applied to each element in the array.

Input: [3,5,6], function(num) { return num * 3 }
Output: [9, 15, 18]
*/

console.log('QUESTION 6.a :');
const myMap = (array, callback) => {
  let newArray = [];
  for (let element of array){
    newArray.push(callback(element));
  }
  return newArray;
};

let array3 = [3, 5, 6];
let newArray = myMap(array3, multiplication);
console.log(array3);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* b. Create a function allCaps that takes in an array as an argument,
and uses the myMap function to return all the elements capitalized.

Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
Output:
[
    'THE', 'INTERNET',
     'IS',      'NOT',
      'A',      'BIG',
 'TRUCK.',     "IT'S",
      'A',   'SERIES',
     'OF',    'TUBES'
]
*/

console.log('QUESTION 6.b :');
const allCaps = (text) => {
  return text.toUpperCase();
}

let array4 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];
let capArray = myMap(array4, allCaps);
console.log(capArray);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question Seven
a. Write a function called myFilter that takes in an array and a callback as arguments.
The callback should take in an element and return a boolean.
myFilter should return a new array with only values that return true when passed into the callback.

Input: [1,4,6,7, -3], num => num < 5
Output:  [1, 4, -3]
*/

console.log('QUESTION 7.a :');
const myFilter = (array, callback) => {
  let newArray = [];
  for (let element of array){
    if (callback(element)){
      newArray.push(element);
    }
  }
  return newArray;
};

const lessThenfive = (num) => {
  if(num < 5){
    return true;
  } else {
    return false;
  }
};

let array5 = [1,4,6,7, -3];
let newArray5 = myFilter(array5, lessThenfive);
console.log(newArray5);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* b. Write a function called removeEvenNumbers that takes in an array
and returns an array with all the even numbers removed.

Input: [1,2,3,4,5,6,7,8,9]
Output: [1,3,5,7,9]
*/
console.log('QUESTION 7.b :');
const removeEvenNumbers = (num) => {
  if (num % 2 === 1){
    return true;
  } else {
    return false;
  }
};

let array6 = [1,2,3,4,5,6,7,8,9]
let newArray6 = myFilter(array6, removeEvenNumbers);
console.log(newArray6);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* c. Write a function called removeShortWords that takes in an array
and returns an array with all strings containing fewer than 4 characters removed.

Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming",
"language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

Output:
[ 'JavaScript',
  'high-level,',
  'interpreted',
  'programming',
  'language',
  'that',
  'conforms',
  'ECMAScript',
  'specification' ]
*/

console.log('QUESTION 7.c :');
const removeShortWords = (str) => {
  if (str.length < 4){
    return false;
  } else {
    return true;
  }
};

let array7 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming",
            "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];
let newArray7 = myFilter(array7, removeShortWords);
console.log(newArray7);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);
