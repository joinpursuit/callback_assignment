// Question 1 

const sayHello = () => {
    return "Hello"
} 
const greeting = (fn) => {
    return fn ()
}
console.log(greeting(sayHello))

// Question 2 

const input = (bool, callBack) => {
    if(bool === true) {
        return callBack()
    } else {
        return "ignoring the callback"
    }
    
}

console.log
    
    input(true, ( () => console.log(" ") )))

// Question 3

const callNum = (num, cb) => {
    

// }