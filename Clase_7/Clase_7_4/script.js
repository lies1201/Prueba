//Ejercicio 1.: Solicita al usuario tres números enteros e indícale cuál es el menor.

/*var menor;
var n1 = prompt("Inserta el Primer número");
var n2 = prompt("Inserta el Segundo número");
var n3 = prompt("Inserta el Tercer número");

if ((n1<n2)&&(n1<n3)){
    menor=n1;
}
else {
    if ((n2<n1)&&(n2<n3)){
        menor=n2;
    }
    else {
        menor=n3;
    }
}
alert("El menor es: " +menor);*/


/*Ejercicio 2: Solicita al usuario una frase y una letra y muestra la 
cantidad de veces que aparece la letra en la frase.*/

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

//Ejercicio 3: Suma o resta (según elija el usuario) dos números reales

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
    resta = num1 - num2;
    alert("la resta " +num1+" - " +num2 + " es= " +resta);
}*/

/*ejercicio 4: Almacena en dos variables datos de validación (usuario y contraseña) 
correctos y permite que el usuario valide (dispone de 3 intentos)*/


var usuario = 'lies';
var clave = 'hola';
var user,pass;
let intentos=3;

    do{
        do{
            user = prompt("Inserta el usuario");
            pass = prompt("Inserta la clave");
            intentos--;
            alert("el usuario o la contraseña son incorrectos, te quedan " +intentos+" intentos");
        } while (intentos>0);
        alert("el usuario o");
    
    }while ((user!=usuario)||(pass!=clave));
    




