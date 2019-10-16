//Problem 1
const caller = (callback) => {
    callback()
}
const sayHello = () => {
    console.log("Hello!")
}
caller(sayHello)

//Problem 2
const ignoreCall = (callback, boolean) => {
    if(boolean === true) {
    } else {
        console.log("Ignoring the callback")
    }
}
ignoreCall(console.log(""), true)
ignoreCall(console.log("Testing"), false)

//Problem 3
const multiple = (callback, num) => {
    for(let i = 0; i < num; i++){
        callback(num[i])
    }
}
const called = (string) => {
    console.log("I am being called")
}
multiple(called, 4)

//Problem 4
const callbackResult = (num, callback) => {
    return multiplcationTwo(additionThree(num))
}

const additionThree = (num) => {
    return num + 3
}
const multiplcationTwo = (num, callback) => {
    return num * 2
}
console.log(callbackResult(4))