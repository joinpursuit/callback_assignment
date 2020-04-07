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