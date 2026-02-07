function filterAndFormatDates(arr) {
  return arr
    .filter((str) => {
      // Проверяем, соответствует ли строка одному из форматов
      const regex = /^(\d{1,2})([-\/])(\d{1,2})\2(\d{4})$/;
      const match = str.match(regex);
      if (!match) return false;

      const [, part1, separator, part2, yearStr] = match;
      const year = Number(yearStr);

      let month, day;

      if (separator === "/") {
        // Формат MM/DD/YYYY: первая часть — месяц, вторая — день
        month = Number(part1);
        day = Number(part2);
      } else {
        // separator === '-'
        // Формат DD-MM-YYYY: первая часть — день, вторая — месяц
        day = Number(part1);
        month = Number(part2);
      }

      // Базовая валидация диапазона
      if (month < 1 || month > 12) return false;
      if (day < 1 || day > 31) return false;

      // Создаём Date и проверяем, что дата валидна
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    })
    .map((str) => {
      const regex = /^(\d{1,2})([-\/])(\d{1,2})\2(\d{4})$/;
      const match = str.match(regex);
      const [, part1, separator, part2, year] = match;

      let day, month;
      if (separator === "/") {
        // MM/DD/YYYY → берём месяц из part1, день из part2
        month = part1;
        day = part2;
      } else {
        // DD-MM-YYYY → берём день из part1, месяц из part2
        day = part1;
        month = part2;
      }

      // Нормализуем до двух цифр
      day = day.padStart(2, "0");
      month = month.padStart(2, "0");

      return `${day}-${month}-${year}`;
    });
}

// Пример использования
const input = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const result = filterAndFormatDates(input);
console.log(result); // ['10-02-2022', '12-11-2023']
