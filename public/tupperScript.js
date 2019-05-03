let tupperDB = firebase.database();
// switch
// if is on follow the rules
let btnSwitch = document.querySelector('.switch');
let isStrict = true;
let numGroups = 16;
let containerCounter = document.querySelectorAll('.container-counter');
let beforeColor;
let portionText;

// modal
let closeModal = document.querySelector('.close');
closeModal.addEventListener('click',function(){
  let modalSelect = document.querySelector('.modal-select');
  modalSelect.classList.remove('show-modal');
});
let searchBar = document.querySelector('.container-search');
searchBar.addEventListener('input',showSearch);

let portionsOptions; // clickeable portion

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

function showSearch(){
  let searchWord = document.querySelector('#input-search').value;
  let lblSelect = portionText.innerText;
  let box = document.querySelector('.container-choices');
  
  
  for (i in portions[lblText]){
   
    if (i == searchWord){
        box.innerHTML = "";
        box.innerHTML += `<div class="container-choice portion-box frecuency${portions[lblSelect][i].frecuencia}"> 
        ${portions[lblSelect][i].nombre}
        ${portions[lblSelect][i].cantidad}
        ${portions[lblSelect][i].medida}
        
      </div>`
    }
    

  }

}

function getModalPosition(meal){
  switch(meal)
  {
    case "morning":
      
      break;
    case "snack1":
      
      break;
    case "afternoon":
      
      break;
    case "snack2":
      
      break;
    case "evening":
      
      break;
    default:
      console.log("other day")
    break;
  }
}

function showAll(e){
  // al the portions are showed in the modal
  portionText = e.target;
  let actualSelected = e.target;
  let lblSelect = actualSelected.innerText;


  getModalPosition(actualSelected.parentNode.id);

  let lbl = document.querySelector('.lbl-select')
  let modalSelect = document.querySelector('.modal-select');
  let box = document.querySelector('.container-choices');

  lbl.innerText = lblSelect;
  box.classList.remove(beforeColor);
  box.classList.add(NameToClass(lblSelect));
  box.innerHTML = "";

  for (i in portions[lblSelect]){
    
    box.innerHTML += `<div class="container-choice portion-box frecuency${portions[lblSelect][i].frecuencia}"> 
        ${portions[lblSelect][i].nombre}
        ${portions[lblSelect][i].cantidad}
        ${portions[lblSelect][i].medida}
        
    </div>`

  }

  let allPortionBox = document.querySelectorAll('.container-choice');

  for (let i = 0; i < allPortionBox.length; i++){
    allPortionBox[i].addEventListener('click',function(e){
      console.log(e.target.innerText);;
      portionText.innerText = e.target.innerText;
    });
  }

  modalSelect.classList.remove('show-modal');
  modalSelect.classList.add('show-modal');
  modalSelect.style.left = "42vw";

  beforeColor = NameToClass(lblSelect);


}

function setListenerToPortions(){
  portionsOptions = document.querySelectorAll('.portion');
  for (let i = 0; i < portionsOptions.length; i++){
    portionsOptions[i].addEventListener('click',showAll);
  }
}

function takeUserPlan(){
  // iterates 5 types of meal
  let actualMeal;
  let aux = ``;
  for(i in userPlan){
    actualMeal = document.querySelector('#' + i);
    // actualMeal.innerHTML = "";
    
    // iterates through the group content in every meal
    for (e in userPlan[i]){
      counters[e] += userPlan[i][e];
      aux += `<div class="portion ${e} portion-box"> 
        ${classToName(e)}
      </div>`
      actualMeal.innerHTML += aux;
      aux = ``;
    }
  }
}

function showCounterPortions(){
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
  showCounterPortions();
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
  showCounterPortions();
  setListenerToPortions();
 }



