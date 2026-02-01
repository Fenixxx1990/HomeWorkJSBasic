const startBalance = 100;
const operations = [1000, -700, 300, -500, 10000];

function getBalance(startBalance, operations) {
  let balance = startBalance;
  for (let i = 0; i < operations.length; i++) {
    balance += operations[i];
  }
  return balance;
}

console.log(getBalance(startBalance, operations));

function minusBalance(startBalance, operations) {
  let balance = startBalance;
  for (let i = 0; i < operations.length; i++) {
    balance += operations[i];
    if (balance < 0) {
      return false; //`На счету недостаточно средств для проведения операции! ${operations[i]}`;
    }
  }
  return true;
}

console.log(minusBalance(startBalance, operations));

function avarage(operations) {
  let positive = 0;
  let negative = 0;
  let p = 0;
  let n = 0;
  for (const money of operations) {
    if (money > 0) {
      positive += money;
      p++;
    }
    if (money < 0) {
      negative += money;
      n++;
    }
  }
  return [positive / p, negative / n];
}

console.log(avarage(operations));

const numbers = [3, 7, 2, 9, 1];

// Ваш код здесь
let maxNumber = 0;
for (const el of numbers) {
  if (el > maxNumber) {
    maxNumber = el;
  }
}
console.log(maxNumber);
