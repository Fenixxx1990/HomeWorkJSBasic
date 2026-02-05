"use strict";

const company = {
  name: "ООО Агро",
  getName() {
    console.log(this.name);
  },
  employeea: [
    {
      name: "Света",
      getName() {
        console.log(this.name);
      },
    },
  ],
  ceo: {
    name: "Вася",
    getName() {
      console.log(this.name);
    },
  },
};

company.getName();
company.ceo.getName();
company.employeea.map((employ) => employ.getName());

let a = {
  c: 1,
  b: () => {
    console.log(this.c);
  },
};
a.b();

// Функция‑конструктор, создающая объект с приватной переменной через замыкание
function createCounter() {
  // Приватная переменная (доступна только внутри этой функции)
  let privateCount = 0;

  // Возвращаем объект с методами для работы с приватной переменной
  return {
    // Метод для получения текущего значения
    getValue: function () {
      return privateCount;
    },

    // Метод для изменения значения
    setValue: function (newValue) {
      if (typeof newValue === "number" && newValue >= 0) {
        privateCount = newValue;
      } else {
        console.log("Ошибка: значение должно быть неотрицательным числом");
      }
    },
  };
}

// Создаём экземпляр счётчика
const counter = createCounter();

// Демонстрируем работу с приватной переменной через методы
console.log(counter.getValue()); // 0 (начальное значение)

counter.setValue(5);
console.log(counter.getValue()); // 5 (изменённое значение)

// Показываем, что приватная переменная недоступна напрямую
console.log(counter.privateCount); // undefined (прямого доступа нет)

// Дополнительная проверка: попытка изменить через прямое обращение не сработает
counter.privateCount = 10;
console.log(counter.getValue()); // 5 (значение осталось прежним)

function asd() {
  console.log(this);
}

asd();
