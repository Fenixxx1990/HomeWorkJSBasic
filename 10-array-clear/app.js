function deleteArrayValue(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [0, 1, -4, 1000, -122, 22];

function notPositive(value) {
  return value <= 0;
}

function isPositive(value) {
  return value >= 0;
}

console.log(deleteArrayValue(array, notPositive));
console.log(deleteArrayValue(array, isPositive));
