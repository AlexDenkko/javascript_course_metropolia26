let celsius = Number(prompt("Anna lämpötila Celsius-asteina:"));

let fahrenheit = (celsius * 9) / 5 + 32;

let kelvin = celsius + 273.15;

document.getElementById("tulos").innerHTML =
  "Celsius: " +
  celsius +
  " °C<br>" +
  "Fahrenheit: " +
  fahrenheit +
  " °F<br>" +
  "Kelvin: " +
  kelvin +
  " K";
