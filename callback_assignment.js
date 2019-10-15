// # Callback Exercises

// 1. Write a function `forEachElem` that takes in an array and a callback. Call the 
//callback on each element in the array. 
console.log("######### Prob 1 #########");


let newArr1 = [1,2,3,4,4]

const forEachElem = (array, callback) => {
  array.forEach(el => {
    callback(el);
  });
 }


forEachElem(newArr1, (el) => {
  console.log(el*2);
});



// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` 
//method to log each element of the array.
console.log("######### Prob 2 #########");

let newArr2 = ['a', 'b', 'c', 'd'];

const logEachElem = (arr) => {
	forEachElem(arr, (el)=>{
		console.log("letter "+el);
	});
}
logEachElem(newArr2);



// 3. Create a function `logArrTypes` that uses the `forEachElem` method to 
//log each array element followed by its type. For example:

// ```js
// let mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr)
// // will log: 
// // 1 is a number
// // 'cat' is a string
// // true is a boolean
console.log("######### Prob 3 #########");

const logArrTypes = (arr) => {
	forEachElem(arr, (el) => {
		console.log(typeof el);
	});
}

let arr7 = ['sadf', 1, 3, [1,2,3]];
logArrTypes(arr7);



// 4. Write a function `myMap` that takes in an array and a callback. 
//Call the callback on each element of the array and add the result 
// to an output array. Return the output array. 
console.log("######### Prob 4 #########");

const myMap = (arr, callback) => {
	let outputArr = [];
	arr.forEach(el => {
		outputArr.push(callback(el));
	});
	return outputArr;
}




let newArr5 = [1,2,3,4];
let anotherArr = myMap(newArr5, (el)=>{
	return el*2;
});
console.log(anotherArr);




// 5. Create a function 'allCaps` that takes in an array as an argument, 
//and uses the `myMap` function to return all the elements capitalized.
console.log("######### Prob 5 #########");

const allCaps = (arr) => {
	return myMap(arr, el =>{
		return el.toUpperCase();
	});
}

let arr = ['a', 'b', 'c'];
console.log(allCaps(arr));


// 6. You are given the following functions:
// ```js
console.log("######### Prob 6 #########");

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver (balance) {
  return balance > 0;
}
 

 const shouldIBuyThis = (bal, callback) => {
 	if(callback(bal)){
 		return "Sure! I've got the money!";
 	}else{
 		return "Nope! Gotta keep my savings up!";
 	}
 }
 console.log(shouldIBuyThis(101, conservativeSpender));

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback 
// (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"

// ```
