// destructuring em funcao
function rand({ min = 0, max = 1000 }) { //significa q vai passar um obj pra funcao, mas ele ja quer os atributos diretamente e nao acessar obj.min ou obj.max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 
console.log(rand({ max:50, min:35}))
