// ## Question One

function calculate(x, y, callback) {
    return callback(x, y)
}

function multiply(x, y) {
    return x * y
}
console.log(calculate(10, 10, multiply));

// ## Question Two

function ifCallback(callback, boolean) {
    if (boolean) {
        return callback
    } else {
        console.log("Ignoring call back");
    }
}
function trueCallback() {
    return true
}

ifCallback(trueCallback(), false);

// ## Question Three

function doubleSquare(x, cb1, cb2) {
    return cb2(cb1(x))
}
function add(x) {
    return x + x
}

function square(x) {
    return x * x
}

console.log(doubleSquare(1, add, square));

// ## Question Four

function conservativeSpender(balance) {
    return balance > 100
}

function liberalSpender(balance) {
    return balance > 10
}

function horribleSaver(balance) {
    return balance > 0
}

function shouldIBuyThis(balance, callback) {
    let decision = callback(balance)
    if (decision) {
        console.log("Sure! I've Got the $!");
    } else {
        console.log("Nope! Gotta keep my savings up");
    }
}

shouldIBuyThis(1, conservativeSpender)

// ## Question Five A

function forEachElem(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        console.log(callback(arr[i]));
    }
}
function double(x) {
    return x + x
}

function log(x) {
    return x;
}

forEachElem([1, 2, 3, 4], double);

// B

function logEachElem(arr) {
    forEachElem(arr, log)
}

logEachElem([10, 9, 8, 7, 6])

