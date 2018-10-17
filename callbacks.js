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
  return arrEl;
}
console.log(logEachElem([1, 2, 3, 4], theEl))

// Question 3:

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

// const allCaps = (arr) => {
//   const myMap = (toCaps) => {
//     toCaps = [];
//     for (let i = 0; i < arr.length; i++) {
//       toCaps.push(arr[i]);
//     }
//     return cappedOutput = toCaps;
//   }
//   return cappedOutput;
// }
//
// console.log(allCaps(myMap(['Hi', 'Bye', 'Jello'])))

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
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

function shouldIBuyThis (balance, callback) {
  if (callback === conservativeSpender) {
    return conservativeSpender(balance);
  } else if (callback === liberalSpender) {
    return liberalSpender();
  } else {
    return horribleSaver();
  }
}

// console.log(shouldIBuyThis(20, conservativeSpender))
