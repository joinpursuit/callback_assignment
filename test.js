function conservativeSpender(balance) {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}
function shouldIBuyThis(balance,callback) {
  if (callback(balance)){
  return 'sure I got money'
} else {
  return 'nope, gotta keep my saving up'
}
}
console.log(shouldIBuyThis(1000,horribleSaver));
console.log(shouldIBuyThis(9,liberalSpender));
console.log(shouldIBuyThis(99,conservativeSpender));
