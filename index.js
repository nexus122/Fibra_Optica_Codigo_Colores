/* Tipos de cable */
var cableInfo = [
    [32, 4, 8, 0],
    [48, 6, 8, 1],
    [64, 8, 8, 2],
    [96, 12, 8, 3],
    [128, 16, 8, 4],
    [256, 16, 16, 5],
    [512, 16, 32, 6],
    [144, 18, 8, 7],
    [288, 18, 16, 8],
]

var cables = [
    "32 F.O PKP",
    "48 F.O PKP",
    "64 F.O PKP",
    "96 F.O PKP",
    "128 F.O PKP",
    "256 F.O PKP",
    "512 F.O PKP",
    "144 F.O Francia",
    "288 F.O Francia",
]

/* En ingles para el color */
var tubeColorInfo = [
    ["white", "red", "blue", "green"], // 32
    ["white", "white", "red", "red", "blue", "blue"], // 48
    ["white", "white", "red", "red", "blue", "blue", "green", "green"], // 64
    ["white", "white", "white", "red", "red", "red", "blue", "blue", "blue", "green", "green", "green"], // 96
    ["white", "red", "blue", "green", "white", "white", "white", "red", "red", "red", "blue", "blue", "blue", "green", "green", "green"], // 128
    ["white", "red", "blue", "green", "white", "white", "white", "red", "red", "red", "blue", "blue", "blue", "green", "green", "green"], // 258
    ["white", "red", "blue", "green", "white", "white", "white", "red", "red", "red", "blue", "blue", "blue", "green", "green", "green"],  // 512   
    ["red", "blue", "green", "yellow", "purple", "white", "orange", "grey", "brown", "black", "cyan", "pink", "red", "blue", "green", "yellow", "purple", "white"],  // 144 F.O Francia    
    ["red", "blue", "green", "yellow", "purple", "white", "orange", "grey", "brown", "black", "cyan", "pink", "red", "blue", "green", "yellow", "purple", "white"]  // 288 F.O Francia    
]

var fibraColorInfo = [
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 32
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 48
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 64
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 96
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange"], // 128
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange", "white", "black", "pink", "cyan", "white", "yellow", "orange", "pink"], // 256
    ["green", "red", "blue", "yellow", "grey", "purple", "brown", "orange", "green", "red", "blue", "yellow", "grey", "purple", "white", "orange", "green", "red", "blue", "yellow", "grey", "purple", "white", "orange", "green", "red", "blue", "yellow", "grey", "purple", "white", "orange"],  // 512
    ["red", "blue", "green", "yellow", "purple", "white", "orange", "grey"],  // 144 Francia
    ["red", "blue", "green", "yellow", "purple", "white", "orange", "grey", "brown", "black", "cyan", "pink", "red", "blue", "green", "yellow"]  // 288 Francia
]

/* En español para las frases */
var espTubeColorInfo = [
    ["Blanco", "Rojo", "Azul", "Verde"], // 32
    ["Blanco", "Blanco", "Rojo", "Rojo", "Azul", "Azul"], // 48
    ["Blanco", "Blanco", "Rojo", "Rojo", "Azul", "Azul", "Verde", "Verde"], // 64
    ["Blanco", "Blanco", "Blanco", "Rojo", "Rojo", "Rojo", "Azul", "Azul", "Azul", "Verde", "Verde", "Verde"], // 96
    ["Blanco", "Rojo", "Azul", "Verde", "Blanco", "Blanco", "Blanco", "Rojo", "Rojo", "Rojo", "Azul", "Azul", "Azul", "Verde", "Verde", "Verde"], // 128
    ["Blanco", "Rojo", "Azul", "Verde", "Blanco", "Blanco", "Blanco", "Rojo", "Rojo", "Rojo", "Azul", "Azul", "Azul", "Verde", "Verde", "Verde"], // 258
    ["Blanco", "Rojo", "Azul", "Verde", "Blanco", "Blanco", "Blanco", "Rojo", "Rojo", "Rojo", "Azul", "Azul", "Azul", "Verde", "Verde", "Verde"],  // 512   
    ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco", "Naranja", "Gris", "Marron", "Negro", "Turquesa", "Rosa", "Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco"], // 144 Francia
    ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco", "Naranja", "Gris", "Marron", "Negro", "Turquesa", "Rosa", "Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco"] // 288 Francia       

]

var espFibraColorInfo = [
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 32
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 48
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 64
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 96
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja"], // 128
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja", "Blanco", "Negro", "Rosa", "Cyan", "Blanco", "Amarillo", "Naranja", "Rosa"], // 256
    ["Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Marron", "Naranja", "Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Blanco", "Naranja", "Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Blanco", "Naranja", "Verde", "Rojo", "Azul", "Amarillo", "Gris", "Violeta", "Blanco", "Naranja"],  // 512
    ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco", "Naranja", "Gris"], // 144 Francia
    ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Blanco", "Naranja", "Gris", "Marron", "Negro", "Turquesa", "Rosa", "Roja", "Azul", "Verde", "Amarillo"] // 288 Francia
]


/* FUNCIONES */

// Funcion para crear las tablas
function CreateTable(cableInfo) {
    var cable = cableInfo[0]; fibras = cableInfo[1]; tubos = cableInfo[2];
    console.log(`Cable: ${cable}, fibras: ${fibras} Tubo: ${tubos}`);
    var arrTemp = []; arrTubo = [];

    /* Bucle para llenar la array con todos los numeros */
    for (var i = 0; i < (fibras * tubos); i++) {
        var aux = i + 1;
        arrTemp.push(aux);
    }

    /* Bucle para poder partir el array y construir las columnas */
    var division = tubos;

    for (let i = 0; i < arrTemp.length; i += division) {
        let pedazo = arrTemp.slice(i, i + division);
        arrTubo.push(pedazo);
    }

    return arrTubo

}

function search(table, numero, cableInfo) {
    var temp = 0;
    var color = cableInfo[3];
    console.log("Color: ", color);
    var result = [];
    table.forEach((element, index) => {
        var position = element.indexOf(parseInt(numero));
        if (position != -1) {
            console.log(`Tubo: ${index + 1} Color: ${tubeColorInfo[color][index]} Fibra: ${position + 1} Color: ${fibraColorInfo[color][position]}`);
            result = [index + 1, tubeColorInfo[color][index], espTubeColorInfo[color][index], position + 1, fibraColorInfo[color][position], espFibraColorInfo[color][position]]
        }
    });
    return result
}

function dibujar(result, numero, cable) {
    var d = new Date();
    var n = d.getTime();
    $("#resultados").append(`<hr>`);
    $("#resultados").append(`<h3>Cable: <b>${cables[cable]}</b> Numero: <b>${numero}</b></h3>`);
    $("#resultados").append(`<h3>Tubo <b>${result[0]}</b> Color <i class="fas fa-square-full" style="color:${result[1]}"></i> ${result[2]}</h3>`);
    $("#resultados").append(`<h3>Fibra <b>${result[3]}</b> Color <i class="fas fa-square-full" style="color:${result[4]}"></i> ${result[5]} <span class="marca_${n}"></span></h3>`)
    generarMarcas(cables[cable], result, n);
}

function generarMarcas(tipoCable, result, n) {
    if (tipoCable == "256 F.O PKP") {
        if (parseInt(result[3]) >= 13) {
            $(".marca_" + n).append(`primero __/`);
        }
    }

    if (tipoCable == "512 F.O PKP") {
        if (parseInt(result[3]) >= 9 && result[3] < 17) {
            $(".marca_" + n).append(`primero /`);
        } else if (parseInt(result[3]) >= 17 && result[3] < 25) {
            $(".marca_" + n).append(`segundo / /`);
        } else if (parseInt(result[3]) >= 25) {
            $(".marca_" + n).append(`tercero / / /`);
        }
    }

    if (tipoCable == "144 F.O Francia") {
        if (parseInt(result[3]) >= 97) {
            $(".marca_" + n).append(`primero /`);
        }
    }

    if (tipoCable == "288 F.O Francia") {
        if (parseInt(result[3]) >= 193) {
            $(".marca_" + n).append(`primero /`);
        }
    }
}

function error(mensaje){
    $("#resultados").prepend(`<div class="alert alert-danger" role="alert">${mensaje}</div>`)
}

/* EVENTOS */

/* Evento click para buscar */
$("#buscar").click(async function () {
    var cable = $("#cableSelect").val();
    var numero = $("#numero").val();
    var company = $("#compañia").val();
    
    console.log(company)

    if(company == "" || company == null){
        error("Debes elegir una compañia")
    }else if(cable == "" || cable == null){
        error("Debes elegir un tipo de cable")       
    }else if(numero == "" || numero == null){
        error("Debes escribir un numero")       
    }
    else if(numero > cableInfo[cable][0]){
       error("El numero es mas grande que el maximo del cable")       
    }else{
        $(".alert-danger").remove();
         /* Llamamos a las funciones */
         var table = CreateTable(cableInfo[cable]);    

         var result = search(table, numero, cableInfo[cable]);
         console.log(result);
         dibujar(result, numero, cable);
    }
})

$("#borrar").click(function () {
    $("#resultados").html("");
})


$(".fr").hide(); // Escondemos las opciones de francia

/* Ocultamos o mostramos en funcion de la compañia */
$("#compañia").change(function () {
    if ($("#compañia").val() == 0) {
        $(".es").hide();
        $(".fr").show();
    } else if ($("#compañia").val() == 1) {
        $(".fr").hide();
        $(".es").show();
    }
})