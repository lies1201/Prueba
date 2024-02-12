//1- En el JSON del último ejemplo indica el código de acceso al email de The Bridge de Isabel.

let personas = `[
    {
      "nombre": "Francisco Ramirez",
      "edad": 29,
      "puesto": "Contable",
      "Emails": [
        "francisco@gmail.com",
        "francisco@hotmail.es",
        "francisco@thebridgeschool.es"
      ]
    },
    {
        "nombre": "Isabel Pérez",
        "edad": 31,
        "puesto": "Profesora",
        "Emails": [
          "isabel@gmail.com",
          "isabel@hotmail.es",
          "isabel@thebridgeschool.es"
        ]
      }
  ]`;
  
  let person = JSON.parse(personas)[1].Emails[2];
  console.log(person);

// 2- Partiendo del siguiente JSON

let localidades = `{
  "localidade 1": {
  "Continente": "África",
  "País": "Angola",
  "Capital": "Luanda"
  },
  "localidade 2": {
  "Continente": "América do Norte",
  "País": "Estados Unidos",
  "Capital": "Washington DC"
  },
  "localidade 3": {
  "Continente": "América Central",
  "País": "México",
  "Capital": "Cidade do México"
  },
  "localidade 4": {
  "Continente": "América do Sul",
  "País": "Brasil",
  "Capital": "Brasília"
  },
  "localidade 5": {
  "Continente": "Europa",
  "País": "Espanha",
  "Capital": "Madri"
  },
  "localidade 6": {
  "Continente": "Europa",
  "País": "Alemanha",
  "Capital": "Berlim"
  },
  "localidade 7": {
  "Continente": "Oceania",
  "País": "Austrália",
  "Capital": "Camberra"
  },
  "localidade 8": {
  "Continente": "Ásia",
  "País": "Japão",
  "Capital": "Tóquio"
  }
}`;

//Código para obtener el país de la localidade 8

let local8 = JSON.parse(localidades);
console.log(local8["localidade 8"].País);

// Código que permite añadir una localidad a tu elección

//let nuevaLocalidad = JSON.push(localidades);

