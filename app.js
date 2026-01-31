function getCredit(age, isJobe = false) {
  if (age > 24 && isJobe) {
    return 500;
  } else if (age > 24) {
    return 100;
  } else {
    return 0;
  }
}

function canBuy(productPrice, age, isJobe, money) {
  return getCredit(age, isJobe) + money >= productPrice;
}

console.log(canBuy(2000, 20, true, 1500));

function a() {
  return c();
}
function b() {
  return "Yes";
}
function c() {
  return b;
}
a();

console.log(a());
