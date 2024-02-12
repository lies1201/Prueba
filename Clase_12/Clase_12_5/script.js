/* Realiza con POO un programa que permita pintar en un alert (la salida en el alert se
    debe ejecutar al pinchar en un botón en el HTML) lo siguiente: */

    class Hexagono {
        constructor(dim1, dim2) {
            this.dim1 = dim1;
            this.dim2 = dim2;
        }
        //Otro método
        dibujar() {
            var pintar = `Dimensión 1: ${this.dim1}\nDimensión 2: ${this.dim2}\n`;
            var espacios = this.dim1 - 1;
            var inicio;
            var limite;
            for (let i = 0; i < 7; i++) {
                inicio = espacios;
                if (i < 3) {
                    limite = espacios + this.dim1 + i * 2;
                    for (let k = 0; k < espacios; k++) {
                        pintar = pintar + "  ";
                    }
                    for (let j = inicio; j < limite; j++) {
                        pintar = pintar + "+";
                    }
                    espacios--;
                    pintar = pintar + "\n";
                } else {
                    limite = this.dim2 - espacios;
                    for (let k = 0; k < espacios; k++) {
                        pintar = pintar + "  ";
                    }
                    for (let j = inicio; j < limite; j++) {
                        pintar = pintar + "+";
                    }
                    espacios++;
                    pintar = pintar + "\n";
                }
            }
            alert(pintar);
        }
      }
      const r = new Hexagono(4,10);
      console.log(r);
      console.log(r.dim1);
      console.log(r.dim2);
      r.dibujar();
      