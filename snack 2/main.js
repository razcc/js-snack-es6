let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

let arrUppercase = students.map ( (element) => {
    return element.name.toUpperCase();
})

console.log(arrUppercase);


let arrVoti = students.filter ((element) => {
    if (element.grades > 70){
        return true
    }
})
console.log(arrVoti)


let arrSelection = arrVoti.filter((element) => {

    if (element.id > 120){
        return true
    }
})
console.log(arrSelection)