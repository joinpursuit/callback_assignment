# Callback Exercises

1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

function forEachElem (array, callback){
  array.forEach((el)=>{
    callback(el)
  })
}


2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

function logEachElm (ary){
   forEachElem(ary , console.log)
};

3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

```js
let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)
// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean
```
function logArrTypes (ary){
  forEachElem(ary, (a)=>{
    console.log(a +' is a '+ typeof a)
})
};

4. Write a function `myMap` that takes in an array and a callback.
Call the callback on each element of the array and add the result to an output array.
Return the output array.

function myMap (ary, callback){
  let answer = []
  ary.forEach((ary)=>{
    let x = callback(ary)
    answer.push(x)
    })
return answer
}

5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

//I declared a new function because myMap takes in both an arr & a callback function.
// I tried to apply this.toUpperCase() as a second argument within the allCaps but i kept
// recieving toUpperCase is not a fuction

function upperCase (words){
  return words.toUpperCase()
}

function allCaps (arr){
  return myMap(arr, upperCase)
};

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

//i opted to edit the original functions to make things simpler
function conservativeSpender (balance) {
  if (balance > 100){
    return "Sure! I've got the money!"
  }else{
    return "Nope! Gotta keep my savings up!"
  }
};

function liberalSpender(balance) {
  if ( balance > 10){
    return "Sure! I've got the money!"
      }else{
    return "Nope! Gotta keep my savings up!"
      }
};

function horribleSaver (balance) {
  if (balance > 0){
    return "Sure! I've got the money!"
  }else{
    return "Nope! Gotta keep my savings up!"
  }
};

function shouldIBuyThis (balance, callback){
  return callback(balance)
}
