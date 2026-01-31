// Дан произвольный url вида - <https://purpleschool.ru/course/javascript>

// Нужно сделать функцию, которая выводит в консоль:

// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

function getUrl(url) {
  const [protocol, _, host, ...path] = url.split("/");
  if (protocol === "https:" || protocol === "http:") {
    if (!host.includes(".")) {
      return;
    }
    console.log(`Протоколо: ${protocol.split(":")[0]}`);
    console.log(`Доменное имя:  ${host}`);
    console.log(`Путь внутри сайта: ${path.join("/")}`);
  }
}

getUrl("https://purpleschool.ru/course/javascript");

let arr = ["1", "2", "3", "4"];
console.log(arr.slice(2, -1));
