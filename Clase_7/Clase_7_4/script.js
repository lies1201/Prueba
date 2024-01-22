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
else { 
  if ((op =='R') || (op =='r')) {//validar en caso que meta otra opcion
    resta = num1 - num2;
    alert("la resta " +num1+" - " +num2 + " es= " +resta);
  } else
  alert("LA operacion no se puede realizar);
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

alert("el usuario Bloqueado");*/
  

//El que dio la profe .Solucion 1

/*const USERC = "admin";
const PASSC = "1234";

var cont = 1;
var user;
var pass;
do{
  user = prompt("Inserta el usuario");
  pass = prompt("Inserta el pass");
  if(user == USERC && pass == PASSC){
    alert("Bienvenid@");
  }else{
    alert("Usuario y/o contraseña incorrecto. Llevas "+ cont + "intentos, dispones de 3");
  }
  cont++;
}while(cont <= 3 && (user != USERC || pass != PASSC));

if(cont == 3){
  alert("Intentos agotados");
}*/


//Solucion 2:

/*const USERC = "admin";
const PASSC = "1234";

var cont = 0;
var user;
var pass;
var entro;
do{
  user = prompt("Inserta el usuario");
  pass = prompt("Inserta el pass");
  entro = (user == USERC && pass == PASSC);
  cont++;
  if(!entro && cont!=3){ //yo le coloque el !=3 para que no muestre el 3 intento en el msj
    alert("Usuario y/o contraseña incorrecto. Llevas "+ cont + "intentos, dispones de 3");
  }
}while(cont < 3 && !entro);

if(entro){
  alert("Bienvenid@");
}else{
  alert("Intentos agotados");
}*/

/*Ejercicio 5: Solicita al usuario una letra, si inserta una a muestra el número 7, 
              si es una b, el 9, si es una c el 101 y si no es ninguno de los tres,
              indícale que se ha equivocado de letra*/

/*var letra = prompt("Inserte una letra");

  switch(letra){
    case 'a':
      console.log(7);
      break;
    case 'b':
      console.log(9);
      break;
    case 'c':
      console.log(101);
      break;
    default:
      console.log("Letra no válida");
  }*/


/*Ejercicio 6: Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja*/

var palabras = ["Casa", "Arbol", "Corazon", "Mango", "Zapato", "Loro", "Perro"];
var aux;

for (let i = 0; i < palabras.length; i++) {
  for (let j = 0; j < i; j++) {
   
    if (palabras[j] > palabras[j+1]) {
      aux= palabras[j];
      palabras[j] = palabras[j + 1];
      palabras[j + 1] = aux;
    } 
  }
}
console.log(palabras); 

