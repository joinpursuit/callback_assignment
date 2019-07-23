// QUESTION 1
//Write a function that takes in a callback and calls the callback

// console.log('-----Question 1-----')
//
//
// const sayHello = () => {
//   console.log('Hello!');
// }
//
// sayHello();

//QUESTON 3
//Write a function that takes in a callback and a boolean.
//If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

// console.log('-----Question 2-----')

// const trueOrFalse = ( ) => {
//   if ('This Beat is Bananas' === false ) {
//     console.log('Holla Back Girl!')
//   } else {
//     console.log('Ignore Callback!')
//   }
// }
// trueOrFalse()




//QUESTION 3
/*Write a function that take in a number and two callbacks.
It should apply the first callback to the number,
then the second callback, then return the result*/

// console.log('----Question 3 -----')
//
// function combine(num1, combiningCallback) {
//   return combiningCallback(num1)
// }
//
// function add(num1) {
//   return num1 + 3
// }
//
// function multiply(num1) {
//   return num1 * 2
// }
//
// console.log(combine(combine(4, add), multiply))


//QUESTION 4
//You are given the following functions:

// console.log('----Question 4----')
//
// function shouldIBuyThis(num1, combiningCallback) {
//   return combiningCallback(num1)
// }
//
// function horribleSaver(num1) {
//   if (num1 > 0) {
//   return "Sure! I've got the money!"
// }
// }
//
// function liberalSpender(num1) {
//   if (num1 > 10) {
//   return "Sure! I've got the money!"
// }
// }
//
// function conservativeSpender(num1)  {
//   if  (num1 > 100) {
//   return "Sure! I've got the money!"
// } else {
//   return "Nope! Gotta keep my savings up!"
// }
// }
//
// console.log(shouldIBuyThis(20, horribleSaver))
//
// console.log(shouldIBuyThis(20, liberalSpender))
//
// console.log(shouldIBuyThis(20, conservativeSpender))
//
// console.log(shouldIBuyThis(101, conservativeSpender))



//QUESTION 5
/*a. Write a function `forEachElem` that takes in an array and a callback.
Call the callback on each element in the array.*/

// console.log('-----Question 5a-----')
//
// function forEachElem(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//      //invoke callback for each item in array
//     //return callback(arr[i]); does not need the return because it stops the code from running
//     callback(arr[i])
//    }
// }
//
// function logDollarFormatted(arr) {
//   console.log('$' + arr)
// }
//
// let arr = [1,4,5,6]
//
// forEachElem(arr, logDollarFormatted)


// console.log('-----Question 5b-----')
// /*b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.
// Use `forEachElem` inside the body of your function.*/
//
// function forEachElem(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i])
//   }
// }
//
// function logArr(arr) {
//   console.log(arr)
// }
//
// let arr = [1,2,34]
// forEachElem(arr, logArr)



// console.log('-----Question 5c------') CANNOT GET THE ELSE IF STATEMENT TO DETERMINE A STRING
//
// /*Create a function `logArrTypes` that uses the `forEachElem` method
// to log each array element followed by its type.*/
//
// function forEachElem(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i])
//   }
// }

// function logArrTypes(arr) {
//   if (arr <= Infinity) {
//     console.log(arr + ' is a number')
//   } else if (arr.prototype.include('')) {
//     console.log(arr + ' is a string')
//   } else if (arr === true || arr === false) {
//     console.log(arr + ' is a boolean')
//   } else {
//     console.log(arr + 'is an object')
//   }
// }
//
// function logArrTypes(arr) {
//   console.log(typeof arr)
// }
// let arr = [1,"Hi", true, {color: "green"}]
// forEachElem(arr, logArrTypes)




//Question 6//why am I getting two 9s instead of one
//  Write a function called `myMap` that takes in an array and a callback as arguments.
// It should return a new array with the callback applied to each element in the array.

// console.log('-----Question 6a-----')
// function myMap(arr, callback) {
//   let mappedArr = [];
//   // for(let i = 0; i < arr.length; i++) {
//   //   callback(arr[i]) the outer loop was returning an interated value thats why I was getting the double 9
//     for (let element of arr) {
//       mappedArr.push(callback(element))
//     }
//     return mappedArr
// }
//
//
// function multiple(arr) {
//   console.log(arr * 3)
// }
//  let arr = [3,5,6]
//  myMap(arr, multiple)


//QUESTION 6b
/*Create a function `allCaps` that takes in an array as an argument,
and uses the `myMap` function to return all the elements capitalized.*/
//I get the same result of the first element being repeated as in 6a.



// console.log('-----Question 6b-----')
//
// function allCaps(arr, callback) {
//   let mappedArr = []
//     for (let element of arr) {
//       mappedArr.push(callback(element))
//     }
//     return mappedArr
//   }
//
//
// function upperCase(arr) {
//   console.log(arr.toUpperCase())
// }
//
// let arr = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
//
// allCaps(arr, upperCase)




//QUESTION 7
/*Write a function called `myFilter` that takes in an array and a callback as arguments.
The callback should take in an element and return a boolean.  `myFilter` should
return a new array with only values that return true when passed into the callback.*/

// console.log('----Question 7a----')
//
// function myFilter(arr, callback) {
//   let trueVal = [];
//   for (let element of arr) {
//     trueVal.push(callback(element))
//   }
//   return trueVal
// }
//
// function arrTrueOrFalse(arr) {
//   if (arr < 5) {
//     console.log(arr)
//   }
// }
//
// let arr = [1,4,6,7, -3]
//
// myFilter(arr, arrTrueOrFalse)




// console.log('-----Question 7b-----')
// /*Write a function called `removeEvenNumbers`
// that takes in an array and returns an array with all the even numbers removed.*/
//
//
// function removeEvenNumbers(arr, callback) {
//   let oddArr = [];
//   for (let element of arr) {
//     oddArr.push(callback(element))
//   }
//   return oddArr
// }
//
// function onlyOddNums(arr) {
//   if (arr % 2 !== 0) {
//     console.log(arr)
//   }
// }
//
// let arr = [1,2,3,4,5,6,7,8,9]
//
// removeEvenNumbers(arr, onlyOddNums)




// console.log('-----Question 7c-----')
//
// /*Write a function called `removeShortWords` that takes in an array and
// returns an array with all strings containing fewer than 4 characters removed.*/
//
// function removeShortWords(arr, callback) {
//   let longWrds = [''];
//   for (let element of arr) {
//     longWrds.push(callback(element))
//   }
//   return longWrds
// }
//
// function byeShorty(arr) {
//   if (arr.length > 4) {
//     console.log(arr)
//   }
// }
//
// let arr = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
// removeShortWords(arr, byeShorty);
