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

// callNumber(2, () => "Hello")

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