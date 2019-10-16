//Question 1
const caller = (callback) => {
    callback()
}
const sayHello = () => {

console.log("Hello")}
caller(sayHello)

//Question 2
const ignoreCall = (callback, Boolean) => {
    if(Boolean === true){
        callback()
    } else {
        console.log("Ignoring the callback")
    }
}   
ignoreCall(sayHello, true)

//Question 3
