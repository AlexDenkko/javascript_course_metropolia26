let x1 = Number(prompt("Anna pisteen A x-koordinaatti:"));
let y1 = Number(prompt("Anna pisteen A y-koordinaatti:"));

let x2 = Number(prompt("Anna pisteen B x-koordinaatti:"));
let y2 = Number(prompt("Anna pisteen B y-koordinaatti:"));

let xErotus = x2 - x1;
let yErotus = y2 - y1;

let etaisyys = Math.sqrt(xErotus * xErotus + yErotus * yErotus);

document.getElementById("tulos").innerHTML =
  "Pisteiden välinen etäisyys on: " + etaisyys;
