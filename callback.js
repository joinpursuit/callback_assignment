////////////////##Question One
function isCaller(callback) {
    callback()
}

function sayHello() {
    console.log("Hello!")
}
isCaller(sayHello);


////////////////##Question Two
const ignoreCallback = (callback, boolean) => {
    if (boolean === true) {
        ignoreCallback();
    } else {
        console.log("Ignore the callback")
    }
}
ignoreCallback(console.log("", true));
ignoreCallback(console.log("Testing", false));


/////////////////Question Three

const caller = (callback, num) => {

    for (let i = 0; i < num; i++) {
        callback();
    }
}
const isBeingCall = () => {
    console.log("I am being called")
}

caller(isBeingCall, 4);

////////////## Question Four

const mergeCb = (numOne, cb1, cb2) => {
    return (cb1, cb2);
}
const addFunc = () => {
    return numOne + 3
}
const mulFunc = () => {
    return numOne * 2
}
mergeCb(console.log((4 + 3) * 2));

////////## Question Five

function conservativeSpender(balance) {
    return balance > 100
}

function liberalSpender(balance) {
    return balance > 10
}

function horribleSaver(balance) {
    return balance > 0
}

function shouldIBuyThis(balance, cb) {
    if (cb(balance)) {
        return "Sure,I've got the money!"
    } else {
        return "Nope! Gotta keep my saving up!"
    }
}
console.log(shouldIBuyThis(20, horribleSaver))

//////////## Question Six

/* a.Write a function `forEachElem`
that takes in an array and a callback.
Call the callback on each element in the array.
``
`
Input: [1,4,5,6], (elem) => console.log("$" + elem)
Output:
Logs the following to the console:
1
4
5
6
`
``*/
const forEachElem = (arr, cb) => {}


// b.Create a function `logEachElem`
// that takes an array as an argument logs every element in the input array.
//Use `forEachElem`inside the body of your function.
//                 ``
//                 `
// Input: [1,2,34]

// Output:
// Logs the following to the console:
// 1
// 2
// 34
// `
//                 ``

//c.Create a function `logArrTypes`
//  that uses the `forEachElem`method to log each array element followed by its type.
//                 ``              `
// Input: [1,"Hi", true, {color: "green"}]

// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object
//```