let numero = Number(prompt("Anna positiivinen kokonaisluku:"));

let summa = 0;

for (let i = 1; i <= numero; i++) {
  summa = summa + i;
}

document.getElementById("tulos").innerHTML = "Lukujen summa on: " + summa;
