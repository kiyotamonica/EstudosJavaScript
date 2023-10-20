//armazenando uma funcao numa variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a,b) => a-b //qnd nao tem as chaves, ele vai executar apenas 1 unica sequencia de codigo e vai retornar 
console.log(subtracao(5,3))