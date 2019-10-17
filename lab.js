// // Question 1 

// const sayHello = () => {
//     return "Hello"
// } 
// const greeting = (fn) => {
//     return fn ()
// }
// console.log(greeting(sayHello))

// // Question 2 

// const input = (bool, callBack) => {
//     if(bool === true) {
//         return callBack()
//     } else {
//         return "ignoring the callback"
//     }
    
// }

// console.log
    
//     input(true, ( () => console.log(" ") )))

// Question 3

const callNum = (num, cb) => {
    
const repeat = (num,fn) =>{
    let counter = 1
    while(counter <= num ){
        fn()
        counter += 1
    }
}

repeat(4,() => console.log(`I'm being called`))