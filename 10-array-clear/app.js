function deleteArrayValue(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      console.log(array[i]);
      array.splice(i, 1);
    }
  }
  return array;
}

const array = [0, 1, -4, 1000, -122, 22];

function notPositive(value) {
  return value < 0;
}

function isPositive(value) {
  return value > 0;
}

console.log(deleteArrayValue(array, notPositive));
console.log(deleteArrayValue(array, isPositive));
