let numbers = [];

let input = prompt("Anna numero tai kirjoita done lopettaaksesi:");

while (input !== "done") {
  let number = Number(input);
  numbers.push(number);

  input = prompt("Anna numero tai kirjoita done lopettaaksesi:");
}

let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById("tulos").innerHTML =
    "Parilliset numerot: " + evenNumbers.join(", ");
} else {
  document.getElementById("tulos").innerHTML =
    "Parillisia numeroita ei annettu.";
}

console.log("Ohjelma päättyi.");
