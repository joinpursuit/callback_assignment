
let arr = [1, 2, 3]
//
//1
function forEachElem(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

forEachElem([1, 2, 3], (el) => {
  console.log(el);
})

//2
function logEachElem(arr, callback) {
  forEachElem(arr)
}

//3
function logArrTypes(arr) {
  forEachElem(arr, function(el) {
    console.log( el + ' is a ' + typeof el )
  })
} return logArrTypes(arr)

//4
function myMap(arr, callback) {
  let output = []
  forEachElem(arr, function(el) {
    output.push( el + ' is a ' + typeof el )
  })
} return (arr + output)

//5
  let newArr = ["a", "b", "c"]
  let output = [];
  function allCaps(newArr, callback) {
  myMap(newArr, function(el) {
  output.push.toUpperCase( el )
})
}
return output;
console.log(output);


//6

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

 function shouldIBuyThis(balance , callback) {

 }
