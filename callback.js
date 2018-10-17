// //1.
// function forEachElem(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//   callback(arr[i]);
//   };
// };
//
//
// //2.
// function logEachElem (arr) {
//   forEachElem(arr, (el) => {
//     console.log(el);
//   });
// };
//
//
// //3.
// const logArrTypes = (arr) => {
// 	forEachElem(arr, (el) => {
// 		console.log(typeof el);
// 	});
// }
//
// //4.
//  function myMap (arr, callback) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]))
//   }
//   return result;
// };
//
// //5.
// const allCaps = (arr) => {
//  return myMap(arr, (el) => {
//    return el.toUpperCase();
//
//  });
// }
//
// let arr = ['f', 'f', 'b', 'h']
// console.log(allCaps(arr));

//6.

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
  if (callback(balance)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up";
  }
};

console.log(shouldIBuyThis(-10, horribleSaver))
