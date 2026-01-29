const addressLat = 10;
const addressLong = 25;
const positionLat = 50;
const positionLong = 80;

const result = Math.sqrt(
  (positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2,
);

console.log(result);
