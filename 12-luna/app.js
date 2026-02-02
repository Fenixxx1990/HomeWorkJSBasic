let ourCard = "4561-2612-1234-5464";

function luna(card) {
  card = card.replaceAll("-", "");
  card = card.split("");
  card = card.map((num, i) =>
    i % 2 !== 0
      ? Number(num)
      : Number(num) * 2 <= 9
        ? Number(num) * 2
        : Number(num) * 2 - 9,
  );
  console.log(card);

  card = card.reduce((acc, num) => acc + num, 0);
  console.log(card);
  return card % 10 === 0;
}

console.log(luna(ourCard));
