console.log(`# Callback Exercises`);

//## Question One
console.log('\n\n\n\n========================================\n## Question One\n===============');
console.log(`/*\n
Write a function that takes in a callback and calls the callback

'''
Input:
function() { console.log("Hello!") }

Output:
Logs "Hello!" to the console
'''
\n----------------------------------------\n\n`);

const caller = (callback) => callback()
caller(() => console.log(`Hello!`))

//## Question Two
console.log('\n\n\n\n========================================\n## Question Two\n===============');
console.log(`/*\n
Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

'''
Input:
() => console.log("")

'''
\n----------------------------------------\n\n`);

const booleanCall = (bool, callBack) => bool ? callBack() : console.log(`Ignoring the callback`);
booleanCall(true, () => console.log("Working!"))
booleanCall(false, () => console.log("Working!"))

//## Question Three
console.log('\n\n\n\n========================================\n## Question Three\n===============');
console.log(`/*\n
Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

'''
Input: 4, (num) => num + 3, (num) => num * 2

Output: 14

'''

\n----------------------------------------\n\n`);

const doubleCall = (num, cb1, cb2) => cb2(cb1(num))
console.log(doubleCall(4, (num) => num + 3, (num) => num * 2))

//## Question Four
console.log('\n\n\n\n========================================\n## Question Four\n===============');
console.log(`/*\n
You are given the following functions:
'''js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

'''

Write a function 'shouldIBuyThis' that takes in a balance and a callback (one of the above functions). The function should return either
"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

'''js
console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

'''
\n----------------------------------------\n\n`);

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

const shouldIBuyThis = (num, spender) => {
  if (spender(num)) return `Sure! I've got the money!`
  else return `Nope! Gotta keep my savings up!`
}

console.log(shouldIBuyThis(20, horribleSaver))
console.log(shouldIBuyThis(20, liberalSpender))
console.log(shouldIBuyThis(20, conservativeSpender))
console.log(shouldIBuyThis(101, conservativeSpender))

//## Question Five
console.log('\n\n\n\n========================================\n## Question Five\n===============');
console.log(`/*\n
a. Write a function 'forEachElem' that takes in an array and a callback. Call the callback on each element in the array.

'''
Input: [1,4,5,6], (elem) => console.log("$" + elem)

Output:
Logs the following to the console:
1
4
5
6
'''

b. Create a function 'logEachElem' that takes an array as an argument logs every element in the input array.  Use 'forEachElem' inside the body of your function.


'''
Input: [1,2,34]

Output:
Logs the following to the console:
1
2
34
'''

c. Create a function 'logArrTypes' that uses the 'forEachElem' method to log each array element followed by its type.


'''
Input: [1,"Hi", true, {color: "green"}]

Output:
Logs the following to the console:
1 is a number
Hi is a string
true is a boolean
[object Object] is a object
'''
\n----------------------------------------\n\n`);

const forEachElem = (array, callBack) => {
  for (let i of array) callBack(i)
}

const logEachElem = (array) => forEachElem(array, console.log)
// const logArrTypes = (array) => {
//   for (let i of array) console.log(i + ` is a `+ typeof i)
// }

const logArrTypes = (array) => forEachElem(array, (i) => console.log(i + ` is a `+ typeof i))

forEachElem([1,4,5,6], (elem) => console.log("$" + elem))
logEachElem([1,2,34])
logArrTypes([1,"Hi", true, {color: "green"}])

//## Question Six
console.log('\n\n\n\n========================================\n## Question Six\n===============');
console.log(`/*\n
a. Write a function called 'myMap' that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.

'''
Input: [3,5,6], function(num) { return num * 3 }

Output: [9, 15, 18]
'''


b. Create a function 'allCaps' that takes in an array as an argument, and uses the 'myMap' function to return all the elements capitalized.

'''
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
'''
\n----------------------------------------\n\n`);

const myMap = (array, callBack) => {
  let myMap = []
  for (let i of array) myMap.push(callBack(i))
  return myMap
}

const allCaps = (array) => myMap(array, (str) => str.toUpperCase())

console.log(myMap([3,5,6], function(num) { return num * 3 }));
console.log(allCaps(["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]));

//## Question Seven
console.log('\n\n\n\n========================================\n## Question Seven\n===============');
console.log(`/*\n
a. Write a function called 'myFilter' that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  'myFilter' should return a new array with only values that return true when passed into the callback.

'''
Input: [1,4,6,7, -3], num => num < 5

Output:  [1, 4, -3]
'''

b. Write a function called 'removeEvenNumbers' that takes in an array and returns an array with all the even numbers removed.

'''
Input: [1,2,3,4,5,6,7,8,9]
Output: [1,3,5,7,9]
'''

c. Write a function called 'removeShortWords' that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

'''
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
'''
\n----------------------------------------\n\n`);

const myFilter = (array, callBack) => {
  let myFilter = []
  for (let e of array) callBack(e) ? myFilter.push(e) : null
  return myFilter
}
const removeEvenNumbers = (array) => myFilter(array, num => num % 2 === 1)
const removeShortWords = (array) => myFilter(array, str => str.length >= 4)

console.log(myFilter([1,4,6,7, -3], num => num < 5))
console.log(removeEvenNumbers([1,2,3,4,5,6,7,8,9]));
console.log(removeShortWords(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))
