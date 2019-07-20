/*## Question One

Write a function that takes in a callback and calls the callback

```
Input:
function() { console.log("Hello!") }

Output:
Logs "Hello!" to the console */

function func(callback){
  callback()
}

func(()=>{console.log("Hello World")})

/*## Question Two

Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

```
Input:
() => console.log("")

```*/

function fun(callback, bool){
  if(bool === true){
    callback()
  }
  else{
    console.log("Ignoring the callback")
  }
}

fun(()=>{console.log("called the callback")},false);

/*## Question Three

Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

```
Input: 4, (num) => num + 3, (num) => num * 2

Output: 14

```*/
function funct(num, call1, call2){
  let result = call1(num);
  result = call2(result);
  return result
}

console.log(funct(3,(n)=>{return n * 2},(n)=>{return n-5}));


//## Question Four

//You are given the following functions:

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}



//Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
//"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

function shouldIBuyThis(bal,callback){
  if(callback(bal)){
    return "Sure! I've got the money!"
  }else{
    return "Nope! Gotta keep my savings up!"}
}




console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

/*## Question Five

a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

```
Input: [1,4,5,6], (elem) => console.log("$" + elem)

Output:
Logs the following to the console:
1
4
5
6
```*/

function forEachElem(array,callback){
  for(let i = 0; i < array.length;i++){
    callback(array[i])
  }
}
forEachElem([2,5,3,7],(num)=>{console.log("$"+num)})

/*b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.


```
Input: [1,2,34]

Output:
Logs the following to the console:
1
2
34
```*/

function logEachElem(arr){
  forEachElem(arr,(num)=>{console.log(num)})
}
logEachElem([1,2,34]);

/*c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.


```
Input: [1,"Hi", true, {color: "green"}]

Output:
Logs the following to the console:
1 is a number
Hi is a string
true is a boolean
[object Object] is a object
```*/

function logArrTypes(arr){
  forEachElem(arr,(num)=>{console.log(num +" " +typeof(num))})
}
logArrTypes(["hey","hello",true]);

/*## Question Six

a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.

```
Input: [3,5,6], function(num) { return num * 3 }

Output: [9, 15, 18]
```*/

function myMap(arr,callback){
  let array = [];
  for(let i = 0; i < arr.length; i++){
    array.push(callback(arr[i]));
  }
  return array;
}
console.log(myMap([3,5,6],(num)=>{return num * 3}))

/*b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

```
Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

Output:

[
    'THE', 'INTERNET',
     'IS',      'NOT',
      'A',      'BIG',
 'TRUCK.',     "IT'S",
      'A',   'SERIES',
     'OF',    'TUBES'
]
```*/

function allCaps(arr){
  return myMap(arr,(x)=>{return x.toUpperCase()})
}
console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]));

/*## Question Seven

a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.

```
Input: [1,4,6,7, -3], num => num < 5

Output:  [1, 4, -3]*/
function myFilter(arr, callback){
  let array = []
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
    array.push(arr[i]);}
  }
  return array;
}

console.log(myFilter([1,4,6,7,-3],(num)=>{return num<5}))

/*b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.

```
Input: [1,2,3,4,5,6,7,8,9]
Output: [1,3,5,7,9]
```*/

function removeEvenNumbers(arr){
  return myFilter(arr,(num)=>{return num%2 === 1});
}

console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]))

/*c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

```
Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

Output:
[ 'JavaScript',
  'high-level,',
  'interpreted',
  'programming',
  'language',
  'that',
  'conforms',
  'ECMAScript',
  'specification' ]
```*/
function removeShortWords(arr){
    return myFilter(arr,(x)=>{return x.length > 3});
}
console.log(removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))
