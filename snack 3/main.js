const arrayBici = [
    {
        nome: "bici1",
        peso: 10
    },
    {
        nome: "bici2",
        peso: 15
    },
    {
        nome: "bici3",
        peso: 7
    }
];


// console.log(arrayBici);


let biciLeggera = arrayBici[0];


// let {nome, peso} = biciLeggera;                     

for(let i = 0; i < arrayBici.length; i++){

    let elementoCorrente = arrayBici[i];
    let {peso} = elementoCorrente; 

    if(peso < biciLeggera.peso){
        biciLeggera = elementoCorrente;
    }
}
console.log(biciLeggera)

