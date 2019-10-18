// const fun1 = (callback1) =>{
//     return callback1()
// }
// const fun2 = () => {
//     return "hello"
// }
// console.log(fun1(fun2))

// const boo1 = (boolean, callback) => {
//     if (boolean === true){
//         return callback()
//     } else{
//         return "ignoring the callback"
//     }
// } 
// const callback = () =>{
//     return "true"
// }
// console.log(boo1(true, callback))

//Question 3
// const called = (callback, num) => {
//        let str = callback
//        for(let i =0; i < num; i++ ){
//         console.log(str)
//        } 
//        return str
//     }
//     console.log(called("Im being called", 4))


// console.log(called())

// Question 4
// const result = (callback1, callback2, num) => {
        
//         num = callback1(num)
//        let  multi = callback2(num)
//         return multi
// }
// const completeCallBack = (num) => {
//     return num + 3
// }
// const finalCallBack = (num) => {
//     return num * 2
// }
// console.log(result(completeCallBack, finalCallBack, 9))


// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
  
//   const shouldIBuyThis = (num, callback) => {
//     if (callback(num)){
//         return "Sure! Ive got the money!"
//     } else {
//         return "Nope! Gotta keep my savings"
//     }
//   }
//   console.log(shouldIBuyThis(103, conservativeSpender))

//Question 6

const forEachElem = (arr, callback) => {
    let num = 0
    for (i = 0; i < arr.length; i++){
        num = callback(arr[i]) //Set the value of num to what ever is returned in the callback(which could be any of the below functions)
    }
}
// const realElem = (num) => {   //Takes in the arr value from the for each array(arr) on line 76
//       return console.log(num)   // returns the arr value from the for each array(arr) on line 76
// }
// console.log(forEachElem([1,5, 6, 7], realElem)) // runs the forEach function with an array and the callback function realElem

//6B
// const logEachElem = (arr) => {
//       forEachElem(arr, (elem) =>  console.log(elem) ) //// runs the forEach function with an array and the callback function that is created called elem
//       return ""
// }
// console.log(logEachElem([1,2,34]))

//6C
// const logArrTypes = (arr) => {
//     forEachElem(arr, (elem) =>  console.log(elem + " is a "+typeof(elem)) )
//     return ""
// }
// console.log(logArrTypes([1,"Hi", true, {color: "green"}]))

//Question 7
// const myMap = (arr, cb) => {
//     let newArr = []    //Create blank new array
//     for(let i=0; i < arr.length; i++){
//        newArr.push(cb(arr[i]))   // push arry values to the new array. and sents that value to the new function(nFunc)
//     }
//      return newArr
// }

// const nFunc = (num) => {
//         return num * 3;   //Takes value from index from myMapps and the mutiply it by 3
// }
// console.log(myMap([3,5,6],nFunc))

// //Question 7 b

// const allCaps = (arr) => {

//     return myMap(arr, (nel) => {   //This runs the myMapp function and creates a new function that returns the uppercase of the values
//         return nel.toUpperCase()  
//     })
// }
// console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]))

//Question 8A

// const myFilter = (arr,nFunc) => {
//     let newArr = []
//     for(let i =0; i < arr.length; i ++){
//         newArr.push(nFunc(arr[i]))
//     }
//     return newArr
// }

// const tOnly = (num) =>{
//    if(num < 5){
//        return num
//    }else return ""

// }

// console.log(myFilter([1,4,6,7, -3],tOnly))

//Question 8B

const removeEvenNumbers = (arr) => {
    let newArr = []
    for(let i = 0; i <arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]))

