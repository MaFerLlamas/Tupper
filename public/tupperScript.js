let tupperDB = firebase.database();
// switch
// if is on follow the rules
let btnSwitch = document.querySelector('.switch');
let isStrict = false;
let numGroups = 16;
let containerCounter = document.querySelectorAll('.container-counter');
let foodFrame = {
  
  vegetable: 0,
  fruits: 0,
  cereal1: 0,
  cereal2: 0,
  legume: 0,
  animalA: 1,
  animalB: 0,
  animalC: 0,
  animalD: 0,
  milkA: 0,
  milkB: 0,
  milkC: 1,
  milkD: 0,
  gras1: 0,
  gras2: 0,
  sugar1: 0

}
showPortions();
function showPortions(){
  let cont = 0;
  for(i in foodFrame){
    if (foodFrame[i] > 0){
      containerCounter[cont].querySelector('.lbl-counter').innerHTML = foodFrame[i];
      containerCounter[cont].classList.add('visible');
    }
    cont++;
  }

  
 
}

btnSwitch.addEventListener('click',function(){
  isStrict = !isStrict;
  btnSwitch.classList.toggle('on');
  btnSwitch.classList.toggle('off');
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

 }



