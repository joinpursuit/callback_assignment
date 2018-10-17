// # Callback Exercises
//
// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

let arr = [1, 2, 3, 4, 5]
function forEachElem(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function doubler(arr) {
  console.log(arr * 2)
}

forEachElem(arr, doubler)
////////////////////////////////////////////////////////////////////////
2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

function forEachElem(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    return callback(arr[i])
  }
}

function logEachElem(arr) {
  let logResult = [];
  forEachElem(arr, (el) => {
    return logResult = arr
  })
  return logResult
}

console.log(logEachElem([1, 9, 3, 4, 5, 6]))

3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

function forEachElem(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function logArrTypes(arr) {
  let result = [];
  forEachElem(arr, (el) => {
    console.log(el)
    result.push(typeof(el))
  })
  return result
}
logArrTypes([1, 'cat', true])


```js
let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)
// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean

```
4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
to an output array. Return the output array.
function forEachElem(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function myMap(arr, callback) {
  let result = [];
  forEachElem(arr, (el) => {
    result.push(el)
  })
  return result
}

myMap([1, 2, 3, 4, 5])

5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

function forEachElem(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function myMap(arr, callback) {
  let result = [];
  forEachElem(arr, (el) => {
    result.push(el.toUpperCase())
  })
  return result
}

function allCaps(arr) {
  let answer = [];
  return myMap(arr, (el) => {
   answer.push(el)
  })
  return answer
}
allCaps(['my', 'name', 'witness', 'me'])

6. You are given the following functions:
Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

function shouldIBuyThis(balance, callback) {
  if(callback(balance) === true) {
    console.log('I got enough mulah')
  } else {
    console.log('I gotta save up more')
  }
}

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver(balance) {
  return balance > 0
}


shouldIBuyThis(130, conservativeSpender)
