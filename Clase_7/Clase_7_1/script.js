/*function holaMundo() {
    alert("Hola Mundo!");
  }
  
  function holaMundo2() {
    return "Hola Mundo2!";
  }
  
  //console.log(holaMundo());
  //console.log(holaMundo2());
  
  function saludar(nombre) {
    alert("Hola " + nombre + "!!");
  }*/

 /* (function () {
    let nombre = "Davinia"; //Si la declaráramos con var seguiría siendo local
    alert("Hola " + nombre);
  })();*/




  // Ejercicios: 1

  //Ejercicio 1: Funcion tradicional:

function comparar (){

    var n1 = prompt("Inserta un número");
    var n2 = prompt("Inserta otro número");
    var n3 = prompt("Inserta el último número");

    if(n1<=n2 && n1<=n3){
    alert("El menor es "+n1);
    }else{
    if(n2<=n1 && n2<=n3){
        alert("El menor es "+n2);
    } else{
        alert("El menor es "+n3);
      }
    } 
}

//Ejercicio 2: Funcion expresion

const cuenta = function (){

var frase = prompt("Inserta una frase");
var letra = prompt("Inserta una letra");
var cont = 0;


for (var i = 0; i < frase.length; i++) {
  if(frase[i]==letra){
    cont++;
  }
}

alert("El número de veces que aparece la "+ '"'+letra +'"'+ " es: "+ cont);

}


//Ejercicios 2: 

/*Ejercicio 2.1: Una función que devuelva el número de cifras de un entero solicitado al usuario*/

function cifras() {
    var num1;
    var cont = 0;
    num1 = parseInt(num1);
    num1 = prompt("Inserta una número");
    /*num2 = parseInt(num2);
    num2 = prompt("Inserta una número");*/

    while(num1>=0){

    }
}



/*ejercicio 2.2:Una función que muestre al usuario una secuencia de _ (se debe construir la 
                cadena de uno en uno), la cantidad de _ será solicitada al usuario*/


function cadena() {

    var cad ="";
    var num = prompt("Inserta una número");
    for (let i = 0; i < num; i++) {  
        cad = cad + "_ "; 
    }
    alert(cad);
}

/*Ejercicio 2.3: Una función que permita mostrar la secuencia (se debe construir 
                 la cadena de uno en uno): *+_     */

function mostrar() {
    var mos = "";
    var most ="";
    var mostra = "";
    var veces= 4;
    
    for (let i = 0; i < veces; i++) {
    
    // mos = mos + "*+_" 
    }
    alert(mos);
}

//Ejercicio 2.4: Una función que permita mostrar un triángulo como el siguiente:

function triangulo() {

    var t1="*";
    var t2="**";
    var t3="***"
    var t4="****"
    var t5="*****"

    alert(t1+"\n"+t2+"\n"+t3+"\n"+t4+"\n"+t5);
    
}