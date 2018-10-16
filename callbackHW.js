// 1.
// let arr = [1, 2, 3, 4, 5];
//
// const forEachElem =(array,callback) => {
//   for (let i = 0; i < this.length; i++) {
//       callback(this[i])
//      }
//      return
//   };
// forEachElem([1,2,3,4,5])


// 2.
// const logEachElem = (arr) =>{
//   return forEachElem(arr,(el) => {
//     console.log(el);
//
//   })
// return
// };

//3
// const logArrTypes = (arr)=>{
//   forEachElem(arr,((el)=>{
//     console.log(el + " is a " + typeof(el))
//   })
// }

// 4. myMap function definition
// const myMap = (arr, callback) => {
// 	let outputArr = [];
// 	arr.forEach(el => {
// 		outputArr.push(callback(el));
// 	});
// 	return outputArr;
// }
// callback on the function on each element of the array && add the result to an output array.

// let newArr = [2,4,6,8];
// let secondArr = myMap(newArr,(el)=>{
//   return el + 1;// anything here?
// })
// console.log(secondArr);
//5
// let array = ["wooo","homework","plz work"]
// const allCaps =(arr) =>{
//   myMap(arr,el => {
//     return el.toUpperCase();
//   })
// }
// console.log(allCaps(array));

//6.

// function conservativeSpender(balance)  {
//   return balance > 100
// }
//
// function liberalSpender(balance) {
//   return balance > 10
// }
//
// function horribleSaver (balance) {
//   return balance > 0
// }

//NOTES: if I got the balance , sure I got the money 
// else if i dont got the money Nope! gotta keep my savings upp!
//console.log(shouldIBuyThis( ))


// const shouldIBuyThis = (balance,callback)=>{
//   if (callback(balance)){
//     return "sure I've got monies to spend"
//   }else {
//     return "Nope! Gotta keep my savings up!";
//   }
// }

//NOTES: confused about the console.logs provided. so when I put in a balance of 20, conservativeSpender. conservativeSpender is the callback? and therefore logs "sure ive got monies to spend"?
