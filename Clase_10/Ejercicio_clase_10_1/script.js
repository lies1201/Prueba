/* Completar la función muestra de JavaScript para que realice lo siguiente:

1- Ocultar el enlace Seguir leyendo.
2- Mostrar el texto incluido dentro del span*/

function muestra() { 
    
var mostrar = document.getElementById("adicional");
mostrar.style.display = "inline";
var mostrar2 = document.getElementById("enlace2");
mostrar2.style.display = "inline";
var ocultar = document.getElementById("enlace1");
ocultar.style.display = "none";
   
}



/* Una vez acabada esta parte, realizar lo siguiente:

1- Crear un nuevo evento en el enlace2 que llamará a la función oculta().
2- Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.*/
function oculta(){

    var ocultar = document.getElementById("adicional");
    ocultar.style.display = "none";
    var ocultar2 = document.getElementById("enlace2");
    ocultar2.style.display = "none";
    var mostrar = document.getElementById("enlace1");
    mostrar.style.display = "inline";

  }