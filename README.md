# Callback Exercises

1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

const forEachElem = (arr,call) => {
arr.forEach((el) => {
    call(el);
    })

}

<!-- forEachElem(arr,(el) => {
  console.log(el*3)
}) -->


2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

NO goodkept to see what i did wrong

<!-- const logEachElem = (array)=>{
  array.forEachElem(arr,(el) => {
    console.log(el)
  } -->
// GOoooood finally got it :D

const logEachElem = (arr) => {
  forEachElem(arr, (el)=>{
  	console.log(el);
  });
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

const logArrTypes = (arr) => {
  forEachElem(arr,(el) =>{
    console.log(`${el} is a ${typeof el}`)
    })

}



4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
to an output array. Return the output array.

const myMap = (arr,call) => {
  let maparr =[];
  arr.forEach((el) => {
    maparr.push(call(el))
    })
    return maparr;
}

5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

const allCaps = (arr) => {
  let capM = [];
  arr.map((el) => {
    capM.push(el.toUpperCase())
    })
    return capM
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

function shouldIBuyThis(balance, call) {

    if(call(balance)){
      console.log("You rolling in cash, fam. Treat yo self")

    }else{
      console.log("You don't have any money. Put it down and run....... \n in that order.")
    }

}
shouldIBuyThis(1,horribleSaver)

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
