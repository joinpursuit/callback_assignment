// Question 1:
const forEachElem = (arr, callback) => {
  // arr = [1, 2, 3, 4]
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }

}
function hello(el) {
  console.log('Hi');
}
// forEachElem([1, 2, 3, 4], hello);


// Question 2:

const logEachElem = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
const theEl = (arrEl) => {
  console.log(arrEl);
}

// logEachElem([1, 2, 3, 4], theEl);

// Question 3:

let mixedArr = [1, 'cat', true];

const logArrTypes = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const elAndType = (arrEl, arrType) => {
  arrType = typeof arrEl;
  console.log(`${arrEl} is a ${arrType}.`);
}

// logArrTypes([1, "cat", true], elAndType);

// Question 4:

const myMap = (arr, callback) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback + arr[i];
    output.push(arr[i]);
  }
  return output;
}

// console.log(myMap([1, 2, 3], 5));


// Question 5:

const allCaps = (arr) => {
  let cappedEl = arr.map(el => {
    return el.toUpperCase();
  })
  return cappedEl;
}
// console.log(allCaps(['Hello', 'Goodbye', 'Jello']))

// Question 6:
// ** I Feel Attacked ** //

function conservativeSpender(balance)  {
  if (balance > 100) {
    return `Sure! I've got the money!`;
  } else {
    return `Nope! Gotta keep my savings up!`;
  }
  // return balance > 100
}

function liberalSpender(balance) {
  if (balance > 10) {
    return `Sure! I've got the money!`;
  } else {
    return `Nope! Gotta keep my savings up!`;
  }
  // return balance > 10
}

function horribleSaver (balance) {
  if (balance > 0) {
    return `Sure! I've got the money!`;
  } else {
    return `Nope! Gotta keep my savings up!`;
  }
  // return balance > 0
}

// console.log(liberalSpender(20))

function shouldIBuyThis (balance, callback) {
 return callback(balance, this);
}

// console.log(shouldIBuyThis(2, liberalSpender))
