function crypto(password) {
  let array = password.split("");
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  [array[1], array[array.length - 2]] = [array[array.length - 2], array[1]];
  array.reverse();
  array = array.concat(array.splice(2, -1));
  return array.join("");
}

console.log(crypto("password"));
console.log(crypto("drsswoap"));

function check(cryptoPass, password) {
  return crypto(cryptoPass) === password;
}

console.log(check("paowssrd", "password"));
