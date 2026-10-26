let numero = Number(prompt("Mihin asti haluat kertotaulun?"));

let tulos = "<h2>Kertotaulu</h2>";

for (let i = 1; i <= numero; i++) {
  for (let j = 1; j <= numero; j++) {
    tulos += i * j + " ";
  }

  tulos += "<br>";
}

document.getElementById("tulos").innerHTML = tulos;
