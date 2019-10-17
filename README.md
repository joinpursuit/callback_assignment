# Callback Exercises


## Question One

Write a function that takes in a callback and calls the callback

```
function caller (callback){
  callback()
}
function sayHello(){
  console.log("Hello!")
}
caller(sayHello)

```

## Question Two

Write a function that takes in a callback and a boolean.  If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

```
function callIfTrue(callback, boolean) {
  boolean ? callback() : console.log("Ignoring the callback")
}
callIfTrue(sayHello, false)
```


## Question Three

Write a function that takes in a callback and a number.  It should call the callback that many times.
```
const manyTimes = (callback, num) => {
    let i = 1
   
    while (i <= num){
    callback()
        i++
    }
    return 

}
manyTimes( () => console.log("Testing "), 4)

```

## Question Four

Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

```
const doubleCall = (num, cb1, cb2) => cb2(cb1(num))
console.log(doubleCall(4, (num) => num + 3, (num) => num * 2))

```


## Question Five

You are given the following functions:
```

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

```

Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
"Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

```

function shouldIBuyThis (balance, callback) {
  if (callback(balance)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up";
  }
};



```

## Question Six

a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

```
const forEachElem = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

```

b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.  Use `forEachElem` inside the body of your function.


```


```

c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.


```

```

## Question Seven

a. Write a function called `myMap` that takes in an array and a callback as arguments.  It should return a new array with the callback applied to each element in the array.

```



```


b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.

```


```

## Question Eight

a. Write a function called `myFilter` that takes in an array and a callback as arguments.  The callback should take in an element and return a boolean.  `myFilter` should return a new array with only values that return true when passed into the callback.

```
Input: [1,4,6,7, -3], num => num < 5

Output:  [1, 4, -3]
```

b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.

```
Input: [1,2,3,4,5,6,7,8,9]
Output: [1,3,5,7,9]
```

c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

```
Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

Output:
[ 'JavaScript',
  'high-level,',
  'interpreted',
  'programming',
  'language',
  'that',
  'conforms',
  'ECMAScript',
  'specification' ]
```

## Question Nine

[Callback questions from codewars](https://www.codewars.com/collections/callback)
