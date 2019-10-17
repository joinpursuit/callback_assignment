// // // Write a function that takes in a callback and calls the callback

// // const callBack = (fn) => {
// //     return fn
// // }


// // const greet = () => {
// //     return "Hello!"
// // }


// // callBack(greet)
// // console.log(greet(callBack))

// // Write a function that takes in a callback and a boolean. 
// // If the boolean is true, call the callback, otherwise log 
// // "Ignoring the callback" to the console.


const callBackBool = (boolean) => {
    if (boolean === true) {
        return true 
    } else {
        return "Ignoring the callback"
    }
}
console.log(callBackBool(0 === ""))



const callBck = (fn, num) => {
    for(let i= 0; i < num ; i++){
        fn()
    }
}
callBck(() => console.log("I am being called"), 4)



// console.log(callNumTimes("I am being called", 4))

// Write a function that take in a number and two callbacks.  
// It should apply the first callback to the number, then the second callback, then return the result

const callbkTwice = (num, fn1, fn2) => {
    num = fn1(num);
    return fn2(num);
} 

console.log(callbkTwice(4, (num) => num + 3, (num) => num * 2))

// Input: 4, (num) => num + 3, (num) => num * 2


