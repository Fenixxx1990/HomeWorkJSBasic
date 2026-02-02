function filterAndFormatDates(arr) {
  return arr
    .filter((str) => {
      const date = new Date(str);

      return !isNaN(date.getTime());
    })
    .map((str) => {
      const date = new Date(str);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    });
}

const input = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const result = filterAndFormatDates(input);
console.log(result);
