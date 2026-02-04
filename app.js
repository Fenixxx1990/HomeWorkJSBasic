// const warehouse = {
//   goods: [],
//   findGoodById(id) {
//     return this.goods.find((good) => good.id === id) || "Такого товара нет";
//   },
//   addGood(good) {
//     if (this.findGoodById(good.id) !== "Такого товара нет") {
//       console.log("Такой товар уже есть на складе");
//       return false;
//     } else {
//       this.goods.push(good);
//       return true;
//     }
//   },
//   getWeightKg() {
//     return this.goods.reduce((acc, good) => acc + (good?.weight?.kg || 0), 0);
//   },
// };

// // товары

// const car = {
//   id: 1,
//   weight: {
//     kg: 1000,
//   },
//   brand: "Ford",
// };

// const chair = {
//   id: 2,
//   weight: {
//     kg: 2,
//   },
// };

// const paper = {
//   id: 3,
//   color: "red",
// };

// console.log(warehouse.addGood(car));
// console.log(warehouse.addGood(chair));
// console.log(warehouse.addGood(paper));
// console.log(warehouse.addGood(paper));
// console.log(warehouse.findGoodById(1));
// console.log(warehouse.findGoodById(2));
// console.log(warehouse.findGoodById(3));
// console.log(warehouse.getWeightKg());
// console.log(warehouse);

const obj = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  getInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  },
};

console.log(obj.getInfo());

for (const key of Object.keys(obj)) {
  console.log(key);
}
