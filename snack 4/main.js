const calcio = [
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

function getRandomInt (min, max){
    return  Math.floor(Math.random() * max) + min;
}

calcio.forEach((element) => {
    element.puntiFatti = getRandomInt (1, 100);
    element.falliSubiti = getRandomInt (1, 100);
})

console.log(calcio)

const newArray = calcio.map (({nome, falliSubiti}) => {
    return {nome, falliSubiti}
})
console.log (newArray)