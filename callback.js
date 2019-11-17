////////////////##Question One
function isCaller(callback) {
    callback()
}

function sayHello() {
    console.log("Hello!")
}
isCaller(sayHello);


////////////////##Question Two
const ignoreCallback = (callback, boolean) => {
    if (boolean === true) {
        ignoreCallback();
    } else {
        console.log("Ignore the callback")
    }
}
ignoreCallback(console.log("", true));
ignoreCallback(console.log("Testing", false));


/////////////////Question Three

const caller = (callback, num) => {

}