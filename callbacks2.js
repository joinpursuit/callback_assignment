console.log('question1');

function sayHello() {
}

console.log('Hello!');

console.log('question2');
let ages = [3, 10, 21, 37];
function checkAdult(ages) {
  return ages >= 18;
}

function myFunction() {
}
console.log(ages.some(checkAdult));
console.log('question3');

function combine(int1, callBack1, callBack2) {
  let num1 = 0;
  let num2 = 0;
  num1 = addNum(int1);
  num2 = multNum(num1);
  console.log(num2);
}

function addNum(int1) {
  let result1 = int1 + 3;
  return result1;
}

function multNum(int1) {
  let result2 = int1 * 2;
  return result2;
}

combine(4, addNum, multNum);

console.log('question4');

function shouldIBuyThis(balance, callback4) {
  let money = balance;
  let statement = callback4(money);

  if (statement) {
    console.log('sure i got money');
  } else {
    console.log('im broke');
  }
}

shouldIBuyThis(9, conservativeSpender);

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver(balance) {
  return balance > 0;
}

console.log('question5a');
function forEachElem(arry, callback) {
  for (let i = 0; i < arry.length; i++) {
    callback(arry[i]);
  }
}

function logDollarFormattedNum(numx) {
  console.log('$' + numx);
}

let arry = [1, 4, 5, 6];
forEachElem(arry, logDollarFormattedNum);
console.log('question5b');
function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {

    callback(arr[i]);
  }
}

function logValue(num) {
  console.log(num);
}

let arr = [1, 2, 34];

forEachElem(arr, logValue);

console.log('question5c');
function forEachElem2(arrc, typeOfElem) {
  for (let i = 0; i < arrc.length; i++) {

    callback(arrc[i]);
  }
}

let arrc = [1, 'Hi', true, { color : 'green' }];

function typeOf(element) {
  console.log(element);
}

myMaps(arrc, typeOf);

console.log('question 6');
let arr6 = [3, 5, 6];
function myMaps(arr6, callback) {
  let output6 = [];
  for (let i = 0; i < arr6.length; i++) {
    let callbackReturnVal = callback(arr6[i]);
    output6.push(callbackReturnVal);
  }

  return output6;
}

let returnVal = myMaps(arr6, (num6) => {return (num6 * 3)}
);
console.log(returnVal);

console.log('question 6b');

let arr6b = ["The", "internet", "is", "not", "a", "big", "truck.",
"It's", "a", "series", "of", "tubes"];
let allCaps = arr6b.map(function(i) { return i.toUpperCase();}
);
console.log(allCaps);

console.log('question7a');

let arr7a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filtered = arr7a.filter((a, i) => i % 2 === 0);
console.log(filtered);

console.log('question 7c');
let arr7c =["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

function removeShortWords(arr7c) {
 let longChOutput = [];
 for (let i = 0; i < arr7c.length; i++) {
   if (arr7c[i].length >= 4)
   longChOutput.push(arr7c[i]);
 }

 return longChOutput;
}

console.log(removeShortWords(arr7c));
