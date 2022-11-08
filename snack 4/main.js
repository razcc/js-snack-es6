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

calcio.forEach((element) => {
    element.puntiFatti = Math.floor(Math.random() * 10) + 1;
    element.falliSubiti = Math.floor(Math.random() * 10) + 1;
})

console.log(calcio)
