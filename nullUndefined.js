let valor
console.log(valor) // aparece undefined pq nao foi inicializada

valor = null // null => ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

if(produto.preco = 'undefined')
{
    console.log('Não há preco no produto')
}

produto.preco = 3.55
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

produto.preco = undefined //evitar fazer isso
console.log(!!produto.preco)
console.log(produto.preco)

delete produto.preco
console.log(produto)

produto.preco = null //basicamente esta falando q o produto esta sem preco, botar de 'graça'
