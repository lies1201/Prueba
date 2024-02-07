//1- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada

//2-Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos

//3-Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace

//4-Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:propiedad innerHTML)

function ocultaMuestra(enlace,parrafo) {
   // var enlace =  document.getElementById("enlace_1");
   //var parrafo = document.getElementById("contenidos_1");

    if (enlace.textContent == "Ocultar contenidos"){
    parrafo.style.display = "none";
    enlace.innerHTML = "Mostrar";
    }
    else{
        parrafo.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos"; 
    }
}



window.onload = function() {

    document.getElementById("enlace_1").setAttribute("onclick", "ocultaMuestra(this,contenidos_1);");
    document.getElementById("enlace_2").setAttribute("onclick", "ocultaMuestra(this,contenidos_2);");
    document.getElementById("enlace_3").setAttribute("onclick", "ocultaMuestra(this,contenidos_3);");
}

