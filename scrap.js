// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

let arrD = [1,2,3,4]
const callback = el => el * 3;

const myMap = (array, callback) => {
  let output = []
  array.forEach(el => {
    console.log(el)
    output.push(callback(el))
    // return output += el
  })
  return output
}

// console.log(myMap(arrD, callback));

// let test = []
//
// test.push(callback(5))
//
//
// console.log(test)

let mapArr = myMap(arrD, callback)
console.log(mapArr)

// define function
const myFunc = () => {
  return 5 * 5
}

//... method
mapArr.forEach((el) => {
  console.log(el * 2)
})


//
const anotherFunc = function(num, arr){
  return [...arr, ...num]
}

console.log(anotherFunc([3,4,5,6],[1,2,3]));

//==> flattens an array of arrays.


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




//-------------


// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

// forEachElem 1:
Array.prototype.forEachElem = function(callback){
  for(let i = 0; i< this.length; i++){
    callback(this[i]);
  }
};

//OR forEachElem 2:
const forEachElem = (arr, callback) => {
  arr.forEach (el => {
    callback(el)
  })
}

// the function:

let arrC = [2,3,4, "fish", true]

const logArrTypes = (arr, type) => {
  arr.forEachElem ( el => {
    console.log(el, typeof el);
  })
}

logArrTypes(arrC)


//-------

// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.


Array.prototype.forEachElem = function(callback){
  for(let i = 0; i< this.length; i++){
    callback(this[i]);
  }
};

// test:
[0,1,0,1,0].forEachElem((el) =>{
  console.log(el)
})



//---------

// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

let arrD = [1,2,3,4]
const callback = el => el * 3;

const myMap = (array, callback) => {
  let output = []
  array.forEach(el => {
    // console.log(el)
    output.push(callback(el))
  })
  return output
}

let mapArr =
  myMap(arrD, callback)

console.log(mapArr)




// // OR separately:---------


//
Array.prototype.myBigMap = function (callback){
  let outputArray = [];
  for(let i = 0; i< this.length; i++) {
    // outputArray.push(callback(this[i]));
    outputArray.push(callback(this[i]))
  }
return outputArray;
}
// // // console.log(outputArray);
//
// // // // OR : make prototype by:
// // const myBigMap = (arr, callback) => {
// //   let outputArray = [];
// //   arr.forEach((el) => {
// //     callback(outputArray.push(el))
// //   })
// //   return outputArray
// // }
//
//
// // //test:
let arr = [2,3,4,5]

const myMap = (array, callback) => {
  array.myBigMap((el) => callback(el * 2))
}
//
// // // Compare test to:
// // [0,1,0,1,0].forEachElem((el) =>{
// //   console.log(el)
// // })
//
console.log(myMap(arr, (el) => {console.log(el)}));









//
