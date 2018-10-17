// # Callback Exercises
//
// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.


const forEachElem = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
//console.log (forEachElem(arr))


// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

const logEachElem = (array) => {
  forEachElem(array, el => {
    console.log(el);
  })
}

//console.log(logEachElem(array));


// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:
//
// ```js
// let mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr)
// // will log:
// // 1 is a number
// // 'cat' is a string
// // true is a boolean
//
// ```

let mixedArr= [1, "cat", true];

function logArrTypes (arr) {
  forEachElem(arr, el => {
    //console.log(`${el} is: ${typeof el} `)
  })
}

logArrTypes(mixedArr)


// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
// to an output array. Return the output array.

function myMap (mapArray, callback) {
  let result = [];
  forEachElem(mapArray, el => {
    result.push(callback(el))
  })
  return result;
}

console.log(myMap([1,2,3], (el) => {
  return el * 3
}));




// 5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

function allCaps (array) {
  myMap(array, el => {
    return el.toUpperCase()
  });
}

//




// 6. You are given the following functions:
// ```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

// ```
//
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
//
// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
//
// ```

function shouldIBuyThis (balance, callback) {
  if (callback(balance)) {
    return "sure, you are good"
  }
  return "nope, save your money"
}

//console.log(shouldIBuyThis(101, liberalSpender))
