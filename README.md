# Callback Exercises

1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

```js
const forEachElem = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
```

2. Create a function `logEachElem` that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

```js
function logEachElem (array) {
  forEachElem(array, (el) => {
    console.log(el);
  });
};
```

3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

```js
let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)
// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean

const logArrTypes = (array) => {
  forEachElem(array, (el) => {
    console.log(`${el} is a ${typeof el}`);
  });
};
```
4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

```js
function myMap (array, callback) {
  let outputArr = [];
  for (let i = 0; i < array.length; i++) {
    outputArr.push(callback(array[i]));
  }
  return outputArr;
};
```

5. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

```js
const allCaps = (array) => {
 return myMap(array, (el) => {
        return el.toUpperCase();
        });
};
```

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

Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
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

function shouldIBuyThis (balance, callback) {
  if (callback(balance)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up";
  }
};


```
