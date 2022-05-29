//se ejecuta la función al iniciar el codigo
registrarFrase();

function registrarFrase() {
  let frase = prompt("Escribe una frase en mayus, mius o ambas:");

  checkearFrase(frase);
}

function checkearFrase(frase) {
  let fraseUpper = frase.toUpperCase();
  let fraseLower = frase.toLowerCase();

  if (frase == fraseUpper) {
    alert("La frase está en MAYUS.");
  } else if (frase == fraseLower) {
    alert("La frase está en minus.");
  } else {
    alert("La frase contiene MAYUS y minus.");
  }
}
