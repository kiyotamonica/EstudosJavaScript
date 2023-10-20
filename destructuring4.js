function rand({min = 0, max = 1000}) {
    if(min > max) [min, max] = [max, min] //se a condicao for concedida, inverta as variaveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // cria um array com os dois atributos q foram obtidos atraves do destructuring
console.log(rand([50,40]))