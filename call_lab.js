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


// console.log("Question 4")

// const finResult = (num, cb1,cb2,cb3,cb4) =>{
//         cb1(num);
//       return cb4(cb3(cb2(cb1(num))))
// }

// const add3 = (num)=>{return num+3};

// const mut2 = (num)=>{return num*2};

// const sub = (num) => {return num -3}

// const div = (num) => {return num/2}

// console.log(finResult(4,mut2,sub,add3,div))


// console.log("Question 5")
// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }

// const shouldIBuyThis = (balance,func) => {
//   if (func(balance)=== true){
//     console.log("sure i got the the money")
//   } else {
//     console.log("nope, i got to keep my savings up")
//   }
  // return func(balance)
  
// } 
// console.log(shouldIBuyThis(20, horribleSaver))

// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))






  //  console.log(conservativeSpender(101))
  // const shouldIBuyThis = (money,cb1)=>{
  //     cb1 = cb1(money);
  //     if(cb1===true){
  //         console.log("Sure! I've got the money!")
  //     }
  //     else{
  //         console.log("Nope! Gotta keep my savings up!")
  //     }
  // }
  // console.log(shouldIBuyThis(20, liberalSpender))
  // console.log(shouldIBuyThis(20, conservativeSpender))
  // console.log(shouldIBuyThis(101, conservativeSpender))

console.log("Problem 6 A:")
const forEachElem = (arr,func) => {
   for (i = 0; i < arr.length; i++){
         func(arr[i]) 
   }
}

console.log(forEachElem( [1,4,5,6], (elem) => console.log("$" + elem)))



console.log("Problem 6 B:");



const logEachElem = (arr) => {
  forEachElem(arr,(elem) => console.log(elem));
}
console.log(logEachElem([1,2,34]));


console.log("Problem 6 C:");



const logArrTypes = (arr) => {
  forEachElem(arr,(elem) => console.log((forEachElem(arr, (elem) => console.log(elem+ " is " +typeof elem)))))
  // console.log(typeof arr)
}
console.log(logArrTypes([1,"Hi", true, {color: "green"}]));


console.log("Problem 7A:");

const myMap = (arr, cb) => {
  let result = [];
  for(let i = 0; i< arr.length; i++) {
      result.push(cb(arr[i]))
  }
  return result
}

console.log(myMap([3,5,6], function(num) { return num * 3 }));

console.log("Problem 7B:");

const allCaps = (arr) => {return arr.toUpperCase()}
console.log(myMap(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"], allCaps));

console.log("Problem 8");

const myFilter = (arr,cb)=>{
    let newArr = [];
  for (let i =0; i<arr.length; i++){
        newArr.push(cb(arr[i]))
      } 
      return newArr;
    }
const numLess5 = arr =>{
    if (arr <5){
      return arr
    }
}
console.log(myFilter([1,4,6,7, -3], numLess5))

const numLessEven = arr =>{
  if (arr %2 !==0){
    return arr
  } 
}
console.log(myFilter([1,2,3,4,5,6,7,8,9], numLessEven))

const removeShortWords = (arr) =>{
  if (myFilter(arr, (el) => el.length>=4)){
    return arr
  }
}

let string2 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
console.log(myFilter(string2, removeShortWords))