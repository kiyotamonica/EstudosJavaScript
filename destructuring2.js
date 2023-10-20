// Destructuring com Array
const [a] = [10] //criou uma variavel - array de 1 posicao - a q recebeu 10
console.log(a)

const[n1, , n3, n5, n8, n6 = 0] = [10, 3, 5, 8] //dessa forma vc pode selecionar varios ou somente 1 unico item da estrutura de um array e atribuir variaveis
console.log(n1, n3, n5, n8, n6)

// um array pode ter outros elementos do tipo array
const [, [, nota]] = [0,[0,3]]
console.log(nota)

// destructuring = uma forma de fazer atribuicoes mais rapidas