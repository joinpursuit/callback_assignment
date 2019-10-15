//1
const forEachElem = (arr, cb) => arr.forEach(el => cb(el));

//2
const logEachElem = arr => forEachElem(arr, el => console.log(el));
let arr2 = [1, 2, 3];
logEachElem(arr2);

//3
const logArrTypes = arr => forEachElem(arr, el => console.log(typeof el));
let mixedArr = [1, 'cat', true];
logArrTypes(mixedArr);

//4
let arr4 = ['A', 'B', 'C', 'D', 'E'];
let outputArr = [];
const myMap = (arr, cb) => (outputArr = arr.map(el => cb(el)));
myMap(arr4, el => (el += el.toLowerCase()));
console.log(outputArr);

//5
let arr5 = ['Mateo', 'Navarrete', 'Shea', 'Gillet'];
const allCaps = arr => myMap(arr, el => el.toUpperCase());
allCaps(arr5);
console.log(5, arr5, outputArr);

//6
function conservativeSpender(balance) {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver(balance) {
  return balance > 0;
}

const shouldIBuyThis = (balance, spender) =>
  spender(balance)
    ? "Sure! I've got the money!"
    : 'Nope! Gotta keep my savings up!';

console.log(shouldIBuyThis(20, horribleSaver));
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender));
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender));
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender));
// logs: "Sure! I've got the money!"
