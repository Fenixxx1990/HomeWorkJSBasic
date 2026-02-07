"use strict";

// function submitForm() {
//   const input = document.querySelector(".input").value;
//   console.log(input);
//   if (!input) {
//     return;
//   }
//   document.querySelector(".panel").innerText = input;
//   document.querySelector(".input").value = "";
//   document.querySelector(".notification").classList.add("notification_active");
//   const textString = JSON.stringify({ text: input });
//   localStorage.setItem("text", textString);
//   // console.log(document.querySelector(".notification").getAttribute("class"));
//   // document.querySelector(".notification").setAttribute("key", "1");
//   // console.log(document.querySelector(".notification").getAttribute("key"));
// }

// function inputChanged(e) {
//   if (e.code == "Enter") {
//     submitForm();
//   }
// }
// const pannelText = "Панель";
// const buttonText = "Кнопка";
// const newElement = document.createElement("div");
// newElement.setAttribute("user-id", "1");
// newElement.classList.add("panel");
// // newElement.innerText = "Click me";
// newElement.innerHTML = `<button class="button">${buttonText}</button>`;
// document.querySelector(".panel").appendChild(newElement);
// document.querySelector(".test").appendChild(newElement);

// localStorage.setItem("token", "value");
// localStorage.setItem("token", "valueasda");
// localStorage.setItem("token2", "valasdfue");

// console.log(localStorage.getItem("token"));
// console.log(localStorage.getItem("key"));
// console.log(localStorage.getItem("token2"));
// localStorage.clear();

// const object = JSON.parse('{"name": "Vlad", "age": 20}');

// console.log(object);

// const str = JSON.stringify(object);

// console.log(str);
function exercise() {
  const button = document.querySelector(".toggle-btn");
  const element = document.querySelector(".content");
  const input = document.querySelector(".input");
  if (!button || !element) {
    return;
  }
  input.addEventListener("keydown", (e) => {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      const inputValue = input.value;
      if (!inputValue) {
        return;
      }
      element.textContent = inputValue;
      input.value = "";
    }
  });
}
exercise();
localStorage.removeItem;
