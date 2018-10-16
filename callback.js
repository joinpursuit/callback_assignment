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




// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.

// // works, but also returns "undefined"
// Array.prototype.forEachElem = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };
//
// const logEachElem = (arr) => {
//   return [0,2,0,3,0,4].forEachElem(el => {
//     console.log(el);
//   })
// }
//
// console.log(logEachElem());




// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

// //line 50: Cannot read property 'forEachElem' of undefined : mixedArr.forEachElem((el) =>{
// Array.prototype.forEachElem = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };
//
// // test:
// let mixedArr = [1, "cat", true]
//
// const logArrTypes = (mixedArr) => {
//   mixedArr.forEachElem((el) =>{
//     if (el % 1 ===0){
//       console.log(el, "is a number")
//     } else if (el = true || false){
//       console.log(el, "is a boolean");
//     } else {
//       console.log(el, "is a string");
//     }
//   })
// }
//
// console.log(logArrTypes());




// help, please
// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

// const myMap = (array, callback) => {
//   let arr = [2,3,4,5,]
//   let output = []
//   arr.forEach (el => {
//     output.concat(arr)
//   })
// }


// Array.prototype.myBigMap = function (callback){
//   let outputArray = [];
//   for(let i = 0; i< this.length; i++) {
//     outputArray.push(callback(this[i]));
//   }
// return outputArray;
// }
//
// // test:
//
// Array.prototype.myReduce = function (){
//   let total = 0
//   this.forEach((elem) => {
//     total += elem
//   })
//   return total
// }
//
// //
// (
//
// )
//
//
// // let mapper = [1,2,3].myBigMap((el) => {
// //   return el * 2
// // })
// // console.log(mapper);
//
// let arr = [2,3,4,5]
// const myMap = (arr, callback) => {
//   arr.forEach((el) =>{
//     outputArray[i] += el
//
//   })
// }
//
// console.log(myMap());





    //error: line 132: TypeError: Cannot read property 'myMap' of undefined
// 5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// const allCaps = (arr) => {
//   // let output = []
//   arr.myMap (el => {
//     return el.toUpperCase()
//   })
// }
// console.log(allCaps());


// 6. You are given the following functions:
// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

const shouldIBuyThis = (balance, callback) => {
  if (balance > 100){
    conservativeSpender()
    return
  }else if(balance > 10){

  }else{

  }
}


console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"
