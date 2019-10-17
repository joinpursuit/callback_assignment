//PROBLEM 1
const caller = (fn) => {
    return fn();
}

// console.log(caller(() => "Hello"))

//PROBLEM 2
const booleanCheck = (boolean, fn) => {
    if(boolean === true) {
       return fn();
    } else {
        return "ignoring the callback";
    }
}

// console.log(booleanCheck(true, () => "Hello"));

//PROBLEM 3
const callNumber = (num, fn) => {
    for(let i = 1; i <= num; i++) {
        console.log(fn())
    }
}

// callNumber(100, () => "Hello")

//PROBLEM 4
const changeNumTwice = (num, fn1, fn2) => {
    num = fn1(num);
    return fn2(num);
}

// console.log(changeNumTwice(4, (num) => num + 3, (num) => num * 2))


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

const shouldIBuyThis = (balance, fn) => {
    if(fn(balance) === true) {
       return "Sure! I've got the money.";
    } else {
        return "Nope! Gotta keep my savings up.";
    }
}

// console.log(shouldIBuyThis(20, horribleSaver));

//Problem 6

const forEachElm = (arr, cb) => {
    for (let i = 0; i  < arr.length; i++) {
        cb(arr[i])
    }
}

//Problem 6b

const logEachElm = (arr) => {
    forEachElm(arr, (el) => console.log(el))
}

// console.log(logEachElm([1,2,3,4]))

//Problem 6c

const logArrTypes = (arr) => {
    forEachElm(arr, (el) => {
        console.log(`${el} is a ${typeof(el)}`)
    })
}

// logArrTypes([1, "One", true])

//Problem 7

const myMap = (arr, cb) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}

// console.log(myMap([1,2,3,4,5], (num) => num + 1))

//Problem 7b

const allCaps = (arr) => {
    return myMap(arr,(el) => el.toUpperCase())
}

// console.log(allCaps(["the", "internet", "is", "not", "a", "big", "truck"]))

//Problem 8

const myFilter = (arr, cb) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){  
        if (cb(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(myFilter([1,4,6,7, -3], (num) => num < 5))

//Problem 8b

const removeEvenNumbers = (arr) => {
    return myFilter(arr, (num) => num % 2 === 1)
}

// console.log(removeEvenNumbers([1,2,3,4,5]))

const removeAShortWords = (arr) => {
    return myFilter(arr, (str) => str.length >= 4)
}

console.log(removeAShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))