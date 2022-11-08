
// ^---------SNACK 1------
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


let inputMin = document.getElementById("inputMin");
let inputMax = document.getElementById("inputMax");
let risultato = document.getElementById("risultato");

let btn = document.getElementById("btn");


// !FOR EACH
// const newArray = [];
// btn.addEventListener("click", function () {
//      newArray.length = 0;
//      let min = inputMin.value;
//      let max = inputMax.value;
//      stampaRisultato(min, max);
//      console.log(newArray)
//      risultato.innerHTML = newArray
//  })



//  function stampaRisultato(min, max) {

//      myArray.forEach((element, index) => {

//           console.log(element)
//           console.log(index)

//          if (index >= min && index <= max) {

//              newArray.push(element);
//          }
//      });

//  }

// ?FILTER
btn.addEventListener("click", function () {
    let min = inputMin.value;
    let max = inputMax.value;

    let newArray = myArray.filter((element, index) => {
        
        if (index >= min && index <= max) {
            return true;
        }
    })
    
    risultato.innerHTML = newArray;
})






// ^---------SNACK 2------
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

let newStudents = [];


