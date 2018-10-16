// 1
const forEachElem = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
// const forEachElem = (array, callback) => array.forEach(el => callback(el));

// 2
const logEachElem = array => forEachElem(array, el => console.log(el));

// 3
const logArrTypes = array => forEachElem(array, el => console.log(el + " is a " + typeof el));

// 4
const myMap = (array, callback) => {
  let finalArr = [];
  // for (let i = 0; i < array.length; i++) finalArr.push(callback(array[i]));
  forEachElem(array, el => finalArr.push(callback(el)));
  return finalArr;
};

// 5
const allCaps = array => myMap(array, el => el.toUpperCase());

// 6
const shouldIBuyThis = (balance, callback) =>
  callback(balance)
    ? "Sure, I've got the money!"
    : "Nope! Gotta keep my savings up!";
