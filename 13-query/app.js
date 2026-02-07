const query = {
  search: "Вася",
  take: 10,
};

// search=Вася&take=10

function getQuery(query) {
  const { search, take } = query;
  return `search=${search}&take=${take}`;
}

console.log(getQuery(query));
