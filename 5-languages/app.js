const language = prompt("Введите название языка");
switch (language.toLocaleLowerCase()) {
  case "ru":
    console.log("Привет!");
    break;
  case "en":
    console.log("Hello!");
    break;
  case "es":
    console.log("Hola!");
    break;
  case "de":
    console.log("Hallo!");
    break;
  case "fr":
    console.log("Bonjour!");
    break;
  default:
    console.log("Я не знаю этого языка!");
}
