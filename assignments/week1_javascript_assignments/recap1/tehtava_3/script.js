let a = Number(prompt("Anna kolmion ensimmäisen sivun pituus:"));
let b = Number(prompt("Anna kolmion toisen sivun pituus:"));
let c = Number(prompt("Anna kolmion kolmannen sivun pituus:"));

let tulos;

if (a <= 0 || b <= 0 || c <= 0) {
  tulos = "Sivujen pitää olla positiivisia.";
} else if (a + b <= c || a + c <= b || b + c <= a) {
  tulos = "Näillä pituuksilla ei voi muodostaa kolmiota.";
} else if (a === b && b === c) {
  tulos = "Kolmio on tasasivuinen.";
} else if (a === b || a === c || b === c) {
  tulos = "Kolmio on tasakylkinen.";
} else {
  tulos = "Kolmio on erisivuinen.";
}

document.getElementById("tulos").innerHTML = tulos;
