let numbers = [];

for (let i = 1; i <= 5; i++) {
  let number = Number(prompt("Anna numero " + i + ":"));
  numbers.push(number);
}

console.log("Numbers:", numbers);

let searchNumber = Number(prompt("Minkä numeron haluat etsiä?"));

if (numbers.includes(searchNumber)) {
  console.log("Numero " + searchNumber + " löytyy taulukosta.");
} else {
  console.log("Numeroa " + searchNumber + " ei löydy taulukosta.");
}

numbers.pop();

console.log("Updated Numbers:", numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log("Sorted Numbers:", numbers);
