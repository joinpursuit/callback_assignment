/*
//Question 1

const forEachElem = (arr,callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback (arr[i]);
  }
};

//Question 2

const logEachElem = ((arr) => {
  console.log(arr);
});

const forEachElem = (arr,callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback (arr[i]);
  }
};

let arr = [1,2,3]
forEachElem(arr,logEachElem);


//Question 3

const logArrTypes = ((el) => {
    console.log(el + " is a " + typeof el);
});

const forEachElem =(arr,callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
let arr = ["a",1,true];
forEachElem(arr,logArrTypes);


//Question 4

const myMap = (arr,callback) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
};


//Question 5

const allCaps = ((el) => {
  console.log(el.toUpperCase());
});

const myMap = (arr,callback) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
};

let arr =["2","a","d"];
myMap(arr,allCaps);

*/

//Question 6

const shouldIBuyThis = ((bal, callback) => {
  if (callback(bal)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
});

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver(balance) {
  return balance > 0;
};

console.log(shouldIBuyThis(20, horribleSaver));
console.log(shouldIBuyThis(20, liberalSpender));
console.log(shouldIBuyThis(101, conservativeSpender));
console.log(shouldIBuyThis(20, conservativeSpender));
