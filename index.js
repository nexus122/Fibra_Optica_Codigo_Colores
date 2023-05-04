/* Tipos de cable */
let cableInfo = [
  [32, 4, 8, 0],
  [48, 6, 8, 1],
  [64, 8, 8, 2],
  [96, 12, 8, 3],
  [128, 16, 8, 4],
  [256, 16, 16, 5],
  [512, 16, 32, 6],
  [144, 18, 8, 7],
  [288, 18, 16, 8],
];

let cables = [
  "32 F.O PKP",
  "48 F.O PKP",
  "64 F.O PKP",
  "96 F.O PKP",
  "128 F.O PKP",
  "256 F.O PKP",
  "512 F.O PKP",
  "144 F.O Francia",
  "288 F.O Francia",
];

/* En ingles para el color */
let tubeColorInfo = [
  ["white", "red", "blue", "green"], // 32
  ["white", "white", "red", "red", "blue", "blue"], // 48
  ["white", "white", "red", "red", "blue", "blue", "green", "green"], // 64
  [
    "white",
    "white",
    "white",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
  ], // 96
  [
    "white",
    "red",
    "blue",
    "green",
    "white",
    "white",
    "white",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
  ], // 128
  [
    "white",
    "red",
    "blue",
    "green",
    "white",
    "white",
    "white",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
  ], // 258
  [
    "white",
    "red",
    "blue",
    "green",
    "white",
    "white",
    "white",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
  ], // 512
  [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "white",
    "orange",
    "grey",
    "brown",
    "black",
    "cyan",
    "pink",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "white",
  ], // 144 F.O Francia
  [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "white",
    "orange",
    "grey",
    "brown",
    "black",
    "cyan",
    "pink",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "white",
  ], // 288 F.O Francia
];

let fibraColorInfo = [
  ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 32
  ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 48
  ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 64
  ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 96
  ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 128
  [
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "purple",
    "brown",
    "orange",
    "white",
    "black",
    "pink",
    "cyan",
    "white",
    "yellow",
    "orange",
    "pink",
  ], // 256
  [
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "purple",
    "brown",
    "orange",
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "purple",
    "white",
    "orange",
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "purple",
    "white",
    "orange",
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "purple",
    "white",
    "orange",
  ], // 512
  ["red", "blue", "green", "yellow", "purple", "white", "orange", "grey"], // 144 Francia
  [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "white",
    "orange",
    "grey",
    "brown",
    "black",
    "cyan",
    "pink",
    "red",
    "blue",
    "green",
    "yellow",
  ], // 288 Francia
];

/* En español para las frases */
let espTubeColorInfo = [
  ["Blanco", "Rojo", "Azul", "Verde"], // 32
  ["Blanco", "Blanco", "Rojo", "Rojo", "Azul", "Azul"], // 48
  ["Blanco", "Blanco", "Rojo", "Rojo", "Azul", "Azul", "Verde", "Verde"], // 64
  [
    "Blanco",
    "Blanco",
    "Blanco",
    "Rojo",
    "Rojo",
    "Rojo",
    "Azul",
    "Azul",
    "Azul",
    "Verde",
    "Verde",
    "Verde",
  ], // 96
  [
    "Blanco",
    "Rojo",
    "Azul",
    "Verde",
    "Blanco",
    "Blanco",
    "Blanco",
    "Rojo",
    "Rojo",
    "Rojo",
    "Azul",
    "Azul",
    "Azul",
    "Verde",
    "Verde",
    "Verde",
  ], // 128
  [
    "Blanco",
    "Rojo",
    "Azul",
    "Verde",
    "Blanco",
    "Blanco",
    "Blanco",
    "Rojo",
    "Rojo",
    "Rojo",
    "Azul",
    "Azul",
    "Azul",
    "Verde",
    "Verde",
    "Verde",
  ], // 258
  [
    "Blanco",
    "Rojo",
    "Azul",
    "Verde",
    "Blanco",
    "Blanco",
    "Blanco",
    "Rojo",
    "Rojo",
    "Rojo",
    "Azul",
    "Azul",
    "Azul",
    "Verde",
    "Verde",
    "Verde",
  ], // 512
  [
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Violeta",
    "Blanco",
    "Naranja",
    "Gris",
    "Marron",
    "Negro",
    "Turquesa",
    "Rosa",
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Violeta",
    "Blanco",
  ], // 144 Francia
  [
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Violeta",
    "Blanco",
    "Naranja",
    "Gris",
    "Marron",
    "Negro",
    "Turquesa",
    "Rosa",
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Violeta",
    "Blanco",
  ], // 288 Francia
];

let espFibraColorInfo = [
  ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 32
  ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 48
  ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 64
  ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 96
  ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 128
  [
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Gris",
    "Violeta",
    "Marron",
    "Naranja",
    "Blanco",
    "Negro",
    "Rosa",
    "Cyan",
    "Blanco",
    "Amarillo",
    "Naranja",
    "Rosa",
  ], // 256
  [
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Gris",
    "Violeta",
    "Marron",
    "Naranja",
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Gris",
    "Violeta",
    "Blanco",
    "Naranja",
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Gris",
    "Violeta",
    "Blanco",
    "Naranja",
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Gris",
    "Violeta",
    "Blanco",
    "Naranja",
  ], // 512
  ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco", "Naranja", "Gris"], // 144 Francia
  [
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Violeta",
    "Blanco",
    "Naranja",
    "Gris",
    "Marron",
    "Negro",
    "Turquesa",
    "Rosa",
    "Roja",
    "Azul",
    "Verde",
    "Amarillo",
  ], // 288 Francia
];

/* FUNCIONES */

// Funcion para crear las tablas
function CreateTable(cableInfo) {
  let cable = cableInfo[0];
  fibras = cableInfo[1];
  tubos = cableInfo[2];
  let arrTemp = [];
  arrTubo = [];

  /* Bucle para llenar la array con todos los numeros */
  for (let i = 0; i < fibras * tubos; i++) {
    let aux = i + 1;
    arrTemp.push(aux);
  }

  /* Bucle para poder partir el array y construir las columnas */
  let division = tubos;

  for (let i = 0; i < arrTemp.length; i += division) {
    let pedazo = arrTemp.slice(i, i + division);
    arrTubo.push(pedazo);
  }

  return arrTubo;
}

function search(table, numero, cableInfo) {
  let color = cableInfo[3];
  let result = [];
  table.forEach((element, index) => {
    let position = element.indexOf(parseInt(numero));
    if (position != -1) {
      result = [
        index + 1,
        tubeColorInfo[color][index],
        espTubeColorInfo[color][index],
        position + 1,
        fibraColorInfo[color][position],
        espFibraColorInfo[color][position],
      ];
    }
  });
  return result;
}

function dibujar(result, numero, cable) {
  let d = new Date();
  let n = d.getTime();
  $("#resultados").append(`
    <article>
      <h3 class="cable">Cable: <b>${cables[cable]}</b></h3>
      <h3 class="tubo"> <span class="marca_${n}"></span> Tubo <b>${result[0]}</b> Color <i class="fas fa-square-full" style="color:${result[1]}"></i> ${result[2]}</h3>
      <h3 class="fibra">Fibra <b>${numero}</b> Color <i class="fas fa-square-full" style="color:${result[4]}"></i> ${result[5]} </h3>
    </article>
  `);
  generarMarcas(cables[cable], result, n);
}

function generarMarcas(tipoCable, result, n) {
  let numero = $("#numero").val();
  let company = $("#compañia").val();
  if (tipoCable == "256 F.O PKP") {
    if (parseInt(numero) >= 13) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary"> Primer /</span>`
      );
    }
  }
  if (tipoCable == "512 F.O PKP") {
    if (parseInt(result[3]) >= 9 && result[3] < 17) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary"> Primer /</span>`
      );
    } else if (parseInt(result[3]) >= 17 && result[3] < 25) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary"> Segundo / /</span>`
      );
    } else if (parseInt(result[3]) >= 25) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary"> Tercero / / /</span>`
      );
    }

    // Cambiamos el color en función de el tipo de marca
    // if (company == 1 || company == 3) {
    //   // Esto es una ñapa para cambiar el color de un tubo...
    //   let cont = $("#resultados article").length - 1;
    //   let article = $("#resultados article")[cont];
    //   let text = article.querySelector(".tubo").getInnerHTML();
    //   let replaceText = text.split("style")[1].split('"')[1];
    //   let replaceText2 = text.split("style")[1].split('"')[2];
    //   text = text.replace(replaceText, "color:white");
    //   text = text.replace(replaceText2, "></i> Blanco");
    //   article.querySelector(".tubo").setHTML(text);
    // }
  }

  if (tipoCable == "144 F.O Francia") {
    if (parseInt(numero) >= 97) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary">Primer /</span>`
      );
    }
  }

  if (tipoCable == "288 F.O Francia") {
    if (parseInt(numero) >= 193) {
      $(".marca_" + n).append(
        `<span class="badge badge-primary">Primer /</span>`
      );
    }
  }
}

function error(mensaje) {
  $("#resultados").prepend(
    `<div class="alert alert-danger" role="alert">${mensaje}</div>`
  );
}

/* EVENTOS */

/* Evento click para buscar */
$("#buscar").click(async function () {
  let cable = $("#cableSelect").val();
  let numero = $("#numero").val();
  let company = $("#compañia").val();

  if (company == "" || company == null) {
    error("Debes elegir una compañia");
  } else if (cable == "" || cable == null) {
    error("Debes elegir un tipo de cable");
  } else if (numero == "" || numero == null) {
    error("Debes escribir un numero");
  } else if (numero > cableInfo[cable][0]) {
    error("El numero es mas grande que el maximo del cable");
  } else {
    $(".alert-danger").remove();
    /* Llamamos a las funciones */
    let table = CreateTable(cableInfo[cable]);

    let result = search(table, numero, cableInfo[cable]);
    dibujar(result, numero, cable);
  }
});

$("#borrar").click(function () {
  $("#resultados").html("");
});

$(".fr").hide(); // Escondemos las opciones de francia

/* Ocultamos o mostramos en funcion de la compañia */
$("#compañia").change(function () {
  if ($("#compañia").val() == 6) {
    $(".es").hide();
    $(".fr").show();
  } else if ($("#compañia").val() < 6) {
    $(".fr").hide();
    $(".es").show();
  }
});
