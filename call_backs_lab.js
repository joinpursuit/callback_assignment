// //1
// const cbHello = (cb) => {
//     return cb
// }

// const Hello = () => {
//     return "Hello"
// }

// //2
// const ConditionalHello = (cb, boolean) => {
//     if (boolean){
//         return cb
//     }else{
//         return "Ignoring Callback"
//     }
// }

// //3
// const MultiHello = (num, cb) => {
//     for(let i = 0; i <= num; i++){
//         console.log(cb())
//     }
// }

// //4
// const AddThenMult = (num1, cb1, cb2) => {
//     return cb2(cb1(num1))
// }

// //5
// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
// function liberalSpender(balance) {
//     return balance > 10
//   }
  
// function horribleSaver (balance) {
//     return balance > 0
//   }
// const shouldIBuyThis = (bal, cb) => {
//     if(cb(bal)){
//         console.log("Sure, I've got the money")
//     }else{
//         console.log("Nope, gotta keep my savings up")
//     }
// }
// //6
// const forEachElem = (arr, cb) => {
//     for(let i = 0; i < arr.length; i++){
//        cb(arr[i])
//     }
// }

// const logEachElem = (arr) => {
//     return forEachElem(arr, (el) => console.log(el))
// }

// const logArrType = (arr) => {
//     return forEachElem(arr, (e) => console.log(e + " is a " + typeof(e)))
// }
// console.log(logArrType([1,"Hi",true,{color: "green"}]))
// //7
// const myMap = (arr, cb) => {
//     for(i = 0; i < arr.length; i++){

//     }
// }
//redo 1
const cbFunc = (func) =>{
    return func
}
