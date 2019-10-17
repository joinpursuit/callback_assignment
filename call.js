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

// const called = (callback, number) => {
//         return callback * 
//     }
//     console.log(called("Im being called"))

// const multi = (number) => {
//     for (i = 0; i <= number; i++){
//     called(callback (string) => string * number
//     return multi
//     }
// }
// console.log(called())


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

const forEachElem = (arr, callback) => {
    let num = 0
    for (i = 0; i < arr.length; i++){
        num = callback(arr[i])
    }
    //return num
}
// const realElem = (num) => {
//       console.log(num)
// }
// console.log(forEachElem([1,5, 6, 7], realElem))

const logEachElem = (arr) => {
    let num =0;
    forEachElem(arr, (elem) => num = elem)
    console.log (num)
}
console.log(logEachElem([1, 4, 5, 6]))