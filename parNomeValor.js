const saudacoes = 'Aoba'

function exec() {
    const saudacao = 'Fala Jovem'
    return saudacao
}

console.log(exec())

//Objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Qualquer',
        numero: -1
    }
}

console.log(Cliente)
console.log(Cliente.nome)
console.log(saudacoes)