//ejemplo de la clase 8.1: getElemenstByTagName()

/*var parrafos;
function ejecutar () {
    parrafos = document.getElementsByTagName("p");
    for(let i=0; i<parrafos.length; i++) {
        let parrafo = parrafos[i].innerHTML;
        alert (parrafo);
    }
}*/

//ejemplo de getElementsByName()

/*var parrafos;
function ejecutar () {
    parrafos = document.getElementsByName("especial");
    for(var i=0; i<parrafos.length; i++) {
        //var parrafo = parrafos[i].innerHTML;
        var parrafo = parrafos[i].innerText;
        window.alert (parrafo);
    }
}*/

//Ejemplo de getElementById()

/*function ejecutar() {
    var parrafoElegido = window.prompt (" Seleccione Párrafo (1,2,3): ");
    var parrafo = document.getElementById (parrafoElegido);
    document.write (parrafo.innerHTML); // Escribimos directamente dentro del body (hay que usar innerHTML)
}*/

//Ejercicio clase 8.1:

//1-: Número de enlaces de la página

/*function numEnlaces(){

//var parrafos = document.getElementsByTagName("p");
var enlaces = document.getElementsByTagName("a");
document.write (enlaces.innerHTML);
var cont=0;
var enlace;

for (let i = 0; i < enlaces.length; i++) {
    cont++; 
}
console.log("Hay "+cont+" enlace(s)");
//alert("Hay "+cont+" enlace(s)");
} 
console.log(numEnlaces());*/

//2-: Dirección a la que enlaza el penúltimo enlace

function direccion () {
    var enlaces = document.getElementsByTagName("a");
    var penultimo;
    
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i]== enlaces[ enlaces.length - 2]){
            penultimo =  enlaces[i];   
        }
    }
   // document.write (penultimo.innerHTML);
   // console.log(enlaces[enlaces.length - 2]);
    console.log(penultimo);
}

console.log(direccion());


//3-: Numero de enlaces que enlazan a http://prueba

function enlacesPrueba () {
    var enlacesEj = document.getElementsByTagName("a");
    var cant=0;

    for (let i = 0; i < enlacesEj.length; i++) {
        if (enlacesEj[i]==){

        }
        
    }
 
}




//4-: Número de enlaces del tercer párrafo

function enlaceParrafo () {

}

