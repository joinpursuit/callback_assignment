// // Question 1 

// const sayHello = () => {
//     return "Hello"
// } 
// const greeting = (fn) => {
//     return fn ()
// }
// console.log(greeting(sayHello))

// // Question 2 

// const input = (bool, callBack) => {
//     if(bool === true) {
//         return callBack()
//     } else {
//         return "ignoring the callback"
//     }
    
// }

// console.log
    
//     input(true, ( () => console.log(" ") )))

// Question 3

const callNum = (num, cb) => {
    
const repeat = (num,fn) =>{
    let counter = 1
    while(counter <= num ){
        fn()
        counter += 1
// const repeat = (num,fn) =>{
//     let counter = 1
//     while(counter <= num ){
//         fn()
//         counter += 1
//     }
// }

// repeat(4,() => console.log(`I'm being called`))

// // question 4

// const doubleCall = (num, funOne, funTwo) =>{
//     return  funTwo(funOne(num))
// }

// console.log(doubleCall(4, (num) => num + 3, (num) => num * 2))


// question 5

// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
  

// const shouldIBuythis = (num,fun) =>{
//     if( 20 > 0 ){
//         return "Sure! I've got the money!"
//     } else {
//         return "Nope! Gotta keep my savings up!"
    
// }
// }

// console.log(shouldIBuyThis(20,horribleSaver))

// question six

const forEachElem = (arr,callBack) => {
    for (let i = 0; i < arr.length; i += 1) {
        callBack(arr[i])
    }
}

forEachElem([1,4,5,6], (elem) => console.log("$"+ elem))