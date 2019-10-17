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

//Problem 5
function conservativeSpender(balance)  {
    return balance > 100
  }
  
  function liberalSpender(balance) {
    return balance > 10
  }
  
  function horribleSaver (balance) {
    return balance > 0
  }
  
const shouldIBuyThis = (balance, callback) => {
    conservativeSpender(balance)
    liberalSpender(balance)
    horribleSaver(balance)
    if(callback(balance)) {
        return "Sure! I've got the money!"
        } else {
            return "Nope! Gotta keep my savings up!"
        }
    }
console.log(shouldIBuyThis(20, horribleSaver))

//Problem 6
// a
const forEachElement = (arr, callback) => {
    for(let i = 0; i < arr.length; i ++) {
        callback(arr[i])
    }
}
forEachElement([1,4,5,6], (elem) => console.log("$" + elem))

//b
const logEachElement = (arr, ele) => {
   return forEachElement(arr, (ele) => console.log(ele))
}
logEachElement([1,2,34])

//c
const logArrTypes = (arr, ele) => {
    return forEachElement(arr, (ele) => console.log((ele) + " is a " + typeof(ele)))
}
logArrTypes([1,"Hi", true, {color: "green"}])

//Problem 7
//a
const myMap = (arr, callback) => {
    let newArray = []
    for(let i = 0; i< arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray
}
console.log(myMap([3,5,6], function(num) { return num * 3 }))

//b
const allCaps = (arr) =>{
    return myMap(arr, (ele) => ele.toUpperCase())
}
console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]))

//Problem 8
//a
const myFilter = (arr, callback) => {
    newArray1 = []
    for(let i = 0; i< arr.length; i++) {
        if(callback(arr[i])) {
            newArray1.push(arr[i])
        }
    }
    return newArray1
}
console.log(myFilter([1,4,6,7, -3], num => num < 5))

//b
const removeEvenNumers = (arr) =>{
    return myFilter(arr, (ele) => (ele)%2 === 1)
}
console.log(removeEvenNumers([1,2,3,4,5,6,7,8,9]))

//c 
const removedShortWords = (arr) => {
    return myFilter(arr, (ele) => ele.length >= 4)
}
console.log(removedShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))