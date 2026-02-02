// function power(num) {
//   return function (pow) {
//     return num ** pow;
//   };
// }

// const power = (pow) => (num) => num ** pow;

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfTrhee = power(3);
// console.log(powerOfTrhee(5));

// console.log(power(5)(4));

function createValidator(validatorFn) {
  return (element) => validatorFn(ele) || null;
}

// Тестовые функции-валидаторы
const isPositive = function (num) {
  return num >= 0 ? num : null;
};

const isNonEmptyString = function (str) {
  return str && typeof str === "string" ? str : null;
};

// Тестирование
const positiveValidator = createValidator(isPositive);
const stringValidator = createValidator(isNonEmptyString);

console.log(positiveValidator(5));
console.log(positiveValidator(-3));
console.log(stringValidator("hello"));
console.log(stringValidator(""));
