//1.
const call = (fn) => {
    return fn()
}
console.log(call(() => "hello"))
//2.
const booleanArguement = (callBack, booolean) => {
    if (booolean === true){
        return callBack()
    }else {
        return "Ignoring the Callback"
    }
}
booleanArguement(() => (" "), false)
//3.
const repeatFunction = (cb,num) => {
   for (let i = 1; i <= num; i++) {
    (cb())
}
}
repeatFunction(() => console.log("hello"), 6)