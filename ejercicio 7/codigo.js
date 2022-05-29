var numero = prompt("Introduce un numero:");
var factorial = numero;

for (let i = 1; i < numero; i++) {
  factorial = factorial * i;
}

alert("El factorial de " + numero + " es " + factorial);
