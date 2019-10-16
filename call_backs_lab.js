//1.
const call = (fn) => {
    return fn()
}
console.log(call(() => "hello"))
//2.
const booleanArguement = (callBack, booolean) => {
    if (boolean === true){
        return callBack()
    }else {
        return "Ignoring the Callback"
    }
}
booleanArguement(() => (" "), false)