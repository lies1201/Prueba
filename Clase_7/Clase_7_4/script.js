//Ejercicio 1.: Solicita al usuario tres números enteros e indícale cuál es el menor.

/*Esta opcion que hice no esta del todo correcta porque no se va a utilizar la variable menor
solo la necesitamos para mostrar, no para guardar*/

/*var menor;
var n1 = prompt("Inserta el Primer número");
var n2 = prompt("Inserta el Segundo número");
var n3 = prompt("Inserta el Tercer número");

if ((n1<=n2)&&(n1<=n3)){
    menor=n1;
}
else {
    if ((n2<=n1)&&(n2<=n3)){
        menor=n2;
    }
    else {
        menor=n3;
    }
}
alert("El menor es: " +menor);*/

// Se tiene que hacer de la siguiente manera:


/*var n1 = prompt("Inserta un número");
var n2 = prompt("Inserta otro número");
var n3 = prompt("Inserta el último número");

if(n1<=n2 && n1<=n3){
  alert("El menor es "+n1);
}else{
  if(n2<=n1 && n2<=n3){
    alert("El menor es "+n2);
  }else{
    alert("El menor es "+n3);
  }
}*/


/*Ejercicio 2: Solicita al usuario una frase y una letra y muestra la 
cantidad de veces que aparece la letra en la frase.*/

/*No se puede usar al while porque seria una mala practica*/

/*var frase = prompt("Inserta una frase");
var letra = prompt("Inserta una letra a buscar");
var contar=0;
var i=0;

while(i<frase.length){

    if(frase[i]==letra){
        contar++;
    }  
    i++;
}
alert("Hay " +contar +" veces" +"la letra "+letra);*/

//Se tiene que utilizar un for porque hay que recorrer la frase entera

/*var frase = prompt("Inserta una frase");
var letra = prompt("Inserta una letra");
var cont = 0;


for (var i = 0; i < frase.length; i++) {
  if(frase[i]==letra){
    cont++;
  }
}

alert("El número de veces que aparece la "+ letra + "es: "+ cont);*/


//Ejercicio 3: Suma o resta (según elija el usuario) dos números reales 

//debo validar que sea un numero y no letra

/*var num1 = prompt("Inserta el primer numero");
var num2 = prompt("Inserta el segundo numero");
var op = prompt("Selecciona la operacion a realizar: 'S' para sumar y 'R' para restar");
var suma,resta;
num1 = parseFloat(num1);
num2 = parseFloat(num2);

if ((op =='S') || (op =='s')) {
    suma = num1 + num2;
    alert("la suma " +num1+" + " +num2 + " es= " +suma);
} 
else { //validar en caso que meta otra opcion
    resta = num1 - num2;
    alert("la resta " +num1+" - " +num2 + " es= " +resta);
}*/

/*ejercicio 4: Almacena en dos variables datos de validación (usuario y contraseña) 
correctos y permite que el usuario valide (dispone de 3 intentos)*/


/*var usuario = 'lies';
var clave = 'hola';
var user,pass;
let intentos=4;

    do{
            user = prompt("Inserta el usuario");
            pass = prompt("Inserta la clave");
            intentos--;
            alert("el usuario o la contraseña son incorrectos, te quedan " +intentos+" intentos");

    }while (((user!=usuario)||(pass!=clave))&&(intentos>0));


    alert("el usuario Bloqueado");
    */




