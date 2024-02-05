const mostrar = () =>{
    var numeros = document.querySelector("#num").value;
    var letras = document.querySelector("#cad").value;

    console.log(numeros);
    console.log(letras);
}

var button = document.getElementsByTagName('input')[2].setAttribute("onclick", "mostrar();");