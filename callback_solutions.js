// 1
const forEachElem = (array, callback) => {
  for (let i = 0; i < array.length; i++) callback(array[i]);
};

// 2
const logEachElem = el => console.log(el);
forEachElem(array, logEachElem);

// 3
const logArrTypes = el => console.log(el + " is a " + typeof el);
forEachElem(array, logArrTypes);

// 4
const myMap = (array, callback) => {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) finalArr.push(callback(array[i]));
  return finalArr;
};

// 5
const allCaps = array => myMap(array, el => el.toUpperCase());

// 6
const shouldIBuyThis = (balance, callback) =>
  callback(balance)
    ? "Sure, I've got the money!"
    : "Nope! Gotta keep my savings up!";
