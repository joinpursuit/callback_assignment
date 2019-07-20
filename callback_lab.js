// # Callback Exercises
//

console.log(`\n question 1`);
// Write a function that takes in a callback and calls the callback
//
// ```
// Input:
// function() { console.log("Hello!") }
//
// Output:
// Logs "Hello!" to the console
// ```
function callStrBack() {
  console.log("Does this work");
}
function num1Fun(num1Callback) {
  num1Callback();
}
num1Fun(callStrBack);

console.log(`\n Question 2`);
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
function logSum() {
  console.log("This boolean value is true");
}

function boolBack( boolValue, callback) {
  if (boolValue){
    return callback();
  } else {
    console.log("Ignoring the callback");
  }

}
boolBack(true,logSum);

console.log(`\n Question #3`);
//
// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```
function firstCallback(num) {
  return num * 12;
}
function secondCallback(num) {
  return num + 5;
}

function higherFunction(num, call1Back, call2Back) {
  return call2Back(call1Back(num));
}
console.log(higherFunction(4,firstCallback,secondCallback));

//4. You are given the following functions:
console.log('\nQuestion #4');

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver (balance) {
  return balance > 0;
}
// Write a function 'shouldIBuyThis' that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
const shouldIBuyThis = (balance,callback) => {
  if (callback(balance)){
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
};
console.log(shouldIBuyThis(99, conservativeSpender));




console.log(`\nQuestion #5 part a`);
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
//
// ```
 let arrin = [1,4,5,6]//, (elem) => console.log("$" + elem)
//
// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6
function dollarBack(num) {
  console.log("$"+num);
}

function forEachElem (eachArray, arrayCall){
  for (let i of eachArray){
    arrayCall(i);
  }
}

forEachElem(arrin,dollarBack);
// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.
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
console.log("question 5 part b");
let num2Array =[3,6,9,12,34]

const logEachElem =(logArr) => {
  return forEachElem(logArr,console.log);
}
// using the forEachElem fucntion to call the logEachElem function to log the array elements
logEachElem(num2Array);

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
console.log('Question 5 part c');
let mixedArr = [1, 'cat', true, null, 'str', 30];
// the function that will be called by the forEachElem fucntion, that loops into the array

/* Es5 verison of thefunction
function type(typeofArr) {
  console.log(`${typeofArr} is a ${typeof(typeofArr)}`);
}

function logArrTypes(arrType) {
  forEachElem(arrType,type);
}
*/
//Es6 veriosn of the function
const logArrTypes = (arrType) => forEachElem(arrType, (typeofArr) => console.log(`${typeofArr} is a ${typeof(typeofArr)}`));
logArrTypes(mixedArr);


// 6 a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.
const myMap =(mapArr,mapCallback) => {
  //console.log(mapArr);
  let arrMap =[];
  for (let i =0; i<mapArr.length;i++){
    arrMap.push(mapCallback(mapArr[i]));
  }
  return arrMap;
};
console.log(`\nProblem 6. Create a function 'allCaps' that takes in an array as an argument, and uses the 'myMap' function to return all the elements capitalized.\n`);
let lowCase = ['this ','is ','my ','array ', 'for ', 'question ', 'six'];
const allCaps = (capsArray) => {
  let upCase ='';
  for (let i =0; i < capsArray.length; i++){
   upCase += capsArray[i].toUpperCase();
  }
  //console.log(upCase);
  return upCase;
};
console.log(myMap(lowCase,allCaps));


console.log(`\n#Question 7a. Write a function called 'myFilter' that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  'myFilter' should return a new array with only values that return true when passed into the callback.
`);

let input= [1,4,6,7, -3]//, num => num < 5
//
// Output:  [1, 4, -3]
// ```
function myFilter(filArr,callback) {
  let arrResult =[];
  for (let i = 0; i <filArr.length; i++){
    if (callback(filArr[i])){
      arrResult.push(filArr[i])
    }
  }
  return arrResult;
}
console.log(myFilter(input,num => num < 5));

console.log('\n7b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.');
//
// ```
let arrInput2 = [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// ```
console.log(myFilter(arrInput2,num => num % 2 !== 0));

console.log(`\n7c. Write a function called 'removeShortWords' that takes in an array and returns an array with all strings containing fewer than 4 characters removed.`);
let strInput = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
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
console.log(myFilter(strInput,num => num.length > 4));
