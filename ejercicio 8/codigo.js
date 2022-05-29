//al inciar la web se ejecuta esto
preguntar();

//creamos la funcion preguntar para inicializar una variable de bloque let
function preguntar() {
  let numero = prompt("Introduce un numero entero:");

  if (numero > 0) {
    comprobarParImpar(numero);
  } else {
    preguntar();
  }
}

function comprobarParImpar(numero) {
  if (numero % 2 == 0) {
    alert("Es par.");
  } else {
    alert("Es impar.");
  }
}
