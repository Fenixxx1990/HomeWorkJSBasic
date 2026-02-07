"use strict";
const buttons = document.querySelectorAll(".button");
const inputs = document.querySelectorAll(".input");
const panels = document.querySelectorAll(".panel");

if (buttons.length === 0 || inputs.length < 2 || panels.length < 3) {
  throw new Error("Критическая ошибка: не все DOM‑элементы найдены.");
}

function takeValues(inputs) {
  const a = Number(inputs[0].value);
  const b = Number(inputs[1].value);

  // Проверка, что оба значения — корректные числа
  if (isNaN(a) || isNaN(b)) {
    console.warn(
      "Одно из значений не является числом. Введите корректные числа.",
    );
    inputs[0].value = "";
    inputs[1].value = "";
    return null; // Или можно бросить ошибку: throw new Error("Некорректный ввод")
  }

  inputs[0].value = "0";
  inputs[1].value = "0";
  return [a, b];
}

function writeValue(sign, res, a, b) {
  panels[2].textContent = `${a} ${sign} ${b} = ${res}`;
}

function addition() {
  const values = takeValues(inputs);
  const res = values[0] + values[1];
  writeValue("+", res, values[0], values[1]);
}

function division() {
  const values = takeValues(inputs);
  if (!values) return; // Если takeValues вернул null — выходим

  const [a, b] = values;

  if (b === 0) {
    console.error("Деление на ноль невозможно.");
    panels[2].textContent = "Ошибка: деление на ноль";
    return;
  }

  const res = a / b;
  writeValue("/", res, a, b);
}

function subtraction() {
  const values = takeValues(inputs);
  const res = values[0] - values[1];
  writeValue("-", res, values[0], values[1]);
}

function multiplication() {
  const values = takeValues(inputs);
  const res = values[0] * values[1];
  writeValue("*", res, values[0], values[1]);
}
