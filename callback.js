// # Callback Exercises

// 1. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.
const forEachElem = (arr, callback) => {
  arr.forEach(el => {
    callback(el);
  });
};
forEachElem(arr = [1,2,3,4,5], el => console.log(el));

// 2. Create a function logEachElem that takes an array as an argument, and uses the `forEachElem` method to log each element of the array.
const logEachElem = (arr) => {
  forEachElem(arr, el => {
    console.log(el);
});
};

// 3. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type. For example:

// ```js
// let mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr)
// // will log:
// // 1 is a number
// // 'cat' is a string
// // true is a boolean
// ```

const logArrTypes = (arr) => {
  forEachElem(arr, el => {
    console.log(el + " " + typeof(el));
  })
};
let mixedArr = [1, 'cat', true];
logArrTypes(mixedArr);

// 4. Write a function `myMap` that takes in an array and a callback. Call the callback on each element of the array and add the result
// to an output array. Return the output array.

const forEachElem = (arr, callback) => {
  arr.forEach(el => {
    callback(el);
  });
};

const myMap = (arr, callback) => {
  let outPut = [];
  forEachElem(arr, el =>
  outPut.push(callback(el)));
  return outPut;
  };

let newArr = myMap([3,4,5,6,7], (el) => {
    return el - 2;
  });
  console.log(newArr);

// 5. Create a function 'allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

const forEachElem = (arr, callback) => {
  arr.forEach(el => {
    callback(el);
  });
};

const myMap = (arr, callback) => {
  let outPut = [];
  forEachElem(arr, el =>
  outPut.push(callback(el)));
  return outPut;
  };

const allCaps = (arr) => {
	return myMap(arr, el =>{
		return el.toUpperCase();
	});
}

let arr = namesFamily = ["isa", "adia", "nadia","jonas", "ihovan", "gabriel", "julia", "fatima", "leo"];
console.log(allCaps(arr));

// 6. You are given the following functions:

// ```js
// function conservativeSpender(balance)  {
//   return balance > 100
// }

const conservativeSpender = (arr, el) => {
  return myMap(arr, el => {
    return el > 100;
  })
};
console.log(conservativeSpender([22,60,100,3,600,1]));
            /////[ false, false, false, false, true, false ]
// function liberalSpender(balance) {
//   return balance > 10
// }

const myMap = (arr, callback) => {
  let outPut = [];
  forEachElem(arr, el =>
  outPut.push(callback(el)));
  return outPut;
  };
const liberalSpender = (arr, el) => {
  return myMap(arr, el => {
    return el > 0; // this print out w/ Booleans.
  })
};
console.log(liberalSpender([200, 1, 100, 300, 60, 0, 1200]));
                //[ true, true, true, true, true, false, true ]

// function horribleSaver (balance) {
//   return balance > 0
// }

const forEachElem = (arr, callback) => {
  arr.forEach(el => {
    callback(el);
  });
};

const myMap = (arr, callback) => {
  let outPut = [];
  forEachElem(arr, el =>
  outPut.push(callback(el)));
  return outPut;
  };

const horribleSaver = (arr, el) => {
  return myMap(arr, el => {
    return el > 0; // this print out w/ Booleans.
  })
};
console.log(horribleSaver([200, 1, 100, 300, 60, 0, 1200]));
            // [ true, true, true, true, true, false, true ]

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The fuction should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
const shouldIBuyThis = (balance, callback) => {
   if(callback(balance)){
     return "Sure! I've got the money!";
   }else{
     return "Nope! Gotta keep my savings up!";
   }
}
// ```js
console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
//
