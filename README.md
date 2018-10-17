# Callback Exercises

1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

function forEachElem(arr, callback){
  return callback(arr[i])
}

2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

function logEachElem(arr){
  return forEachElem(logEachElm())
}

3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

```js
let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)
// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean

```

function logArrTypes(arr){
  forEachElm(arr){
    return arr[i], typeOf(arr[i]),
  }
}
// I want to put each element/type in a new string to satisfy the example. Not sure how to achieve this.


4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

function myMap(array, callback){
  result = []
  for(i=0,i<arr.length;i++){
  return result+=callback(arr[i])
  }
}

5. Create a function 'allCaps' that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

function allCaps(arr){
  result = []
  if((arr[i]) === (arr[i].toUpperCase)){
    return result.push(arr[i])
  }
}


6. You are given the following functions:
```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

```

Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

```js
console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

```
function shouldIBuyThis(balance, callback){
  if (callback, balance){
    return "Sure! I've got the money!"
  } else {
    return "Nope! Gotta keep my savings up!"
  }
}
