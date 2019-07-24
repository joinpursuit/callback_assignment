// JOSEPH P. PASAOA
//



// non-question-specific function declarations
const spacer = () => console.log('');
const sayYes = () => console.log('YES');
const sayHere = () => console.log('HERE');



// 1 //
console.log("1 // Write a function that takes in a callback and calls the callback");

const higherOrder01 = (callback) => callback();
higherOrder01(sayYes);
//
spacer();


// 2 //
console.log('2 // Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.');
let input_02 = true;

const callOrDont = (callback, boolean) => {
  boolean
    ? callback()
    : console.log("Ignoring the callback");
}
callOrDont(sayHere, input_02);
//
spacer();


// 3 //
console.log('3 // Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result');
let input_03 = 11;

const firstAdd = (num) => num += 1000;
const secondNegate = (num) => -num;
const higherOrder03 = (num, callback01, callback02) => {
  return callback02(callback01(num));
}
let result3 = higherOrder03(input_03, firstAdd, secondNegate);
console.log(result3);
//
spacer();


// 4 //
console.log("4 // You are given functions. Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions) then return the result.");
let input_04 = 9; // BALANCE input_
console.log(`Input balance: ${input_04}, using`);
function conservativeSpender(balance)  {
  return balance > 100
}
function liberalSpender(balance) {
  return balance > 10
}
function horribleSaver (balance) {
  return balance > 0
}

const shouldIBuyThis = (num, callback) => {
  console.log(callback.name);
  if (callback(num)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
}
let result4 = shouldIBuyThis(input_04, liberalSpender);
console.log(result4);
//
spacer();


// 5 //
// a
console.log("5[a] // Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.");
let input_05a = [1,4,5,6];
console.log(`Input array: ${input_05a}`);

const moneyMaker = (num) => console.log(`$${num}`);
const forEachElem = (arr, callback) => {
  for (let i of arr) {
    callback(i);
  }
}
forEachElem(input_05a, moneyMaker);

// b
console.log("5[b] // Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.");
console.log(`Input array: ${input_05a}`);

const logEachElem = (arr) => forEachElem(arr, console.log);
logEachElem(input_05a);

// c
console.log("5[c] // Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.");
let input_5c = ["Uno", 2, [3], false, {fiveKey: 'fiveValue'}, undefined, 7, "Ocho"]; //, moneyMaker()];
console.log(`Input array: ["Uno", 2, [3], false, {fiveKey: 'fiveValue'}, undefined, 7, "Ocho"]`);

const logArrTypes = (element) => console.log(`${element} is a ${typeof element}`);
forEachElem(input_5c, logArrTypes);
//
spacer();


// 6 //
// a
console.log("6[a] // Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.");
let input_6a = [-6, -3, 0, 3, 6, 9, 12];
console.log(`Input array: ${input_6a}`);

const multBy7 = (num) => num * 7;
const myMap = (arr, callback) => {
  let newArray = [];
  for (let i of arr) {
    newArray.push(callback(i));
  }
  return newArray;
}
let result6a = myMap(input_6a, multBy7);
console.log(result6a);

// b
console.log("6[b] // Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.");
let input_6b = ['do', 're', 'mi', 'fa', 'so'];
console.log(`Input array: ${input_6b}`);

const capitalizer = (str) => str.toUpperCase();
const allCaps = (arr) => myMap(arr, capitalizer);
let result6b = allCaps(input_6b);
console.log(result6b);
//
spacer();


// 7 //
// a
console.log("7[a] // Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean. `myFilter` should \nreturn a new array with only values that return true when passed into the callback.");
let input_7a = [1,4,6,7,-3];
console.log(`Input array: ${input_7a}`);

const under5 = (num) => num < 5;
const myFilter = (arr, callback) => {
  let newArray = [];
  for (let i of arr) {
    callback(i)
      ? newArray.push(i)
      : false;
  }
  return newArray;
}
let result7a = myFilter(input_7a, under5);
console.log(result7a);

// b
console.log("7[b] // Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.");
let input_7b = [1,2,3,4,5,6,7,8,9];
console.log(`Input array: ${input_7b}`);

const evensToFalse = (num) => Math.abs(num % 2);
const removeEvenNumbers = (arr) => {
  return myFilter(arr, evensToFalse);
 }
let result7b = removeEvenNumbers(input_7b);
console.log(result7b);

// c
console.log("7[c] // Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.");
let input_7c = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];
console.log(`Input array: ${input_7c}`);

const underFourToFalse = (str) => (str[3]);
const removeShortWords = (arr) => {
  return myFilter(arr, underFourToFalse);
}
let result7c = removeShortWords(input_7c);
console.log(result7c);
//
