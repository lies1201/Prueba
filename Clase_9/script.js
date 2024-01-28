//Ejercicios para repaso

/* 1- Desarrolle un programa que realice el sumatorio de los números enteros 
      comprendidos entre el 1 y el 10, es decir, 1 + 2 + 3 + …. + 10. */

function sumatoria() {

    var suma =0;
    for (let i = 1; i < 11; i++) {
        suma=suma + i;
        console.log(suma);
        
    }
   //return ("la suma es: "+suma);
   console.log("la suma es: "+suma);
  // alert("la suma es: "+suma)
    
}
//console.log(sumatoria());


/* Ejercicio 2: Desarrolle un programa que realice el sumatorio de los números enteros 
                comprendidos entre el primer número que quiera el usuario (n1) y el segundo 
                número que quiera el usuario (n2), es decir, n1 +...+ n2. */


function sumaUsuario() {
  
    var num1 = parseInt(prompt ("Ingrese un número entero"));
    var num2 = parseInt(prompt ("Ingrese otro número entero"));
    var suma;

    suma = num1 + num2;

   // return ("la suma de " +num1 +" + " +num2 +" es: " +suma);
    alert("la suma de " +num1 +" + " +num2 +" es: " +suma);
}
//console.log (sumaUsuario());


/* Ejercicio 3: Desarrolle un programa que permita leer un valor cualquiera
                n y escriba si dicho número es par o impar. */

function parImpar() {

    var num = parseInt(prompt ("Ingrese un número entero"));

    if (num%2 == 0) {
        console.log("El número "+num+ " es par");
        
    } else {
        console.log("El número "+num+ " es impar");
    }
    
}
//console.log (parImpar());


/* Ejercicio 4: Desarrolle un programa que permita leer un valor cualquiera n y 
                escriba si dicho número es primo o no. */


function primo() {
    var numero = parseInt(prompt ("Ingrese un número entero"));
    var i = 2;

    while (numero != 1 && numero % i != 0) {
        i++;   
    }

    if (i == numero || numero == 1){
        console.log("El número " +numero +" es primo");
    } else {
        console.log("El número " +numero +" no es primo");
    }
    return i==numero;
}



/* Ejercicio 5: Desarrolle un programa que permita leer un valor cualquiera dos
                valores (n1 y n2) y escriba todos los números primos entre n1 y n2. */


function esPrimo(n){
    var i = 2;
    while(n != 1 && n % i !=0){
      i++;
    }
    return n==i; 
}
  
function intervaloPrimos(n1,n2){
    for(var i = n1;i <= n2; i++){
       if(esPrimo(i)){
        console.log(i);
      }
    }
}

function numPrimo (){
  var a = parseInt(prompt("Inserte un número"));//5
  var b = parseInt(prompt("Inserte otro número"));//11

  if(a<b){
    intervaloPrimos(a,b);
  } else{
    intervaloPrimos(b,a);
  }
}