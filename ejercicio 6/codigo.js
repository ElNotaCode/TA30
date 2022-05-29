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

//variables globales
var dni = prompt("Introduce tu dni:");
var letra = prompt("Introduce tu letra del dni:");
letra = letra.charAt(0).toUpperCase(); //pasamos la letra a mayus y nos quedamos con la primera introducida

//comprobamos que esté entre los numeros indicados
if (dni < 0 || dni > 99999999) {
  alert("El numero proporcionado no es válido.");
} else {
  //calculamos si la letra introducida es la misma que la letra deducida
  if (calcularLetra()) {
    alert("Letra correcta.");
  } else {
    alert("Letra incorrecta.");
  }
}

function calcularLetra() {
  let calcularLetra = letras[dni % 23];
  if (calcularLetra == letra) {
    return true;
  } else {
    return false;
  }
}
