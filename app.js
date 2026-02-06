"use strict";

// const userInfo = {
//   balance: 0,
//   operations: 0,
//   increase(sum) {
//     this.balance += sum;
//     this.operations++;
//   },
// };

// function user() {
//   const userObj = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//       this.balance += sum;
//       this.operations++;
//     },
//   };
//   return function () {
//     return userObj;
//   };
// }

// const user1 = user();
// user1().increase(100);
// user1().increase(200);
// console.log(user1());
// const user2 = user();
// user2().increase(100);
// console.log(user2());

const calculator = {
  total: 0,
  addValues(a, b, c) {
    return this.total + a + b + c;
  },
};

// Другой объект для применения метода
const processor = {
  total: 100,
};

// Массив аргументов
const values = [8, 12, 20];

// Ваш код здесь - используйте apply для вызова метода
const calc = calculator.addValues;
console.log(calc.apply(processor, values));
console.log(calc.apply(calculator, values));
