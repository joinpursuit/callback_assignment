// ## Question One

// Write a function that takes in a callback and calls the callback

// const newFunction = (callback) => {return callback}

// console.log(newFunction("Hello"))

// Question two

// const secondFunc = (callback, boolean) => {
//     if(boolean === true ){
//         return callback
//     }else {
//         return "Ignoring the callback" 
//     }
// }

// console.log(secondFunc("B", false))

// ## Question Three

// Write a function that takes in a callback and a number.  It should call the callback that many times.
// ```

const thirdFunc = (callback, number) => {
    let i = 1
    while (i <= number) {
        console.log(callback)
        i++
    }
}
thirdFunc("Hello World", 2)

// const thirdFunc = (callback, number) => {
//     for (let i = 0; i < number ; i++) {
//         return callback
//     }
// }
// console.log(thirdFunc("hello world", 2))


//Question four

const fourthfunction = (num, cb, cb2) => {
    
    return cb2(cb(num))
}

console.log(fourthfunction(4, (num) => num += 4, (num) => num /= 2))