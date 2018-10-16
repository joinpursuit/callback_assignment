# Callback Exercises

1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.
3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

```js
let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)
// will log:
// 1 is a number
// 'cat' is a string
// true is a boolean

```
4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
to an output array. Return the output array.
5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.
6. You are given the following functions:
```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

```

Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

```js
console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

```

````
let sampleArray = [2, 4, 5, 6, 7, 8, 9, 0]
let sampleTextArray = ["apple","orange","banana"]

//Q1
// function forEachElem (arr1, callback){
// for (let i = 0; i < arr1.length; i++){
// 	callback(arr1[i])
// }
// }

function forEachElem(arr1, callback) {
	return arr1.forEach(callback)
}
/// CAN WE DO IT WITH A FOR EACH METHOD?

//callback is a un-invoked functon. They are what we want to do to the array.

function logEachElem(arg1) {
	return console.log(arg1)
}

forEachElem(sampleArray, logEachElem)
// I was somehow thinking that we are doing sampleArray.forEachElem - METHOD?


// //Attempting to use a switch case - if ARR or Callback is a string = string, interger a interger, etc...
// function logArrTypes (arr, callback){
// 	switch(typeof(arr)){
// 		case string:
// 		console.log(arr)
// 	}
// }
// 		console.log (callback + " this is a string")
// 	}
// }



// Q3
function logArrTypes(arr) {
	forEachElem(arr, function (el) {
		return console.log(el + " is is a " + typeof (el))
	}
	)
}

let mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)

//Q4

function myMap(array, callback) {
	let output = []
	forEachElem(array, function (el) {
		output.push(callback(el))
	})

	return console.log(output)
}

myMap(sampleArray, function (el) {
	return el * 2
})
//Q5
function allCaps(arg) {
 myMap(arg, function (el) {
	return el.toUpperCase()
 })}


allCaps(sampleTextArray)

// Turn it into a string first to UPPERCASE than to
// FIRST Attempting

	// function allCaps (arg) {
	// let mapa = myMap(arg, function (el){
		// return el.toUppercase())
// 	}} // FIRST Attempting

	/// uppercase the callbacks or array the map is already pushing the return output already so no need for that

/// the ideal is when you call it the function uppercase get push to the mymap. the array get push into the mymap array.


//Q6
function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0

}

 function shouldIBuyThis (balance, callback) {
	 if (callback(balance) === true){
	 return "Sure! I've got the money!"
	 }
	 else return "Nope! Gotta keep my savings up!"
	 }

console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

````
