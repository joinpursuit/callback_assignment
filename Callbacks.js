/*1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array. */
function forEachElem(arr,callback){
    for(let i = 0; i < arr.length;i++){
  callback(arr[i])
    }
  };
function returns(arg){
console.log(arg)
}
let arr = [1,2,3,4,5]

forEachElem(arr, (el) => {
  console.log(el)
})

/*2. Create a function wlogEachElem that takes an array as an argument,and uses the `forEachElem` method to log each element of the array.*/
function logEachElem(arr,callback){
callback(arr)
};
//let arr = [2,4,6,8,10];
//console.log(logEachElem(arr,forEachElem))


/*Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:
//
//
// ```js
// let mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr)
// // will log:
// // 1 is a number
// // 'cat' is a string
// // true is a boolean
//
// ```*/
//
function logArrTypes(mixedArr){

forEachElem(mixedArr, (el) => {
  console.log(typeof el)
})

};



let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)


/*4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
to an output array. Return the output array.*/
function myMap(arr){
let newArray = [];
let results = 0;

forEachElem(arr,(el) => {

  results += el
newArray.push(results)
  //console.log(newArray)

})
return newArray
}

//let arr = [1,2,3,4,5]
//console.log(myMap(arr))

/*Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.*/

const allCaps = (arr) => {
  let newArray = [];
arr.map((el) => {
newArray.push(el.toUpperCase())
  });

return newArray
};
let arr = ["h","e","l","l","o","w","o","r","l","d"];
console.log(allCaps(arr))


//6. You are given the following functions:





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

const shouldIBuyThis = (balance,callback) => {
  if(callback(balance)){
    console.log('you are able to afford it')

  }else{
    console.log('will not work')
  }
}
//console.log(shouldIBuyThis(100,conservativeSpender()))


console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"
