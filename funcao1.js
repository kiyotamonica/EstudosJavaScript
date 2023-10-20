//Criando uma função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //em JS pode passar somente 1 dos argumentos, o outro sera dado como undefined
imprimirSoma(2, 3, 4, 5, 6) //assim como vc pode passar varios tbm, q vao ser ignorados kkkkkk


//função com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))