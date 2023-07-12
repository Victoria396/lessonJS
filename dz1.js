// сделать с помощью Set уникализацию массива объектов
const names = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const namesUniq = Array.from(
  new Set(names.map((item) => JSON.stringify(item)))
).map((item) => JSON.parse(item));

console.log(namesUniq);
