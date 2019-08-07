// Question One
// Write a function that takes in a callback and calls the callback
//
// Input:
// function() { console.log("Hello!") }
//
// Output:
// Logs "Hello!" to the console

 function phonecall(originalcall){
   originalcall();
}

function worker(){
console.log('hello');
}

phonecall(worker);


// Question Two
// Write a function that takes in a callback and a boolean. If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.
//
// Input:
// () => console.log("")


function num(callback,boolean){ // higher order function b/c its telling you what to use
 if(boolean === true){
callback();
 } else{
console.log("Ignoring the callback")
 }
}function itworks(){
console.log('It works')
}
num(itworks,true)




// Question Three
// Write a function that take in a number and two callbacks. It should apply the first callback to the number, then the second callback, then return the result
//
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14

function numa( x,y,b){ //
return y(x(b));
}
function addthree(x){
  return x + 3 // return runs its functon and return something back to the original function it was called in
}
function timestwo(y){
  return y * 2
}
numa(addthree, timestwo, 4)
console.log(numa(addthree, timestwo, 4))

// function master(a,b,c,d,e){
// return (d(c(b(a(e)))))
// }
// function addten(a){
// return a + 10
// }
// function timestwo(b){
//   return b * 2
// }
// function dividetwo(c){
//   return c / 2
// }
// function subtractten(d){
//   return d - 10
// }
// master(addten,timestwo,dividetwo,subtractten,5)
// console.log(master(addten,timestwo,dividetwo,subtractten,5))


// Question Four
// You are given the following functions:

// Write a function shouldIBuyThis that takes in a balance and a callback (one of the above functions). The function should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
//
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
//

function masterspender(callback,balance){
  if (callback(balance)) {
    console.log("Sure! I've got the money!");
  } else {
    console.log("Nope! Gotta keep my savings up!")
  }
}
function conservativeSpender(balance) {
  return balance > 100
}
function liberalSpender(balance) {
  return balance > 10
}
function horribleSaver (balance) {
  return balance > 0
}
masterspender(liberalSpender,20)

// Question Five
// a. Write a function forEachElem that takes in an array and a callback. Call the callback on each element in the array.
//
// Input: [1,4,5,6], (elem) => console.log("$" + elem)
//
// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6// the boss
function forEachElem(arr, callback){ // creating a function that evalauates two parameter arr and callback
for (let i = 0; i < arr.length; i++){ // looping through the array starting at 0 until its length/
  callback(arr[i]); // apply callback for each item in the array
}// second calling
}
function elem(num) { //the heart of the function that excutes the argument
console.log('$' + num) // asking to add a $ sign to each number of the array
  }
let arr = [1,4,5,6]; // pre-defining the array
forEachElem(arr,elem) // the master calling/ if this is not call the function cannot run

// b. Create a function logEachElem that takes an array as an argument logs every element in the input array. Use forEachElem inside the body of your function.
//
// Input: [1,2,34]
//
// Output:
// Logs the following to the console:
// 1
// 2
// 34

 function logEachElem(array)
 for(let i = 0; i < array.length; i ++)

const array =[1,2,34]

function forEachElem(arr, cb){
  for(let i = 0; i < array.length; i ++)
  const elem = arr[i];
  cb(elem)
  };

// const logEachElem = (array)=> {
// forEachElem (arr, a)
// logEachElem
 for(let i = 0; i < array.length; i ++)



// c. Create a function logArrTypes that uses the forEachElem method to log each array element followed by its type.
//
// Input: [1,"Hi", true, {color: "green"}]
//
// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object

function consolelogTypes(el) {
for let( i=0; i <arr.length; i++) {
  const elem = arr[i]
function logArrTypes(arr){
    forEachElem(arr, function (el) {

    }
}



// Question Six
// a. Write a function called myMap that takes in an array and a callback as arguments. It should return a new array with the callback applied to each element in the array.
//
// Input: [3,5,6], function(num) { return num * 3 }
//
// Output: [9, 15, 18]

let ar = [3,5,6]

functon multiplyByThree(num){
  return num * 3
}
const myMap =(array, cb)=> {
  let result= []
for (let item of ar){
  result.push(cb(item))
}
return result
myMap(ar, miltiplyByThree)
// b. Create a function allCaps that takes in an array as an argument, and uses the myMap function to return all the elements capitalized.
//
// Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
//
// Output:
//
// [
//     'THE', 'INTERNET',
//      'IS',      'NOT',
//       'A',      'BIG',
//  'TRUCK.',     "IT'S",
//       'A',   'SERIES',
//      'OF',    'TUBES'
// ]
let ar2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
funcntion( allCap(item)){
let result2 =[]
for (let item of ar2){
}
funcntion( allCap(item)){}
return item.toUpperCase()
myMap(arr, divideByThree)



const whatType =(item) => {
return typeof  item
}
result =[ number,ar3, object]
// Question Seven
// a. Write a function called myFilter that takes in an array and a callback as arguments. The callback should take in an element and return a boolean. myFilter should return a new array with only values that return true when passed into the callback.
//
// Input: [1,4,6,7, -3], num => num < 5

let arr5 =1,4,6,7, -3]
function myFilter(array,cbb) {// array is an argument
let result =[]
for(let item of array) {}// serve the same as the loop i=0; etc. to loop throu index
result.push(cbb, item)) // this is running several times
}
return result // result returns after // [1,,-3]
function(filterOddItem) {
  if (item % 2 === 0)
  return item
}

/// function myFilter (item){
if(item < 5 ) {
  return item
}

//
// Output:  [1, 4, -3]
// b. Write a function called removeEvenNumbers that takes in an array and returns an array with all the even numbers removed.
//
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
// c. Write a function called removeShortWords that takes in an array and returns an array with all strings containing fewer than 4 characters removed.
//
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
//
// Output:
// [ 'JavaScript',
//   'high-level,',
//   'interpreted',
//   'programming',
//   'language',
//   'that',
//   'conforms',
//   'ECMAScript',
//   'specification' ]
//
