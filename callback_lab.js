console.log(' ');
console.log('Queation 1');
console.log(' ');

//Write a function that takes in a callback and calls the callback

function sayHello() {
  console.log('Hello!');
}

function caller(callback) {
  callback();
}

caller(sayHello);

console.log(' ');
console.log('Queation 2');
console.log(' ');

//Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

function trueOrFalse(boolean) {
  if (boolean) {
    return console.log(boolean);
  } else {
    return console.log('Ignoring callback');
  }
}

function checkCaller(boolean, callback) {
  return callback(boolean);
}

checkCaller(false, trueOrFalse);

console.log(' ');
console.log('Queation 3');
console.log(' ');

//Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

function finalNumber(num, callback1, callback2) {
  return callback2(callback1(num));
}

function firstAdd(num) {
  return num + 3;
}

function secondMultiply(num) {
  return num * 2;
}

console.log(finalNumber(4, firstAdd, secondMultiply));

console.log(' ');
console.log('Queation 4');
console.log(' ');

//You are given the following functions:

//Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
//"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver(balance) {
  return balance > 0;
}

function shouldIBuyThis(num, itemPriceCheck) {
  if (itemPriceCheck(num)) {
    return 'Sure! I\'ve got the money!';
  } else {
    return 'Nope! Gotta keep my savings up!';
  }
}

console.log(shouldIBuyThis(4, horribleSaver));

console.log(' ');
console.log('Queation 5a');
console.log(' ');

let thisArray = [1, 4, 5, 6];

//a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

function forEachElem(array, callback) {
  for (let element of array) {
    console.log(callback(element));
  }
}

function addDollarSign(num) {
  return '$' + num;
}

forEachElem(thisArray, addDollarSign);

console.log(' ');
console.log('Queation 5b');
console.log(' ');

//b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.

let myArray = [1, 2, 34];

function logEachElem(array) {
  forEachElem(array, addDollarSign);
}

logEachElem(myArray);

console.log(' ');
console.log('Queation 5c');
console.log(' ');

//c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.

let typesArray = [1, 'Hi', true, { color: 'green' }];

const logArrTypes = (array, whatType) => {
  for (let value of array) {
    console.log(value + ' is a ' + whatType(value));
  }
}

function findTypes(element) {
  return typeof element;
}

logArrTypes(typesArray, findTypes);

console.log(' ');
console.log('Queation 6a');
console.log(' ');

//a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.

let someonesArray = [3, 5, 6];

const myMap = (array, callback) => {
  let superNewArray = [];

  for (let element of array) {
    superNewArray.push(callback(element));
  }
  return superNewArray;
};

const timesThree = (num) => {
  return num * 3;
};

console.log(myMap(someonesArray, timesThree));

console.log(' ');
console.log('Queation 6b');
console.log(' ');

//b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

let bunchOfWords = ['The', 'internet', 'is', 'not', 'a', 'big', 'truck.', 'It\'s', 'a', 'series', 'of', 'tubes'];

const allCaps = (array) => {
  return myMap(array, maxCaps);
};

const maxCaps = (array) => {
  return array.toUpperCase();
}

console.log(allCaps(bunchOfWords));

console.log(' ');
console.log('Queation 7a');
console.log(' ');

//a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.

let anotherArray = [1, 4, 6, 7, -3];

const myFilter = (array, callback) => {
  let outPutArray = [];

  for (let element of array) {
    if (callback(element)) {
      outPutArray.push(element);
    }
  }

  return outPutArray;
};

const checkThisElement = (num) => {
  if (num < 5) {
    return true;
  } else {
    return false;
  }
};

console.log(myFilter(anotherArray, checkThisElement));

console.log(' ');
console.log('Queation 7b');
console.log(' ');

//b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.

let evenAndOddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const removeEvenNumbers = (num) => {
  if (num % 2 !== 0) {
    return num;
  }
};

console.log(myFilter(evenAndOddArray, removeEvenNumbers));

console.log(' ');
console.log('Queation 7c');
console.log(' ');

//c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

let differentWords = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

const removeShortWords = (word) => {
    if (word.length < 4) {
      return false;
    } else {
      return true;
    }
  };

console.log(myFilter(differentWords, removeShortWords));
