console.log(Math.ceil(6,1))

const obj1 = {}
obj1.nome = 'Anthony'
// obj1['nome'] = 'Noah' //dá pra declarar assim tbm
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() { //com a notacao ponto é possível ate declarar funcao dentro dos atributos
        console.log('Executando ... :)')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
obj2.exec()