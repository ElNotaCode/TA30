//se ejecuta la función al iniciar el codigo
registrarFrase();

function registrarFrase() {
  let frase = prompt("Escribe una frase en mayus, mius o ambas:");

  checkearFrase(frase);
}

function checkearFrase(frase) {
  //quitamos los espacios
  frase = frase.replace(/\s+/g, "");

  //le damos la vuelta
  let fraseInversaArray = Array.from(frase);
  fraseInversaArray.reverse();

  let fraseInversaString = fraseInversaArray.join("");

  console.log(fraseInversaString);
  console.log(frase);

  //comparamos
  if (fraseInversaString == frase) {
    alert("Es palindromo");
  } else {
    alert("No es palindromo.");
  }

  //avisamos al usuario
}
