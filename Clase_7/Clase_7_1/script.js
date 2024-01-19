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
    
    var cont = 0;
    var num1 = parseInt(num1);
    num1 = prompt("Inserta una número");
  
      for (let i = 0; i < num1.length; i++) {
        cont=cont+1;
      }
      console.log("El número "+num1+" tiene "+cont+" cifra(s)"); 
      alert("El número "+num1+" tiene "+cont+" cifra(s)");
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

  //Triangulo

  /*for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
       triangulo= triangulo +"*";  
    }
    triangulo= triangulo + "\n";
    
  } return triangulo;*/

  // Triangulo Invertido

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
  
  mes=[31,28,31,30,31,30,31,31,30,31,30,31];
 
  var fecha1 = prompt("Inserta una fecha dia y mes");
  var fecha2 = prompt("Inserta otra fecha dia y mes");
  diferencia=0;

  for (let i = 0; i < fecha1.length; i++) {
    
    
  }




  
 /* if(Date.parse(fecha1) > Date.parse(fecha2)) {
   

    console.log("fecha 1 > fecha 2");
  }
  else {
    if (Date.parse(fecha1) < Date.parse(fecha2)) {
    console.log("fecha 2 > fecha 1");
    } 
    else {
    console.log("fecha 1 = fecha 2");
    }
  }*/
  
  
 

 
  
}


