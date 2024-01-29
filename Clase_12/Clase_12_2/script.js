var caja = [];

function inicio(m01, m02, m05, m10, m20, m50, m100, m200, b5, b10, b20, b50, b100, b200, b500) {
    var total = m01 * 0.01 + m02 * 0.02 + m05 * 0.05 + m10 * 0.1 + m20 * 0.2 + m50 * 0.5 
                + m100 + m200 * 2 + b5 * 5 + b10 * 10 + b20 * 20 + b50 * 50 + b100 * 100 
                + b200 * 200 + b500 * 500;

    return [total.toFixed(2), m01, m02, m05, m10, m20, m50, m100, m200, b5, b10, b20, b50, b100, b200, b500];
}

//alert(caja);

caja = inicio(1, 3, 2, 1, 0, 0, 4, 5, 2, 8, 4, 1, 0, 0, 0);
var precio = parseFloat(prompt("ingrese el importe"));
var pago = prompt("ingrese el desglose del pago");
var desglose = pago.split(",");

for (let i = 0; i < desglose.length; i++) {
    desglose[i] = parseInt(desglose[i]);
};

desglose = inicio(desglose[0], desglose[1], desglose[2], desglose[3], desglose[4], desglose[5],
    desglose[6], desglose[7], desglose[8], desglose[9], desglose[10], desglose[11],
    desglose[12], desglose[13], desglose[14]);
var cambio = [];

if (desglose[0] == precio) {  //importe pagado justo
    alert("Gracias por su visita!!");
} else {
    if (desglose[0] < precio) { //importe insuficiente
        alert("te falta " + (precio - desglose[0]) + "€");
    } else { //se puede devolver cambio?
        if (caja[0] < (desglose[0] - precio)) {
            alert("No hay cambio!");
        } else {
            if (caja[0] == (desglose[0] - precio)) {
                alert("Caja vacía!");

          
for (let i = 0; i < caja.length; i++) { //le doy al usuario lo que hay en la caja
                    cambio[i] = caja[i];
                };

                for (let i = 0; i < desglose.length; i++) { //coloco en la caja lo que pagó el usuario
                    caja[i] = desglose[i];
                };
                alert("Caja: " + caja );
                alert("Cambio: " + cambio);
            }
        }
    }
}


// ¿Que pasaria si pongo el total al final del array?

// ¿Como puedo mostrar los desgloses bien?

// ¿Puedo meterlo todo en funciones?

// Casos de Prueba