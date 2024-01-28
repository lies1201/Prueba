//Operadores básicos:

//Cuestión: ¿Cuál es el resultado de 143 % 140?

var x=143;
var y=140;
var resto= x%y;
console.log(resto);

//2. Asignación (=)

/*var n = 7; //Asignación simple
console.log(n);
var n2 = 7;
n2 = n2 + n * 3; //En esta caso se resuelve la expresión de la derecha y cuando hay un resultado se asigna a n2
console.log(n2);*/

//3. Comparación

/*var n = 9;
var n2 = 9;
console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = "9";
console.log(n == n4); // Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n == n5); // Devuelve true porque son iguales los contenidos de las variables aunque no los tipos*/

//=== (igualdad estricta)

/*var n = 9;
var n2 = 9;
console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = "9";
console.log(n === n4); // Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n === n5); // Devuelve true porque son iguales los contenidos de las variables y los tipos*/

//!= (desigualdad)

/*var n = 9;
var n2 = 9;
console.log(n != n2); // Devuelve false porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n != n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = "9";
console.log(n != n4); // Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n != n5); // Devuelve false porque son iguales los contenidos de las variables aunque no los tipos*/

//!== (desigualdad estricta)

/*var n = 9;
var n2 = 9;
console.log(n !== n2); // Devuelve false porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n !== n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = "9";
console.log(n !== n4); // Devuelve true porque no son iguales los tipos de las variables
var n5 = 9.0;
console.log(n !== n5); // Devuelve false porque son iguales los contenidos de las variables y los tipos*/

//MAYOR Y MENOR QUE

/*var a = 9;
var b = 8;
console.log(a > b); //Devuelve true porque a es mayor que b
var c = 9;
console.log(a >= c); //Devuelve true porque a es igual que c

const cadena = "Hola";
const cadena2 = "Adios";
console.log(cadena > cadena2); //Devuleve true porque "Hola" es mayor alfabéticamente hablando
console.log(cadena < cadena2);*/

//OPERADOR NOT

/*var n = 9;
console.log(!(n == 9)); //Devuelve false porque la comparación da true y lo negamos
console.log(!false); //Devuelve true porque estamos negando false*/

//OPERADOR AND

/*var n = 9;
console.log(n == 9 && n > 3); //Devuelve true porque las dos comparaciones dan true y el AND entre dos true es true
console.log(n == 9 && n < 3); //Devuelve false porque n no es menor que 3*/

//Operador OR

/*var n = 9;
console.log(n == 9 || n > 3); //Devuelve true porque las dos comparaciones dan true y el OR entre dos true es true
console.log(n == 9 || n < 3); //Devuelve true porque la primera comparación es true
console.log(n == 7 || n < 3); //Devuelve false porque las dos son false y el OR entre dos false es*/