// ## Question One

// Write a function that takes in a callback and calls the callback

// ```
// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console
// ```

function caller(callback){
	callback();
}

caller(function() { console.log("Hello!") });


// ## Question Two

// Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

// ```
// Input:
// () => console.log("")

// ```

function trueOr(callback, boolean){
	if(boolean){
		callback();
	}
	else{
		console.log('Ignoring the callback');
	}
}

trueOr(() => console.log("I am called"), true);

// ## Question Three

// Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

// ```
// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14


function transform(num, callback1, callback2){
	return callback2(callback1(num));
}

console.log(transform(4, (num) => num + 3, (num) => num * 2));

// ## Question Four

// You are given the following functions:
// ```js

// function conservativeSpender(balance)  {
//   return balance > 100
// }

// function liberalSpender(balance) {
//   return balance > 10
// }

// function horribleSaver (balance) {
//   return balance > 0
// }

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
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



function shouldIBuyThis(balance, callback){
	if(callback(balance)){
		return "Sure! I've got the money!";
	}
	return 'Nope! Gotta keep my savings up';
}

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"



// 5a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6



function forEachElem(arr, callback){
	for(let i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
}

forEachElem([1,4,5,6], (elem) => console.log("$" + elem));

// b. Create a function logEachElem that takes an array as an argument logs every element in the input array. Use forEachElem inside the body of your function.

function logEachElem(arr){
	forEachElem(arr, (elem) => {console.log(elem)});
}

logEachElem([1,2,34]);


// c. Create a function logArrTypes that uses the forEachElem method to log each array element followed by its type.

function logArrTypes(arr){
	forEachElem(arr, (elem) => (console.log(elem + ' is a ' + typeof elem)));
}

logArrTypes([1,"Hi", true, {color: "green"}]);

// Question Six
// a. Write a function called myMap that takes in an array and a callback as arguments. It should return a new array with the callback applied to each element in the array.


function myMap(arr, callback){
	let temp = [];
	for(let i = 0; i < arr.length; i++){
		temp.push(callback(arr[i]));
	}
	return temp;

}

console.log(myMap([3,5,6], function(num) { return num * 3 }));

// b. Create a function allCaps that takes in an array as an argument, and uses the myMap function to return all the elements capitalized.

function allCaps(arr){
	return myMap(arr, (elem) => {return elem.toUpperCase()});
}

console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]));

//7a. Write a function called myFilter that takes in an array and a callback as arguments. The callback should take in an element and return a boolean. myFilter should return a new array with only values that return true when passed into the callback.

function myFilter(arr, callback){
	let temp = []
	for(let i = 0; i < arr.length; i++){
		if(callback(arr[i])){
			temp.push(arr[i]);
		}
	}
	return temp;
}

console.log(myFilter([1,4,6,7, -3], num => num < 5));

//b. Write a function called removeEvenNumbers that takes in an array and returns an array with all the even numbers removed.

function removeEvenNumbers(arr){
	return myFilter(arr, (elem) => { return elem % 2 === 1});
}

console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]));

//c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

function removeShortWords(arr){
	return myFilter(arr, (elem) => {return elem.length > 3});
}

console.log(removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]));