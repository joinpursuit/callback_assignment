//Question 1
// const caller = (callback) => {
//     callback()
// }
const sayHello = () => {
console.log("Hello")
}

// caller(sayHello)

//Question 2
// const ignoreCall = (callback, Boolean) => {
//     if(Boolean === true){
//         callback()
//     } else {
//         console.log("Ignoring the callback")
//     }
// }   
// ignoreCall(sayHello, true)

//Question 3
// const occurrences = (callback, num) => {
//     for (let i = 0; i < num; i++) {
//         callback();
//     }
// }

// occurrences(sayHello, 3);

//Question 4
// const function1 = (callback1, callback2, num) => {
//     console.log(callback2(callback1(num)));
// }

// const add = (num) => num + 1;
// const multiply = (num) => num * 2;

// function1(add, multiply, 2);

//Question 5
// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }

// const shouldIBuyThis = (balance, callback) => {
//     if (callback(balance)) {
//         console.log("Sure! I've got the money!")
//     } else {
//         console.log("Nope! Gotta keep my savings up!")
//     }
// }

// shouldIBuyThis(20, conservativeSpender);

//Question 6a
const forEachElem = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

//Question 6b
// const logEachElem = (arr) => {
//     forEachElem(arr, (i) => console.log(i));
// }

// logEachElem([1,2,34]);

//Question 6c
// const logArrTypes = (arr) => {
//     forEachElem(arr, (i) => console.log(`${i} is a ${typeof(i)}`));
// }
// logArrTypes([1, "Hi", true, {color: "green"}]);

//Question 7a

// const myMap = (arr, callback) => {
//     let emptyArray = []
//     for(let i = 0; i < arr.length; i++) {
//         emptyArray.push(callback(arr[i]))
//     } return emptyArray
// }
// console.log(myMap([3,5,6], function(num) { return num * 3 }))

// //Question 7b

// const allCaps = (arr) => {
//     return myMap(arr, i => i.toUpperCase())
// }
//     console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]))

//Question 8a
const myFilter = (arr, callback) => {
    let newArray = []
    for(let i = 0; i< arr.length; i++){
        if(callback(arr[i])){
            newArray.push(arr[i])
        }
    } return newArray
}
//console.log(myFilter([1,4,6,7, -3], num => num < 5))

//Question 8b

const removeEvenNumbers = (array) => {
    return myFilter(array, num => {
    if(num % 2 === 0){
        return true
    } else {
        return false
    }})
}
    
console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]))

//Question 8c
const removeShortWords = (arr) => {
    return myFilter(arr, (i) => {
    if(i.length > 4 ){
        return true
    } else {
        return false
    }})
}
console.log(removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))