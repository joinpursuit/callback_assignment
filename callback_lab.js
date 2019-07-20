// ## Question One
//
// Write a function that takes in a callback and calls the callback
function caller(callback) {
  callback()
}
function logHello() {
  console.log("Hello!")
}
caller(logHello)

// ## Question Two
//
// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
function callIfTrue(callback, boolean) {
  if (boolean === true) {
    callback()
  } else {
    console.log("Ignoring the callback")
  }
}
callIfTrue(logHello, false)

// ## Question Three
//
// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result
function twoCalls(num, callback, callback2) {
  return callback2(callback(num))
}
function sum3(n) {
  return n + 3
}
function times2(n) {
  return n * 2
}
console.log(twoCalls(4, sum3, times2))

// ## Question Four

// You are given the following functions:

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
function shouldIBuyThis(balance, call) {
  if (call(balance) === true) {
    return 'Sure!'
  } else {
    return 'Nope!'
  }
}
console.log(shouldIBuyThis(11, liberalSpender))

// ## Question Five
//
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
function forEachElem(array, callback) {
  for(a of array) {
  callback(a)
  }
}
forEachElem([1,4,5,6], (elem) => console.log('$' + elem))

// b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.
function logEachElem(array) {
  forEachElem(array, (elem) => console.log(elem))
}
logEachElem([1,2,34])

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.
function logArrTypes(array) {
  forEachElem(array, (elem) => console.log(`${elem} is a ${typeof(elem)}`))
}
logArrTypes([1, 'Hi', true, {color: 'green'}])

// ## Question Six
//
// a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.
function myMap(array, callback) {
  let map = []
  for (let b of array) {
  map.push(callback(b))
  }
  return map
}
console.log(myMap([3,5,6], sum3))

// b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.
function allCaps(array) {
  return myMap(array, (str) => str.toUpperCase())
}
console.log(allCaps(['this', 'is', 'china', 'town']))

// ## Question Seven
//
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.
function myFilter(array, callback) {
  let filtered = []
  for (c of array) {
    if (callback(c) === true)
    filtered.push(c)
  }
  return filtered
}
console.log(myFilter([1, 4, 6, 7, -3], num => num < 5))

// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
function removeEvenNumbers(array) {
  let notEven = []
  for (d of array) {
    if (d % 2 !== 0) {
      notEven.push(d)
    }
  }
  return notEven
}
console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]))

// c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.
function removeShortWords(array) {
  let plus3Char = []
  for (e of array) {
    if (e.length >= 4) {
      plus3Char.push(e)
    }
  }
  return plus3Char
}
console.log(removeShortWords(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']))
