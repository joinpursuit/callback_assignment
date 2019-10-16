// console.log("Question 1")

// const callHello = (cb1) =>{
//     cb1 = cb1
// }

// callHello(console.log("Hello!"))

// console.log("Question 2")

// const cbBoo = (b1,boo) =>{
//     if (boo ===  true){
//        b1();
//     }
//     else {
//        console.log("Ignoring the callback")
//     }
// }
// const mySta = () => {console.log("Im true")}
// console.log(cbBoo(mySta, false))

// console.log("Question 3")
// const playMusic = (cb2, num) =>{
//     for(let i =1; i<=num; i++){
//         console.log(cb2);
//     }
// }
// console.log(playMusic("Rock", 4))


console.log("Question 4")

const finResult = (num, cb1,cb2) =>{
        cb1(num);
      return cb2(cb1(num))
}

const add3 = (num)=>{return num+3};
const mut2 = (num)=>{return num*2};
console.log(finResult(4,add3,mut2))