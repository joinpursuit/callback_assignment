//Question 1

const questionOne = (cb) => {
    cb()
}

const sayHello = () => {
    console.log("Hello!") 
}
questionOne(sayHello)

//Question 2

const questionTwo = (cb, boolean) => {
    if (boolean) {
        cb()
    } else {
        console.log("Ignoring the callback")
    }
}

const runCallback = () => {
    console.log("Testing")
}
questionTwo(runCallback, true)

//Question 3

const questionThree = (cb, num) => {
    for (let i = 0; i < num; i++) {
        cb()
    }
}

const repeatFour = () => {
    console.log("I am being called")
}
questionThree(repeatFour, 4)

//Question 4

const questionFour = (cb1, cb2, num) => {
    console.log(cb2(cb1(num)))
}

const add = (num) => num + 3
const multiply = (num) => num * 2

questionFour(add, multiply, 4)

//Question 5

function conservativeSpender(balance) {
    return balance > 100
    console.log("Sure! I've got the money!")
}
  
function liberalSpender(balance) {
    return balance > 10
    console.log("Sure! I've got the money!")
}
  
function horribleSaver (balance) {
    return balance > 0
    console.log("Sure! I've got the money!")
}
  
const shouldIBuyThis = (balance, cb) => {
    if (cb(balance)) {
      console.log("Sure! I've got the money!")
    } else {
      console.log("Nope! Gotta keep my savings up!")
    }
}
shouldIBuyThis(101, conservativeSpender)

//Question 6a

const forEachElem = (arr, cb) => {
    arr.forEach((el) => {
      cb(el)
    })
}
forEachElem([1,4,5,6], (el) => console.log("$" + el))

//Question 6b

const logEachElem = (arr) => {
    forEachElem(arr, (el) => console.log(el))
}
logEachElem([1,2,34])

//Question 6c

const logArrTypes = (arr) => {
    forEachElem(arr, el => console.log(el + " is a " + typeof(el)))
}
logArrTypes([1,"Hi", true, {color: "green"}])

   

  
  