const balance = 10000;
const bonusBalance = 1000;
const isBanned = false;
const isExist = false;
const isSelling = true;

console.log(
  (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling,
);

console.log((!"" && "Yes") || !("No" && "false"));
console.log(!"" && true && "Yes" && Boolean("true") && "PS");
console.log((true && "d") ?? "");
