var valores = [true, 5, false, "hola", "adios", 2];

valores.forEach(function (elemento, i) {
  console.log(i, elemento);
});

//1 Determinar que texto es mayor
if (valores[3].length > valores[4].length) {
  console.log(valores[3] + " es mas granade.");
} else {
  console.log(valores[4] + " es mas granade.");
}

//2 Utilizando exclusivamente los dos valores booleanos del array
// OR y AND

console.log(valores[0] || valores[2]);
console.log(valores[0] && valores[2]);

//3 Cinco operaciones matematicas usando los elementos numericos
console.log(valores[1] + valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] / valores[5]);
console.log(valores[1] % valores[5]);
