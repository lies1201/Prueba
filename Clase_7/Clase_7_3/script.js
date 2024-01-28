//Estructuras de control de flujo

//Condicional simple (if):

//Comprobar si el usuario acierta el 9
/*const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
} else {
  alert("No has acertado el número");
}*/

//Ejercicio: Indica el flujo de ejecución si el usuario acierta el número y si no

//Ejemplo 2:

//Comprobar si el usuario acierta el 9 y si lo hace, si el 9 es múltiplo de 3
/*const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
  if (n % 3 == 0) {
    alert("Es múltiplo de 3");
  }
} else {
  alert("No has acertado el número");
}*/

//Ejemplo 3:

//Comprobar si el usuario acierta el 9 y si el 9 es multiplo de 3 (a la vez)
/*const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2 && n % 3 == 0) {
  alert("Has acertado el número y es multiplo de 3");
} else {
  alert("No has acertado el número");
}*/

//Ejemplo 4:

//Comprobar si el usuario acierta el 9 y si no lo acierta, si el número insertado es múltiplo de 3
/*const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
} else {
  if (n2 % 3 == 0) {
    alert(
      "No has acertado el número, pero has insertado un número multiplo de 3"
    );
  }
  else{
    alert("No has acertado el número");
  }
}*/

//Condicional múltiple (switch):

/*var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    //break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
    //break;// NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}*/

//Bucle For:

//Ejemplos:

//Muestra los números del 0 al 9
/*for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
//Muestra los números del 1 al 10
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
//Muestra los números del 1 al 10 con operador de post incremento
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Muestra los números pares que hay entre 1 y 10
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}*/

//While





//Do While
