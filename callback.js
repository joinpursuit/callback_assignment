/*
## Question One

Write a function that takes in a callback and calls the callback

```
Input:
function() { console.log("Hello!") }

Output:
Logs "Hello!" to the console
*/
console.log('#1');
  function sayHello() {
  console.log("Hello");
}
  function caller(callback){
  callback()
}
  caller(sayHello)
/*
## Question Two

Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

```
Input:
() => console.log("")

```
*/
console.log('');
console.log('#2');

function booleanCaller (callback, boolean){
  if(boolean === true){
    callback();
  }
  else {
    console.log("Ignoring the callback");
  }
}
booleanCaller(sayHello,false);

/*
## Question Three

Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

```
Input: 4, (num) => num + 3, (num) => num * 2

Output: 14

```
*/
console.log("");
console.log("#3");

// const numberCallbacks = (num, callback1, callback2) => {
//   console.log(num)
//
// add = num +callback1
// console.log(num+" + "+callback1+ " = "+ add) ;
//
// multi = add * callback2
// console.log(add+" * "+callback2+ " = "+ multi);
// }
// numberCallbacks(4,3,2)
const numberCallBacks = (num, callback1, callback2) => {
 return callback2(callback1(num))
}
const add = (num) => {
  result1 = num + 3;
  return result1;
}
const multiply = (num) => {
  result2 = num * 2
  return result2;
}

console.log(numberCallBacks(4,add,multiply))

/*
## Question Four

You are given the following functions:
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

Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
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
*/
console.log("");
console.log("#4");

function shouldIBuyThis (callback, balance){

      if( balance = callback){
        return "Sure I've got the Money!"
                }
      else {
        return "Nope! Gotta keep my savings up!"
          }
}
      //return (conservativeSpender(balance)

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0

}
console.log(shouldIBuyThis(liberalSpender(9)));

// i think im having the same problem, where im calling the fucntion but not the callback. i dont get the point of a call back if i can just call the function.
/*

## Question Five

a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

```
Input: [1,4,5,6], (elem) => console.log("$" + elem)

Output:
Logs the following to the console:
1
4
5
6
```

b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.


```
Input: [1,2,34]

Output:
Logs the following to the console:
1
2
34
```

c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.


```
Input: [1,"Hi", true, {color: "green"}]

Output:
Logs the following to the console:
1 is a number
Hi is a string
true is a boolean
[object Object] is a object
*/

console.log('');
console.log('#5');

const forEachElem = (arr,callback) => {
    return arr,callbacks
}
