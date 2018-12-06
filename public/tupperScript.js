let tupperDB = firebase.database();
// switch
// if is on follow the rules
let btnSwitch = document.querySelector('.switch');
let isStrict = true;
let numGroups = 16;
let containerCounter = document.querySelectorAll('.container-counter');

let counters = {
  
  vegetables: 0,
  fruits: 0,
  cereal1: 0,
  cereal2: 0,
  legume: 0,
  animalA: 0,
  animalB: 0,
  animalC: 0,
  animalD: 0,
  milkA: 0,
  milkB: 0,
  milkC: 0,
  milkD: 0,
  gras1: 0,
  gras2: 0,
  sugar1: 0

}

let userPlan = {
  morning: {
    cereal1: 2,
    animalA: 2,
    gras2: 2
  },
  snack1: {
    fruits: 2,
    gras1: 1
  },
  afternoon: {
    vegetables: 1,
    cereal1: 2,
    animalB: 1,
    gras2: 2
  },
  snack2: {
    fruits: 1,
    milkA: 1,
    gras1: 1
  },
  evening:{
    vegetables: 2,
    cereal1: 1,
    animalB: 1,
    gras2: 1
  }

}

initialize();


function takeUserPlan(){
  // iterates 5 types of meal
  let actualMeal;
  let aux;
  for(i in userPlan){
    actualMeal = document.querySelector('#' + i);
    // actualMeal.innerHTML = "";
    
    // iterates through the group content in every meal
    for (e in userPlan[i]){
      counters[e] += userPlan[i][e];
      console.log(e);
      aux += `<div class="portion ${e}">
				CEREAL
      </div>`
      console.log("meal" + actualMeal);
      console.log("group" + aux);
      actualMeal.innerHTML += aux;
      aux = ``;
    }
  }
}

function showPortions(){
  let cont = 0;
  for(i in counters){
    containerCounter[cont].classList.remove('visible');
    if (isStrict){
      if (counters[i] > 0){
        containerCounter[cont].querySelector('.counter').innerHTML = counters[i];
        containerCounter[cont].classList.add('visible');
      }
    }else{
      containerCounter[cont].querySelector('.counter').innerHTML = counters[i];
      containerCounter[cont].classList.add('visible');
    }
    cont++;
  }
}

btnSwitch.addEventListener('click',function(){
  isStrict = !isStrict;
  btnSwitch.classList.toggle('on');
  btnSwitch.classList.toggle('off');
  showPortions();
});

function writePortionData() {
    firebase.database().ref('porciones/' + 'frutas').push({
      nombre: "manzana",
      frecuencia: 0,
      cantidad: '1',
      medida: 'pza'
    });
  }

 function initialize(){
  isEstrict = false;
  takeUserPlan();
  showPortions();
 }



