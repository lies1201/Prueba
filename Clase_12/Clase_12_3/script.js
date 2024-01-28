/*EJEMPLOS DE LA CLASE 12.3: Manejadores de eventos*/

//Manejadores como atributos

function fuera() {
    alert ("Has salido en la Caja!");
}
function encima() {
    alert (" Las características de la caja son: \n" +
    " 300px de ancho y 300px de alto \n" +
    " Color: Aguamarina");
}

//Manejadores como funciones externas

function dentro(objeto) {
    objeto.style.background = "yellow"; 
}

function fuera(objeto) {
    objeto.style.background = "red"; 
}

function oculta(objeto) {
    objeto.style.display = "none"; 
}

   
   
/*MANEJADORES SEMANTICOS*/

//Creamos una funcion externa
function muestraMensaje() {
    alert('Gracias por pinchar');
}

// Asigno la función externa al elemento
window.onload = function() {
    document.getElementById("pinchable").onclick = muestraMensaje;
}
   

//Otro ejemplo

window.onload = function () {
    var inputs = document.getElementsByTagName ("input");
    for (let i=0; i<inputs.length; i++) {
        if (inputs[i].type == "text" || inputs[i].type == "password") {
            inputs[i].onfocus = resalta;
            inputs[i].onblur = noresalta;
        }
    }
}

function resalta() {
    this.style.backgroundColor = "khaki";
    this.style.color = "red";
}

function noresalta() {
    this.style.backgroundColor = "white";
    this.style.color = "black";
}