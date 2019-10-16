console.log("Question 1")

const callHello = (cb1) =>{
    return cb1
}
callHello(console.log("hello"))

console.log("Question 2")

const cbBoo = (bl) =>{
    if (bl ===  true){
       return console.log(bl)
    }
    else {
       console.log("Ignoring the callback")
    }
}
console.log(cbBoo(0))



console.log("Question 3")
const playMusic = (cb2, num) =>{
    for(let i =1; i<=num; i++){
        console.log(cb2);
    }
}
console.log(playMusic("Rock", 4))


console.log("Question 4")