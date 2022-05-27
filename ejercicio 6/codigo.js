var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

var dni = prompt("Introduce tu dni:");

if (dni < 0 || dni > 99999999) {
  alert("El numero proporcionado no es válido.");
} else {
  calcularLetra();
}

function calcularLetra() {
  var numeroLetra = dni % 23;

  var letra = letras[numeroLetra];
  alert("Tu letra es: " + letra);
}
