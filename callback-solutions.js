// // 1 )

function forEachElem(arr, callback) {
  //arr.forEach(el => callback(el));
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

// let arr = [1, 2, 3, 4, 5];
//
// forEachElem(arr, (el) =>  {
//   console.log(el);
// });

// 2 )

function logEachElem(arr) {
  forEachElem(arr, el => console.log(el));
};

// logEachElem(arr);

// // 3 )

function logArrTypes (arr){
  forEachElem(arr, el => console.log(el + " is a " + typeof el));
};

// let mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr);

// // 4)

function myMap(arr, callback) {
  let newArr = arr.map((el) => {
    return callback(el);
  });

  return newArr;
}

// let arr = [1, 2, 3, 4, 5];
//
// let result = myMap(arr, (el)=> {
//   return el * 2;
// });
//
// console.log(result);

// 5)

function allCaps (arr) {
  return myMap(arr, (el) => {
    return el.toUpperCase();
  });
};

// let arr = ['apple', 'banana', 'mango'];
// console.log(allCaps(arr));

// 6)

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

function shouldIBuyThis(balance, callback) {
  if (callback(balance)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
}

console.log(shouldIBuyThis(20, conservativeSpender));
