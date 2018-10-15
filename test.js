

function conservativeSpender(balance)  {
  return balance > 100;
}

function liberalSpender(balance) {
  return balance > 10;
}

function horribleSaver (balance) {
  return balance > 0;
}

const shouldIBuyThis = (balance, callback) => {
  if (callback(balance)) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
}
console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"
