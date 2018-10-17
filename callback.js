
//1- Write a function forEachElem that takes in an array and a callback. Call the callback on each element in the array.


      function forEachElem(arr, cb) {
      for(let i = 0; i < arr.length; i++) {
    cb(arr[i]);
   }
  }

//2- Create a function logEachElem that takes an array as an argument, and uses the forEachElem method to log each element of the array.


const logEachElem = (arr) => {
 forEachElem(arr, el => {
  console.log(el);
  })
}

// Create a function logArrTypes that uses the forEachElem method to log each array element followed by its type. For example:

let mixedArr = [1, 'cat', true];

const logArrType = (arr) => {
  forEachElem(arr, el => {
  console.log(`${el} is a ${typeof el}`)
  })
}

console.log(logArrType(mixedArr));


  // 4- Write a function myMap that takes in an array and a callback. Call the callback on each element of the array and add the result to an output array. Return the output array.

  const myMap = (arr, callback) => {
     let outputArr = [];
     forEachElem(arr, el => {
       outputtArr.push(cb(el))
     });
     return outputArr
  };
  //5- Create a function 'allCapsthat takes in an array as an argument, and uses themyMap` function to return all the elements capitalized.

  const allCapsthat = (arr) => {
    myMap(arr, el => {
      return el.toUpperCase
    });
  }
  // 6- you are given the following functions:

// function conservativeSpender(balance)  {
//   return balance > 100
// }

// function liberalSpender(balance) {
//   return balance > 10
// }

// function horribleSaver (balance) {
//   return balance > 0
// }

// Write a function shouldIBuyThis that takes in a balance and a callback (one of the above functions). The fuction should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

  const shouldIBuyThis = (balance , callback) => {
    if(callback(balance)){
      return 'Sure, i got the money';
    }
    return "Dont have the money, but TREAT YO SELF";
  }
