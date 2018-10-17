// # Callback Exercises
//
// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
//
function forEachElem (array, callback) {
  return array.forEach(callback);
}
//
// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.
//
function logEachElem (array) {
  forEachElem(array, (el) => {
    console.log(el)
  })
}
//
// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:
//
// ```js


// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean
//

function logArrTypes (array) {
forEachElem (array, (el) => {
  console.log(el + " is a " + typeof el);
})
}
//
logArrTypes([1, 'cat', true])
//
// // 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
// // to an output array. Return the output array.

function myMap (arr, callback) {
  let output = [];
output = arr.map(el => {
  return callback(el);
})

return output;
}
//
console.log(myMap([2, 3, 5, 9], el => el * 2));

// 5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.


let arr = ["almond","cashew","peanut","walnut"]

function allCaps (arr) {
  return myMap(arr, el => {
    return el.toUpperCase();
  });
};

console.log(allCaps(arr));

// 6. You are given the following functions:
// ```js
//
function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

//
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

function shouldIBuyThis (balance, callback) {
  let answer = "";
  if( callback(balance)) {
     answer += "Sure! I've got the money!"
  } else {
     answer += "Nope! Gotta keep my savings up!"
  }
  return answer;

}


console.log(shouldIBuyThis(20, conservativeSpender))

//
// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
//
// ```
