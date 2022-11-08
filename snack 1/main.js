
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









