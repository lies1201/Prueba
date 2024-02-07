//Crea un array de dos dimensiones (matriz)

var matriz = [[1,"Hola", 3,"como","estas",5],
              [4,"mal",4,8,"mas",8],
              [5,"Adios",5,"hey",7,5]];

function tieneString(elemento){
let r = false;
elemento.forEach(element => {
r = r || typeof(element) == "string";
});
return r;
}

var matrizParesString = matriz.filter((element, index) => index % 2 == 0 && tieneString(element));

var array = [];
if(matrizParesString.length > 0){
matrizParesString.forEach(element => element.forEach(e => array.push(e))) ;
}
var resultado = array.filter((element, index) => typeof(element) == "string" && (index % matriz[0].length) % 2 == 1);
console.log(resultado);


//Crea un array

function sumar() {
    var n = document.querySelector("#num").value;
    let arreglo = [1, 1];

    for (let i = 0; i < n-2; i++) {
        arreglo.push((arreglo[i]+arreglo[i+1]));
    }
    console.log(arreglo);   
}

 var button = document.getElementsByTagName('input')[1].setAttribute("onclick", "sumar();");




