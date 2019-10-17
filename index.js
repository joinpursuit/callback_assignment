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

// const fourthfunction = (num, cb, cb2) => {
    
//     return cb2(cb(num))
// }

// console.log(fourthfunction(4, (num) => num += 4, (num) => num /= 2))

// ## Question Five

// You are given the following functions:
// ```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

const shouldIBuyThis = (balance, callback) => {
    if (callback(balance) === true) {
        return ("Sure! I've got the money!")
    } else if (callback(balance) === false) {
        return ("Nope! Gotta keep my savings up")
    }  
    }

    console.log(shouldIBuyThis(12, liberalSpender))