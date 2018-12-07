
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
    }
        
}