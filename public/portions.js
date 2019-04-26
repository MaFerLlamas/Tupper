
function classToName(nameclass){
    let aux;
    switch(nameclass){
      case "vegetables":
        aux="vegetales";
        break;
      case "fruits":
        aux="frutas";
        break;
      case "cereal1":
        aux="cereal S/G";
        break;
      case "cereal2":
        aux="cereal C/G";
        break;
      case "legume":
        aux="legumbre";
        break;
      case "animalA":
        aux="AOA A";
        break;
      case "animalB":
        aux="AOA B";
        break;
      case "animalC":
        aux="AOA C";
        break;
      case "animalD":
        aux="AOA D";
        break;
      case "milkA":
        aux="Leche A";
        break;
      case "milkB":
        aux="Leche B";
        break;
      case "milkC":
        aux="Leche C";
        break;
      case "milkD":
        aux="Leche D";
        break;
      case "gras1":
        aux="grasa C/P";
        break;
      case "gras2":
        aux="grasa S/P";
        break;
      case "sugar1":
        aux="Azúcar S/G";
        break;
    }
    return aux;
  }

  function NameToClass(name){
    let aux;
    switch(name){
      case "vegetales":
        aux="vegetables";
        break;
      case "frutas":
        aux="fruits";
        break;
      case "cereal S/G":
        aux="cereal1";
        break;
      case "cereal C/G":
        aux="cereal2";
        break;
      case "legumbre":
        aux="legume";
        break;
      case "AOA A":
        aux="animalA";
        break;
      case "AOA B":
        aux="animalB";
        break;
      case "AOA C":
        aux="animalC";
        break;
      case "AOA D":
        aux="animalD";
        break;
      case "Leche A":
        aux="milkA";
        break;
      case "Leche B":
        aux="milkB";
        break;
      case "Leche C":
        aux="milkC";
        break;
      case "Leche D":
        aux="milkD";
        break;
      case "grasa C/P":
        aux="gras1";
        break;
      case "grasa S/P":
        aux="gras2";
        break;
      case "Azúcar S/G":
        aux="sugar1";
        break;
    }
    return aux;
  }

let portions = 
{
    frutas: {
        manzana: {
            nombre: "manzana",
            frecuencia: 0,
            cantidad: "1",
            medida: "pza"
        },
        platano: {
          nombre: "platano",
          frecuencia: 0,
          cantidad: "1",
          medida: "pza"
      }  
    },

    vegetales: {
      apio: {
          nombre: "apio",
          frecuencia: 0,
          cantidad: "3/4",
          medida: "tza"
      },
      coliflor: {
        nombre: "coliflor",
        frecuencia: 0,
        cantidad: "1",
        medida: "tza"
      }  
    },
    "cereal S/G": {
      arroz: {
          nombre: "arroz",
          frecuencia: 0,
          cantidad: "1/4",
          medida: "tza"
      },
      atole: {
        nombre: "atole",
        frecuencia: 1,
        cantidad: "1/2",
        medida: "tza"
      } ,
      elote: {
        nombre: "elote",
        frecuencia: 0,
        cantidad: "3/4",
        medida: "pza"
      }  

    },
    "cereal C/G": {
      "galleta salada": {
          nombre: "galleta salda",
          frecuencia: 1,
          cantidad: "5",
          medida: "pzas"
      },
      granola: {
        nombre: "granola",
        frecuencia: 2,
        cantidad: "3",
        medida: "cdas"
      } ,
      "pan dulce": {
        nombre: "pan dulce",
        frecuencia: 2,
        cantidad: "1/2",
        medida: "pza"
      },
      "papas frtas": {
        nombre: "papas frtas",
        frecuencia: 1,
        cantidad: "1/2",
        medida: "bolsa"
      } 


    },
    "AOA A": {
      "atún en aceite": {
          nombre: "atún en aceite",
          frecuencia: 0,
          cantidad: "20",
          medida: "g"
      },
      "atún en agua": {
        nombre: "atún en agua",
        frecuencia: 0,
        cantidad: "35",
        medida: "g"
      } ,
      "bistec res": {
        nombre: "bistec res",
        frecuencia: 1,
        cantidad: "35",
        medida: "g"
      },
      "camaron": {
        nombre: "camaron",
        frecuencia: 0,
        cantidad: "6",
        medida: "pzas"
      },
      "cazón": {
        nombre: "cazón",
        frecuencia: 0,
        cantidad: "60",
        medida: "g"
    },
      "Cuete": {
        nombre: "cuete",
        frecuencia: 2,
        cantidad: "40",
        medida: "g"
      } ,
      "jamon": {
        nombre: "jamon",
        frecuencia: 1,
        cantidad: "1",
        medida: "rebanada"
      },
      "chuleta Ahumada": {
        nombre: "camaron",
        frecuencia: 2,
        cantidad: "1",
        medida: "pzas"
      },
      "queso cottage": {
        nombre: "queso cottage",
        frecuencia: 2,
        cantidad: "2",
        medida: "cdas"
      }, 
      "requesón": {
        nombre: "requesón",
        frecuencia: 0,
        cantidad: "3",
        medida: "cdas"
      },
      "surimi": {
        nombre: "surimi",
        frecuencia: 2,
        cantidad: "3/4",
        medida: "barra"
      },  


    },
    "AOA B": {
      "arrachera": {
          nombre: "arrachera",
          frecuencia: 0,
          cantidad: "1/4",
          medida: "pza"
      },
      "costilla de cerdo": {
        nombre: "costilla de cerdo",
        frecuencia: 1,
        cantidad: "25",
        medida: "g"
      } ,
      "Jamon": {
        nombre: "jamon",
        frecuencia: 2,
        cantidad: "2",
        medida: "rba"
      },
      "molida de res": {
        nombre: "molida de res",
        frecuencia: 0,
        cantidad: "40",
        medida: "g"
      },
      "arrachera": {
        nombre: "arrachera",
        frecuencia: 0,
        cantidad: "1/4",
        medida: "pza"
    },
    "panela": {
      nombre: "panela",
      frecuencia: 1,
      cantidad: "40",
      medida: "g"
    } ,
    "lomo": {
      nombre: "lomo",
      frecuencia: 2,
      cantidad: "40",
      medida: "g"
    },
    "sirlon": {
      nombre: "sirloin",
      frecuencia: 0,
      cantidad: "25",
      medida: "g"
    } 


    },

    "grasa S/P": {
      "aceite": {
          nombre: "aceite",
          frecuencia: 2,
          cantidad: "1",
          medida: "cdta"
      },
      "aderezos": {
        nombre: "aderezos",
        frecuencia: 2,
        cantidad: "2",
        medida: "cdas"
      } ,
      "aguacate": {
        nombre: "aguacate",
        frecuencia: 0,
        cantidad: "1/3",
        medida: "pza"
      },
      "tocino": {
        nombre: "tocino",
        frecuencia: 1,
        cantidad: "1",
        medida: "rebanada"
      },
      "crema": {
        nombre: "crema",
        frecuencia: 2,
        cantidad: "1",
        medida: "cda"
      },
      "mayonesa": {
        nombre: "mayonesa",
        frecuencia: 2,
        cantidad: "1",
        medida: "cdta"
      },
      "mantequilla": {
        nombre: "mantequilla",
        frecuencia: 2,
        cantidad: "1 1/2",
        medida: "cdtas"
      }



    },

    "Leche A": {
      "descremada": {
          nombre: "descremada",
          frecuencia: 0,
          cantidad: "1",
          medida: "tza"
      },
      "de soya": {
        nombre: "de soya",
        frecuencia: 0,
        cantidad: "1",
        medida: "tza"
      } ,
      "yogurth": {
        nombre: "yogurth",
        frecuencia: 0,
        cantidad: "2/3",
        medida: "tza"
      },
      "en polvo": {
        nombre: "en polvo",
        frecuencia: 2,
        cantidad: "3",
        medida: "cdas"
      },
      "yogurth frutas": {
        nombre: "yogurth frutas",
        frecuencia: 2,
        cantidad: "1/4",
        medida: "tza"
      },
      "sofúl": {
        nombre: "sofúl",
        frecuencia: 2,
        cantidad: "1",
        medida: "pza"
      }


    }



        
}