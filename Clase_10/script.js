// Obtener elementos por nombre de clase

function pintar() {
    var color = prompt("Inserta un color para pintar el primer div");
    var div = document.getElementsByClassName("clase1")[0];
    div.style = "background-color: "+ color;
}


//Inserción de nodos en el árbol


/*function ejecutar() {
    var texto = prompt(" Escriba el texto del párrafo: ");
    var etiqueta = document.createElement("p");
    var contenido = document.createTextNode (texto);
    etiqueta.appendChild (contenido);
    document.getElementsByClassName("nuevo")[0].appendChild(etiqueta);
  }*/


//Otro ejemplo

function ejecutar() {
    var num = prompt (" Elija la tabla de Multiplicar: ");
    // Defino la etiqueta que se va a presentar
    var etiqueta = document.createElement ("p");
    // Defino el contenido de la etiqueta (aquí, la tabla de Multiplicar)
    var textoNodo = document.createTextNode (multiplicar(num));
    // Completo el nodo agregando el contenido a la etiqueta
    etiqueta.appendChild(textoNodo); // El nodo completo
    // Añado el nodo (etiqueta+contenido) al parrafo
    document.getElementById("tablas").appendChild(etiqueta);
}
function multiplicar(tabla) {
    var cadena = "";

    for (let i=1; i<=10; i++) {
        cadena = cadena + i + " x " + tabla + " = " + (tabla * i) + "; ";
    }
    return cadena;
}
// Borrado
function borrar() {
    document.getElementById("tablas").removeChild (document.getElementById("tablas").lastChild);
}


// Borrado de nodos del árbol

/*function ejecutar() {
    // Obtenemos el elemento
    var li = document.getElementsByName("li")[(document.getElementsByName("li").length-1)];
    // Obtenemos el padre de dicho elemento
    var padre = li.parentNode;
    // Eliminamos el hijo (li) del elemento padre
    padre.removeChild(li);
}*/

// Para borrar seleccionando la posicion que hay que borrar

/*function ejecutar() {
    var pos = parseInt(prompt("Ingresa un aposicion a borrar"));
    if (pos>=1 && pos < document.getElementsByName("li").length) {
        // Obtenemos el elemento
    var li = document.getElementsByName("li")[pos]; // modificar
    // Obtenemos el padre de dicho elemento
    var padre = li.parentNode;
    // Eliminamos el hijo (li) del elemento padre
    padre.removeChild(li);
    } else {
        alert("numero invalido");
    }   
}*/


//otro ejemplo

function ejecutar() {
    // Obtenemos el elemento
    var lis = document.getElementsByName("li");
    var li = lis[(lis.length-1)];
    // Obtenemos el padre de dicho elemento
    var padre = li.parentNode;
    // Eliminamos el hijo (li) del elemento padre
    padre.removeChild(li);
}

// Otro ejemplo: Inserción y borrado en una lista :

function insertar() {
    var textoNodo = window.prompt(" Escriba el texto del nuevo elemento: ");
    var etiqueta = document.createElement("li");
    var contenido = document.createTextNode(textoNodo);
    etiqueta.appendChild(contenido);

    document.getElementById("miLista").appendChild(etiqueta);
}
function borrar() {
    miLista.removeChild(document.getElementById("miLista").lastChild);
}

//Extraer información de un input
function saludar() {
    var nombre = document.getElementsByName("nombre")[0];
    alert("Hola " + nombre.value);
}