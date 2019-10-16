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