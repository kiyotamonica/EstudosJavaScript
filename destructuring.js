const pessoa = {
    nome:'Monica',
    idade: 26,
    endereco: {
        rua: 'Rua Qualquer',
        numero: 1
    }
}

const { nome, idade} = pessoa //isso é o destructuring, basicamente ta falando "tire os atributos nome e idade de pessoa"
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // pode ser feito assim tbm, nao necessariamente precisa utilizar os nomes iguais
console.log(n, i)

const { sobrenome, qualquerCoisa} = pessoa
console.log(sobrenome, qualquerCoisa)