const nome = 'Emerson'
const concatenacao = 'Olá ' + nome + '!' //nesse caso, nao pode ter nem quebra de linha, já no template pode !
const template = `
    Olá
    ${nome}!` //template se faz com a crase
console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //uma função arrow, texto no caso é o argumento q ta sendo passado
console.log(`Ei... ${up('cuidado')}!`)