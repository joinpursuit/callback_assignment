// console.log("question one")

// const sayHello = (str) => {
// return "hello!"
// }

// const callBack = (fn) => {
//     return sayHello()
// }

// console.log(callBack())

// console.log(question 2)
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

const string = (str) => {
    return "hi"
}
const thatManyTimes = (num) => {
    return string() += num
}
console.log(thatManyTimes(3))