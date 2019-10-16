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

const returnNum = (num, callback) => {
   for(let i=0; i < num; i++){
       console.log (callback())
   }
}

const multi = () =>{
    return "I am being Called"
}
console.log(returnNum(4,multi));
