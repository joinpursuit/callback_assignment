// console.log("question one")

// const sayHello = (str) => {
// return "hello!"
// }

// const callBack = (fn) => {
//     return sayHello()
// }

// console.log(callBack())

// console.log("question 2")
// const ignore = (str) => {
//     return "ignoring the callback"
// }
// const truOrNot = (statement) => {
//     if (statement === true) {
//         return true
//     } else {
//         return ignore()
//     }
// }
// console.log(truOrNot(1));

console.log("question 3")

const thatManyTimes = (num, string) => {
    for(let i = 0; i < num; i++){
        string(num)
    }
    return string;
}
thatManyTimes(4, (string) => console.log("hi"))

console.log("question 4")

const add = num => num + 3
const multiple = num => num * 2
const doubleWork = (num, fn1, fn2) => {
    return multiple(add(num))
}

console.log(doubleWork(4))

console.log("question 5")
function conservativeSpender(balance)  {
    return balance > 100
  }
  
  function liberalSpender(balance) {
    return balance > 10
  }
  
  function horribleSaver (balance) {
    return balance > 0
  }

  const shouldIBuyThis = (balance, fn) => {
let answer = ""
if(fn(balance)){
    answer = "Sure, I've got the money"
    } else {
    answer = "Nope! Gotta keep my savings up!"
    } return answer
}
  console.log(shouldIBuyThis(100, conservativeSpender))

  console.log("Problem 6")

  const forEachElem = (arr, cb) => {
      for(let i = 0; i < arr.length; i++){
          cb(arr[i])
      } 
  }

forEachElem([1, 4, 5, 6], (cb) => console.log("$" + cb))

const logEachElem = (arr) => {
  return forEachElem(arr, (el) => {
    console.log(el)
  })
}

logEachElem([1,2,34])

const logArrTypes = (arr) => {
  forEachElem(arr, (el) => {
    if(typeof(el) === "number"){
      console.log(`${el} is a number`)
    }else if(typeof(el) === "string"){
      console.log(`${el} is a string`)
    }else if(typeof(el) === "boolean"){
      console.log(`${el} is a boolean`)
    } else {
      console.log(`[object Object] is a object`)
    }
  })
}

logArrTypes([1,"Hi", true, {color: "green"}])

console.log("Question 7")
const timesTwo = (num) => {
  return num * 2
}
const myMap = (arr, callback) => {
  let output = []
  for(let i = 0; i < arr.length; i++){
    let result = callback(arr[i])
    output.push(result)
  }
  return output
}

// console.log(myMap([1, 2, 3], timesTwo))

