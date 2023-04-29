// llamamos a la pantalla y todos los botones en una variable
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});

// const pantalla = document.querySelector(".pantalla");- Esto crea una variable constante
//  pantallaque contiene una referencia a un elemento HTML con la clase .pantalla.
//  Utiliza el document.querySelectormétodo para encontrar el elemento en el documento HTML.

// const botones = document.querySelectorAll(".btn");- Esto crea una variable
//  constante botonesque contiene una colección de elementos HTML con la clase .btn.
//  Utiliza el document.querySelectorAllmétodo para encontrar todos los elementos con la
//  .btnclase en el documento HTML.

//  botones.forEach(boton => {...})- Esto itera a través de cada
//   elemento de la botonescolección y aplica la función dentro de las llaves a cada elemento.

// boton.addEventListener("click", () => {...})- Esto adjunta un detector
//  de eventos de clic a cada botonelemento de la botonescolección. Cuando
//   se hace clic en el botón, se ejecutará la función dentro de las llaves.

// const botonApretado = boton.textContent;- Esto crea una variable constante botonApretadoque
// contiene el contenido de texto del botonelemento en el que se hizo clic.

// if (boton.id === "c") {...}- Esto verifica si el botonelemento en el que se hizo clic tiene un
//  idatributo con el valor de "c". Si es verdadero, establece el pantallacontenido del texto
//   en "0" y regresa de la función.

// if (boton.id === "borrar") {...}- Esto verifica si el botonelemento en el que se hizo clic
//    tiene un idatributo con el valor de "borrar". Si es verdadero, comprueba si el pantallacontenido
//     del texto tiene una longitud de 1 o es igual a "¡Error!". Si es verdadero, establece el pantallacontenido
//      del texto en "0". Si es falso, elimina el último carácter del pantallacontenido del texto y actualiza el
//       contenido del texto.

// if (boton.id === "igual") {...}- Esto verifica si el botonelemento en el que se hizo clic tiene un
//  idatributo con el valor de "igual". Si es verdadero, utiliza la evalfunción para evaluar la expresión
//   en el pantallacontenido del texto. Si la evaluación es exitosa, actualiza
//  el pantallacontenido del texto con el resultado. Si ocurre un error durante
//   la evaluación, establece el pantallacontenido del texto en "¡Error!".

//   if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {...}- Esto comprueba si el pantallacontenido
//    del texto es actualmente "0" o "¡Error!". Si es verdadero,establece el pantallacontenido del texto en el botonApretadovalor.
//    Si es falso, agrega el botonApretadovalor al pantallacontenido del texto.
