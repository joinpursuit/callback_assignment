// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

// Array.prototype.forEachElem = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };
//
// // test:
// [0,1,0,1,0].forEachElem((el) =>{
//   console.log(el)
// })

// All-In-One:

// const forEachElem = (arr, callback) => {
//   arr.forEach (el => {
//     callback(el)
//   })
// }
//
// forEachElem([1,2,3], el => console.log(el))

//--------------------------------------





// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

// // // works, but also returns "undefined"
// Array.prototype.forEachElem = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };
//
// let arrB = [0,2,0,3,0,4]
//
// const logEachElem = (arr) => {
//   return arr.forEachElem(el => {
//     console.log(el);
//   })
// }
//
// logEachElem(arrB);

// // all in one:--------

// let arrB = [1,2,3]
//
// const logEachElem = (arr) => {
//   arr.forEach ( el => {
//     console.log(el);
//   })
// }
//
// logEachElem(arrB)

//------------------------------------





// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

// // forEachElem 1:
// Array.prototype.forEachElem = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };

// //OR forEachElem 2:
// const forEachElem = (arr, callback) => {
//   arr.forEach (el => {
//     callback(el)
//   })
// }

//the function:

// let arrC = [2,3,4, "fish", true]
//
// const logArrTypes = (arr, type) => {
//   arr.forEachElem ( el => {
//     console.log(el, typeof el);
//   })
// }
//
// logArrTypes(arrC)

//---------------------------------





// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

// // ----------- all-in-one:---------

// let arrD = [1,2,3,4]
// const callback = el => el * 3;
//
// const myMap = (array, callback) => {
//   let output = []
//   array.forEach(el => {
//     // console.log(el)
//     output.push(callback(el))
//   })
//   return output
// }
//
// let mapArr =
//   myMap(arrD, callback)
//
// console.log(mapArr)


// //-------OR separate prototype: --------

// make prototype:

Array.prototype.myBigMap = function (callback){
  let outputArray = [];
  for(let i = 0; i< this.length; i++) {
    // outputArray.push(callback(this[i]));
    outputArray.push(callback(this[i]))
  }
return outputArray;
}


// // OR : make prototype by:

// const myBigMap = (arr, callback) => {
//   let outputArray = [];
//   arr.forEach((el) => {
//     callback(outputArray.push(el))
//   })
//   return outputArray
// }


// // the test:
let arr = [2,3,4,5]

const myMap = (array, callback) => {
  array.myBigMap((el) => callback(el * 2))
}

console.log(myMap(arr, (el) => {console.log(el)}));

//------------------------------------




// 5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

let arrE = ["hello", "datatypes!!"];

const allCaps = arr => {
  return arr.myMap(
    el => {
      return el.toUpperCase();
    }
  );
};

console.log(allCaps(arrE));

//-------------------------------------




// 6. You are given the following functions:
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

// function conservativeSpender(balance)  {
//   return balance > 100
// }
//
// function liberalSpender(balance) {
//   return balance > 10
// }
//
// function horribleSaver (balance) {
//   return balance > 0
// }
//
// const shouldIBuyThis = (balance, callback) => {
//   if (callback(balance)) {
//     return "Sure! I've got the money!"
//   }else{
//     return "Nope! Gotta keep my savings up!"
//   }
//
// }
//
//
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
