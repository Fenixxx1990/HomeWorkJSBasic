function convertation(summ, valuteFrom, valuteTo) {
  let valFrom;
  let valTo;
  switch (valuteFrom) {
    case "rub":
      valFrom = 1;
      break;
    case "usd":
      valFrom = 0.012;
      break;
    case "eur":
      valFrom = 0.01;
      break;
  }
  switch (valuteTo) {
    case "rub":
      valTo = 1;
      break;
    case "usd":
      valTo = 0.012;
      break;
    case "eur":
      valTo = 0.01;
      break;
  }
  return valFrom && valTo ? (summ / valFrom) * valTo : null;
}

console.log(convertation(100, "usd", "en"));
