// # Callback Exercises
//
//1. Write a function 'forEachElem' that takes in an array and a callback. Call the callback on each element in the array.\n`);

//let arrEachElem = ['This','is','an', 'array']
// function arrPrint (inar) {
//   let print=[];
//   for (let i=0; i < inar.length; i++) {
//     print.push(inar[i]);
//   }
//   return print
// }

//creating the function that has a callback as a paramter and return
function forEachElem (eachArray, arrayCall){
  return arrayCall(eachArray);
}

//console.log(forEachElem(arrEachElem,arrPrint));

console.log( `\nproblem 2. Create a function logEachElem that takes an array as an argument, and uses the 'forEachElem' method to log each element of the array.\n`);
let num2Array =[3,6,9,12,34]

const logEachElem =(logArr) => {
  for(let i =0; i < logArr.length; i++){
    console.log(logArr[i]);
  }
};

// using the forEachElem fucntion to call the logEachElem function to log the array elements
forEachElem(num2Array,logEachElem);

console.log(`\nProblem 3. Create a function 'logArrTypes' that uses the 'forEachElem' method to log each array element followed by its type.\n`); //For example:
//
// ```js
let mixedArr = [1, 'cat', true, null, 'str', 30];
// the function that will be called by the forEachElem fucntion, that loops into the array
function logArrTypes(typeofArr) {
  let type ='';
  for (let i =0; i < typeofArr.length; i++) {
    type =typeof(typeofArr[i]);
    console.log(`${typeofArr[i]} is a ${type}`);
  }
}
// using the forEachElem fucntion to call the logEachElem function to log the array elements
// and typeof element
forEachElem(mixedArr,logArrTypes);

//4. Write a function 'myMap' that takes in an array and a callback. Call the callback on each element of the array and add the result
//to an output array. Return the output array.
const myMap =(mapArr,mapCallback) => {
  //console.log(mapArr);
  let arrMap =[];
  for (let i =0; i<mapArr.length;i++){
    arrMap.push(mapCallback(mapArr[i]));
  }
  return arrMap;
};

console.log(`\nProblem 5. Create a function 'allCaps' that takes in an array as an argument, and uses the 'myMap' function to return all the elements capitalized.\n`);

let lowCase = ['this ','is ','my ','array ', 'for ', 'question ', 'five'];
const allCaps = (capsArray) => {
  let upCase ='';
  for (let i =0; i < capsArray.length; i++){
   upCase += capsArray[i].toUpperCase();
  }
  //console.log(upCase);
  return upCase;
};
console.log(myMap(lowCase,allCaps));

//6. You are given the following functions:
console.log('\nQuestion #6');

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver (balance) {
  return balance > 0;
}
// Write a function 'shouldIBuyThis' that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
const shouldIBuyThis = (balance,callback) => {
  if (callback(balance)){
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
};
console.log(shouldIBuyThis(99, conservativeSpender));
