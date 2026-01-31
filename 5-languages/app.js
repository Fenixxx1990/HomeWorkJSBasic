const language = prompt("Введите название языка");
switch (language.toLocaleLowerCase()) {
  case "русский":
    alert("Привет!");
    break;
  case "английский":
    alert("Hello!");
    break;
  case "испанский":
    alert("Hola!");
    break;
  case "немецкий":
    alert("Hallo!");
    break;
  case "французский":
    alert("Bonjour!");
    break;
  default:
    alert("Я не знаю этого языка!");
}
