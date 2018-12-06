
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

let portions = 
{
    frutas: {
        manzana: {
            nombre: "manzana",
            frecuencia: 0,
            cantidad: "1",
            medida: "pza"
        }  
    }
        
}