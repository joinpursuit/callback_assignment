// ## Question One

// Write a function that takes in a callback and calls the callback

// const newFunction = (callback) => {return callback}

// console.log(newFunction("Hello"))

// Question two

const secondFunc = (callback, boolean) => {
    if(boolean === true ){
        return callback
    }else {
        return "Ignoring the callback" 
    }
}

console.log(secondFunc("B", false))

