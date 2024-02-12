function multiplyElements() {

    let array = [1, 5, 10, 15];
    let doubles = array.map( (x) => x * 2);
    return doubles;

 }

console.log(multiplyElements());

//2 ejercicio transforma un array de objetos a un array de string

function getNames() {
   let arrays = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
    {
      name: 'Zulema',
      lastName: 'Vicente',
      age: 21
    },
  ]

  let nombres = arrays.map(arrays => arrays.name);
  return nombres;
  }

console.log(getNames());

// 3 calcular y agregar una nueva propiedad

function addNewAttr() {
   let array=
   [
     {
       name: "Product 1",
       price: 1000.56,
       stock: 10
     },
     {
       name: "Product 2",
       price: 2000,
       stock: 20
     }
   ]

   return array.map((item) => {
    const copyItem = {...item};
    copyItem.taxes = Math.trunc(copyItem.price * 0.19)
    return copyItem;
  });

  }

  console.log(addNewAttr());

  // 4 Retorna solo palabras de 4 letras y más
   function filterByLength() {

    let Input= ['amor', 'sol', 'piedra', 'día'];
    let palabras= Input.filter((word) => word.length >= 4);
       return palabras;
  }

  console.log(filterByLength());


  // 5 Filtra las compras que cumplan con las condiciones
  
  function filterOrders() {
    let arrays =
    [
    {
        customerName: "Nicolas",
        total: 100,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 300,
        delivered: true,
    }
    ]
    let ordenes = arrays.filter((order)=>order.total >= 100 && order.delivered == true);
    return ordenes;
    //return arrays.filter((order)=>order.total >= 100 && order.delivered == true);
  }

  console.log(filterOrders());
  
  // 6 Busca dentro de un string y descubre si ¿Tiene la clave?

  function checkInString() {

    let text =  "Nicolas";
    let term = "tiago"

    let newtext = text.toUpperCase();
    let newterm = term.toUpperCase();

    return newtext.includes(newterm);
  }

  console.log(checkInString());

  // 7 Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda

  function filterByTerm() {
    let array = ["ana", "santi", "nico", "anastasia"];
    let term = "ana";

    let busqueda = array.filter((palabra)=> palabra.includes(term));

    return busqueda;
  }

  console.log(filterByTerm());

  // 8 Calcula la suma total de los elementos
  
  function calcSum() {
    
    let numbers = [ ];
    let suma=0;

        if (numbers.length == 0) {
            return 0;
        } else{
            suma=numbers.reduce(function(a,b){
            return a+b;
            });
        }

    return suma;
  }
console.log(calcSum());

// 9 Calcular la suma de todas las compras entre objetos

function calcTotal() {
    let orders = [
        {
          customerName: "Nicolas",
          total: 100,
          delivered: true,
        },
        {
          customerName: "Zulema",
          total: 120,
          delivered: false,
        },
        {
          customerName: "Santiago",
          total: 20,
          delivered: false,
        }
      ]

      let total = 0;

      if (orders.length==0){
        return 0;
      }
      else {
        let sumTotal = orders.map(orders => orders.total);
        total = sumTotal.reduce(function (x,y){
          return x+y;
        })
      }

      return total;

  }

  console.log(calcTotal());

  // 10 Retornar si al menos alguno de los números es par

  function checkArray() {
    let numbers = [1, 3, 5, 7, 10, 11];
   
    if (numbers.length==0){
        return false;
      }
      else {
      // return numbers.map((num)=>((num %2) == 0)).includes(true);
       return numbers.some((element) => element % 2 === 0);
      }

  }
  
  console.log(checkArray());

  // 11 Retorna un booleano si todos los elementos son pares

  function checkArrays() {
   let array = [2, 4, 6, 9, 10];

   if (array.length==0){
    return false;
    }
    else{
        return array.every((element) => element % 2 === 0);

     }
  }
console.log(checkArrays());

//12 Resuelve si dentro de una lista de cartas tienes el AS

/*Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'*/

function findAs() {
   let deck = ['diamonds', 'hearts', 'spades', 'AS'];

   if (deck.some((element) => element == 'AS' )){
    return "Tienes el AS";
    } else {
        return "No, tienes el AS";
    }

  
     
  }

  console.log(findAs());