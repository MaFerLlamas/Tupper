let tupperDB = firebase.database();
// switch
// if is on follow the rules
let btnSwitch = document.querySelector('.switch');
let isStrict = true;

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
  isEstrict = true;

 }



