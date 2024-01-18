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

  for (let i = 0; i < 12; i++) {
    if (i%3==0) {
      mos = mos + "*";
     } 
    else {
      if (i%3==1) {
        mos = mos + "+";
      }
      else
      mos = mos + "_";
    }  
  }
 // return (mos);
  alert(mos);

}
//console.log(mostrar());
 
//El que compartio la profe

/*function secuenciaSimple2(){
  var cadena = "";

  for (let i = 0; i < 9; i++) {
    if(i%3==0){
      cadena = cadena + "*";
    }else{
      if(i%3==1){
        cadena = cadena + "+";
      }else {
        cadena = cadena + "_";
      }
    }
  
    switch(i%3){
      case 0:
        cadena = cadena + "*";
        break;
      case 1:
        cadena = cadena + "+";
        break;
      default:
        cadena = cadena + "_";
        
    }
    
  }
  return cadena;
}
console.log(secuenciaSimple2());*/


//Ejercicio 2.4: Una función que permita mostrar un triángulo como el siguiente:

function FormaTriangulo() {
  var triangulo = "";

  /*for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
       triangulo= triangulo +"*";  
    }
    triangulo= triangulo + "\n";
    
  } return triangulo;*/

  for (let i = 5; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
       triangulo= triangulo +"*";  
    }
    triangulo= triangulo + "\n";
    
  } //return triangulo;
  alert(triangulo);
}
//console.log(FormaTriangulo());
//alert(FormaTriangulo());


/*Ejercicio 2.5: Una función que devuelva la diferencia en días entre dos fechas del mismo año 
                (sólo tenemos en cuenta dia y mes)*/

function fechas(){
  /*var dia = prompt("Inserta un dia");
  var mes = prompt("Inserta un mes");*/
  /*var dia2 = prompt("Inserta otro dia");
  var mes2 = prompt("Inserta otro mes");*/

  var dia = "12";
  var mes = "09";
  var diferencia, mes_dia;

if((mes>=0)&&(mwa<=12){
  for (let i = 0; i < mes; i++) {
    if ((mes[i]==2)){
      mes_dia=28;
    } else{
      if ((mes[i]==4)||(mes[i]==6)||(mes[i]==9)||(mes[i]==11)){
        mes_dia=30;
      } else
      mes_dia=31;
    }
  
    
  } 
} 
  
}


